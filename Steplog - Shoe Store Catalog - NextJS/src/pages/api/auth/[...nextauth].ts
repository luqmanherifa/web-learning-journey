import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CreadentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CreadentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        fullname: { label: "Full Name", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password, fullname } = credentials as {
          email: string;
          password: string;
          fullname: string;
        };
        const user: any = { id: 1, email: email, password: password, fullname: fullname };
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
      }
      console.log({ token, account, user });
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);