import Link from "next/link";
import "./globals.css";
import Menu from "./components/Menu";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
export const metadata = {
  title: "Petly",
  description:
    "Welcome to Petly, your go-to resource for all things pertaining to your pet. To keep your furry buddy happy and healthy, browse our extensive range of premium pet food and toys. We also supply qualified specialists with our expert medical consulting services for animals. For orders over $50, shipping is free right now. Provide your pet the love and attention they deserve by shopping right away.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden overflow-y-auto">
        <nav className="flex  items-center justify-between h-10 px-4  bg-white/60  backdrop-blur-md sticky top-0 left-0 w-full  py-2 md:h-16 z-40 md:space-x-4">
          <Link
            href={"/"}
            className="font-bold text-lg order-2 md:order-1 md:flex-1"
          >
            Petly
          </Link>
          <ul className="flex items-center h-full space-x-6 md:flex-row-reverse order-1 md:order-2">
            <li className="md:hidden">
              <Menu />
            </li>
            <li className="hidden md:inline-flex">
              <Link href={"/"}>Health</Link>
            </li>
            <li className="hidden md:inline-flex">
              <Link href={"/"}>Toys</Link>
            </li>
            <li className="hidden md:inline-flex">
              <Link href={"/"}>Food and Treats</Link>
            </li>
            <li className="hidden md:inline-flex">
              <Link href={"/"}>Home</Link>
            </li>
          </ul>
          <Link href="/cart" className="order-3">
            <ShoppingBagIcon className="h-6 w-6" />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
