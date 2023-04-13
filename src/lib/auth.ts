import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "@/utils/registration";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
//import { firestore } from "./firestore";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // adapter: FirestoreAdapter(),
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.name = token.name;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && user.id) {
        const dbUser = await getUser(user.id);
        if (!dbUser) {
          token.id = user?.id;
          return token;
        }
        const { data, id } = dbUser;
        token.id = id;
        token.email = data.email;
        token.name = data.name;
        token.picture = data.photoURL;

        return token;
      }
      return token;
    },

    redirect() {
      return "/";
    },
  },
};
