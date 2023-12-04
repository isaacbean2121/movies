import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

// Defining an asynchronous function for the LoginPage
export default async function LoginPage() {
  // Attempting to retrieve the current server session
  const session = await getServerSession();

  // If a session exists, it means the user is already logged in
  if (session) {
    // Redirecting the user to the '/login' page
    redirect('/login');
  }

  // If there is no session, rendering the Form component (the login form)
  return <Form />;
}
