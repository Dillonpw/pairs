import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/prisma';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
});