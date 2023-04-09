import CheckoutForm from "../../components/CheckoutForm";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Checkout() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  return (
    <main className="h-full">
      <CheckoutForm session={session} />
    </main>
  );
}
