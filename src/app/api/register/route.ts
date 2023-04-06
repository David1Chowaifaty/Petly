import { signUpWithFb } from "@/utils/registration";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Missing email or password" })
    );
  }
  try {
    const user = await signUpWithFb(email, password);
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }));
  }
}
