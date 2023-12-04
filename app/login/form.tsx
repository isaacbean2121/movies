// This code configures NextAuth for user authentication and authorization
// It uses JWT strategy for session management and customizes the sign-in page route
// It also includes a CredentialsProvider for email and password credential verification
// SQL queries are used to find and authenticate users from the database
// The handler is exported for both GET and POST requests

// By Isaac Bean and Siem Debesay
// 2023/12/03

'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  // Initializing the Next.js router
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Extracting form data
    const formData = new FormData(e.currentTarget);

    // Using NextAuth's signIn method for authentication
    const response = await signIn('credentials', {
      email: formData.get('email'), // Getting the email input value
      password: formData.get('password'), // Getting the password input value
      redirect: false, // Disabling automatic redirection after sign in
    });

    console.log({ response });

    // If there's no error in the response, navigate to the '/movies' route
    if (!response?.error) {
      router.push('/movies');
      router.refresh(); // Refreshing the page to ensure the latest state
    }
  };

  return (
<form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto max-w-md mt-10 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl">
    <input
        name="email"
        className="bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-pink-300 py-2"
        type="email"
        placeholder="Email"
    />
    <input
        name="password"
        className="bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-pink-300 py-2"
        type="password"
        placeholder="Password"
    />
    <button type="submit" className="mt-4 bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow">
        Login
    </button>
    <p>
  Regular user: 
  <br />
  Email = user1@user.com
  <br />
  Password = password1
</p>
<p>
  Admin: 
  <br />
  Email = user2@user.com
  <br />
  Password = password2
</p>
<p> After the first login, clear your saved login data if you want to access the login</p>

</form>
  );
}