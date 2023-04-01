"use client";
import React from "react";
import Link from "next/link";
import CartElement from "../components/CartElement";

export default function page() {
  return (
    <main className="flex flex-col h-full w-full px-4 py-6 gap-5 md:items-center">
      <h1 className="text-xl text-gray-800 font-semibold w-full md:w-[60vw] text-start border-b h-fit py-4">
        Shopping Cart
      </h1>
      <div className="md:w-[60vw]">
        <CartElement />
      </div>
    </main>
  );
}
