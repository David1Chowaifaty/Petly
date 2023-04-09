import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import admin from "firebase-admin";
import { getUser } from "@/utils/registration";
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
  // adapter: FirestoreAdapter({
  //   credential: admin.credential.cert(
  //     JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY!)
  //   ),
  // }),
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
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await getUser(user.id);
      if (dbUser == null) {
        if (user) {
          token.id = user!.id;
        }

        return token;
      }
      const { data, id } = dbUser;
      return {
        id: data.id,
        email: data.email,
        picture: data.photoURL,
        name: data.name,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    redirect() {
      return "/";
    },
  },

  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
