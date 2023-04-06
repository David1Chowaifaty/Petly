import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import NextAuth from "next-auth/next";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
interface User {
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: string;
}
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            credentials!.email,
            credentials!.password
          );
          if (res) {
            const { uid, displayName, photoURL, email, emailVerified } =
              res.user;
            return { id: uid, displayName, photoURL, email, emailVerified };
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error: any) {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      console.log(token);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as User;
      session.user = user;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
