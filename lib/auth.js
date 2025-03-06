import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET, // Same as `JWT_SECRET`
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const cookieStore = await cookies();
        try {
          const response = await login({
            email: credentials.email,
            password: credentials.password,
            timeout: 10000,
          });

          if (!response.ok) {
            throw new Error(response);
          }

          const token = response?.data?.token;
          // set cookie for the monolith and so API's can fetch via cookie
          cookieStore.set(USER_TOKEN_KEY, token);

          return response?.data;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // On successful login, attach additional info to the token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Make the returned session match the token data
      if (token) {
        session.id = token.id;
        session.email = token.email;
      }
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true, // Optional: Encrypt JWT for added security (requires key rotation)
  },
});

