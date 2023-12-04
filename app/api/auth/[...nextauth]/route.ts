import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
  session: {
    strategy: 'jwt', // Using JWT strategy for session management
  },
  pages: {
    signIn: '/login', // Custom sign-in page route
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {}, // Email credential
        password: {}, // Password credential
      },
      async authorize(credentials, req) {
        // SQL query to find user by email
        const response = await sql`
          SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = response.rows[0]; // Extracting the user from the query result

        // Checking if the password matches
        const passwordCorrect = user && credentials?.password === user.password;

        // Logging the result for debugging
        console.log({ passwordCorrect });

        // If the password is correct, return user data
        if (passwordCorrect) {
          return {
            id: user.id, // User's id
            email: user.email, // User's email
          };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
});

// Exporting the handler for both GET and POST requests
export { handler as GET, handler as POST };
