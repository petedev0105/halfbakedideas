import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from "next-auth/providers/google";

import prisma from '../../../lib/prisma';

export default NextAuth({
providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,

  callbacks: {
    session: async ({ session, user }) => {
      session.userId = user.id;
      return Promise.resolve(session);
    }
  }
})


