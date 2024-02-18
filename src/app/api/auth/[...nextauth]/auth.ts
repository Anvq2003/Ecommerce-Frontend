import { UserRepository } from '@/lib/auth/repositories';
import { getServerSession, NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: { signIn: '/login' },
  providers: [],
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
      }
      return token;
    },
    async session({ session, token }) {
      // session.user.id = token?.userId; //(3)
      return session;
    },
    async signIn({ account, user, credentials, email, profile }) {
      // check provider and create user if not exists
      switch (account?.provider) {
        case 'credentials':
          return true;
        default:
          return true;
      }
      return true;
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) {
      /* on signout */
    },
    async createUser(message) {
      /* user created */
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
    },
    async session(message) {
      /* session is active */
    },
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
