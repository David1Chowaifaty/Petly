"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { afterRefresh } from "../../Redux/features/cartSlice";

export default function CartButton() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let cart = sessionStorage.getItem("cart");
    if (cart !== null) {
      dispatch(afterRefresh(JSON.parse(cart)));
    }
  }, [dispatch]);
  const items = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
  return (
    <div className="flex items-center gap-1 h-6 w-6">
      <Link href="/cart">
        <ShoppingBagIcon className="h-6 w-6" />
      </Link>
      {items.length > 0 && <p className="select-none">{items.length}</p>}
    </div>
  );
}
