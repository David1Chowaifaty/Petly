import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
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
    newUser: "/register",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
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
            const { uid, displayName, photoURL, email } = res.user;
            return { id: uid, name: displayName, image: photoURL, email };
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error: any) {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
