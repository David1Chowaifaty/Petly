import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
