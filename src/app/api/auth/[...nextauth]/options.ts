import type { NextAuthOptions } from 'next-auth';
import GoogleProviders from 'next-auth/providers/google';

export const options: NextAuthOptions = {
  session: { strategy: 'jwt' },
  pages: {},
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ user, token, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.accessToken}`,
        );
        const data = await response?.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};
