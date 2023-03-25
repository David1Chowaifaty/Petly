import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="h-screen overflow-y-auto w-full  ">
      <h1>Cart</h1>
      {/*cart element*/}
      <Link
        href="/checkout"
        about="checkout page"
        className="bg-sky-400 px-4 py-1.5 w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-sky-500 active:ring"
      >
        Checkout
      </Link>
    </main>
  );
}
