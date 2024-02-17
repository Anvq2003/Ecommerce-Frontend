'use client';
import { useSession,signIn } from 'next-auth/react';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const { data, status } = useSession();
  if (status === 'authenticated') {
    return <p>Signed in as {JSON.stringify(data)}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
