import Link from "next/link";
import "./globals.css";
import Menu from "./components/Menu";
import SearchMenu from "./components/SearchMenu";

export const metadata = {
  title: "Petly",
  description:
    "Welcome to Petly, your one-stop-shop for all your pet's needs. Shop our wide selection of high-quality pet food and toys to keep your furry friend happy and healthy. We also offer expert medical consultancy services for pets, provided by certified professionals. Order now and receive free shipping on orders over $50. Shop now and give your pet the love and care they deserve.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden overflow-y-auto">
        <nav className="flex  items-center justify-between h-10 px-4 bg-white/60 backdrop-blur-md fixed top-0 left-0 w-full  py-1 md:h-16 ">
          <Link href={"/"} className="font-bold text-lg">
            Petly
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
