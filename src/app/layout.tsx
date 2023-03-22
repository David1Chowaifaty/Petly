import Link from "next/link";
import "./globals.css";
import Menu from "./components/Menu";
import SearchMenu from "./components/SearchMenu";
import Logo from "./assets/logo_transparent.png";
import Image from "next/image";
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
        <nav className="flex  items-center justify-between h-10 px-4 bg-white/60 backdrop-blur-md fixed top-0 left-0 w-full  py-2 md:h-16 ">
          <Link href={"/"} className="font-bold text-lg">
            <Image src={Logo} alt="logo" width={116} />
          </Link>
          <ul className="flex items-center h-full space-x-6 md:flex-row-reverse">
            <li className="md:ml-6">
              <SearchMenu />
            </li>
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
        </nav>
        {children}
      </body>
    </html>
  );
}
