import CheckoutForm from "../../components/CheckoutForm";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <main className="h-full">
      <CheckoutForm session={session} />
    </main>
  );
}
