import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Missing email or password" })
    );
  }
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }));
  }
}
