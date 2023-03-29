"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "../Redux/hooks";

export default function CartButton() {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className="relative h-6 w-6">
      {items.length > 0 && (
        <p className=" absolute -top-4 -right-2 bg-gray-200/50 rounded-full h-4 w-4 flex items-center justify-center select-none">
          {items.length}
        </p>
      )}
      <Link href="/cart">
        <ShoppingBagIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
