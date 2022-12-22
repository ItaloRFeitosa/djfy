import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@lib/prisma"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      }),
  ],
}

export default NextAuth(authOptions)