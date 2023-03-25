import Link from "next/link";
import "./globals.css";
import Menu from "./components/Menu";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import SearchMenu from "./components/SearchMenu";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import NewsLetter from "./components/NewsLetter";
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
        <nav className="flex items-center justify-between h-14 px-4  bg-white/60  backdrop-blur-md sticky top-0 left-0 w-full  py-2 md:h-16 z-40 md:space-x-4 lg:h-20">
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
          <div className="hidden md:block order-3 w-48">
            <SearchMenu />
          </div>
          <Link href="/cart" className="order-4">
            <ShoppingBagIcon className="h-6 w-6" />
          </Link>
        </nav>
        {children}
        <footer className="w-full bg-[#F3F3F3] px-6  lg:px-20 ">
          <div className="flex flex-col items-center space-y-7 py-6 md:flex-row md:justify-around border-b md:space-y-0 border-gray-300 md:flex-wr">
            <section className="flex flex-col w-full items-center space-y-5 md:items-start max-w-xs">
              <h1 className="font-bold text-2xl">Petly</h1>
              <h2>Leave your pet in safe hands</h2>
              <div className="flex items-center justify-center space-x-6 w-full md:justify-start">
                <span className="p-2 rounded-lg bg-gray-50 cursor-pointer text-gray-600">
                  <FaInstagram size={18} />
                </span>
                <span className="p-2 rounded-lg bg-gray-50 cursor-pointer text-gray-600">
                  <FaFacebookF size={18} />
                </span>
                <span className="p-2 rounded-lg bg-gray-50 cursor-pointer text-gray-600">
                  <FaTwitter size={18} />
                </span>
              </div>
            </section>
            <section className="flex flex-col w-full items-center space-y-5 md:items-start lg:w-[25vw]">
              <h1 className="font-bold text-xl">Quick Links</h1>
              <div className="grid gap-2 grid-cols-2 w-full  justify-items-center md:justify-items-start">
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Training</Link>
                <Link href={"/"}>Toys</Link>
                <Link href={"/"}>Grooming</Link>
                <Link href={"/"}>Services</Link>
              </div>
            </section>
            <section className="space-y-5 text-center md:text-start w-full lg:w-auto">
              <h1 className="font-bold text-xl">Join our news letter</h1>
              <NewsLetter />
            </section>
          </div>
          <div>
            <h3 className="text-center py-6 text-sm">
              @2023 petly | All Rights Reserved
            </h3>
          </div>
        </footer>
      </body>
    </html>
  );
}
