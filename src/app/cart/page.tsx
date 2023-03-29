import React from "react";
import Link from "next/link";
import CartElement from "../components/CartElement";

export default function page() {
  return (
    <main className="grid  h-full w-full px-4 py-6 gap-5 md:justify-items-center">
      <h1 className="text-xl text-gray-800 font-semibold w-[60vw] text-start border-b h-fit py-4">
        Shopping Cart
      </h1>
      <div className="md:w-[60vw]">
        <CartElement />
      </div>
      <Link
        href="/checkout"
        about="checkout page"
        className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw]"
      >
        Checkout
      </Link>
    </main>
  );
}
