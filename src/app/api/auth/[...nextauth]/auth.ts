import { getServerSession, NextAuthOptions, User } from 'next-auth';
import Credentials from 'node_modules/next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt', //(1)
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.userId; //(3)
      return session;
    },
  },
  // pages: {
  //   signIn: '/login', //(4)
  // },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const user: User = { id: '1', name: 'Test User', email: credentials.email };
        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
