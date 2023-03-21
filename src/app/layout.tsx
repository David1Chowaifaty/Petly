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
        <nav className="flex  items-center justify-between h-10 px-4 border-b py-1">
          <Link href={"/"} className="font-bold text-lg">
            Petly
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <SearchMenu />
            </li>
            <li className="md:hidden">
              <Menu />
            </li>
            <li className="hidden md:inline-flex"></li>
            <li className="hidden md:inline-flex"></li>
            <li className="hidden md:inline-flex"></li>
            <li className="hidden md:inline-flex"></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
