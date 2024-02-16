import NextAuth from 'next-auth';
import { options } from './options';

export const { handlers, auth, signIn, signOut } = NextAuth(options);
