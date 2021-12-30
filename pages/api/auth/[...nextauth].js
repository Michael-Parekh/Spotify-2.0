import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      // Environment variables are for the secret items (won't be pushed to GitHub).
      // Remember that the server needs to be restarted when environment variables are added.
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
});
