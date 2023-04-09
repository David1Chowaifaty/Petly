"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  CartItemType,
  removeFromCart,
  updateAmount,
} from "@/Redux/features/cartSlice";
import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import ViewProduct from "@/components/ViewProduct";

export default function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(calculateTotalPrice(items));
  const path = usePathname();
  useEffect(() => {
    setTotal(calculateTotalPrice(items));
  }, [items]);
  const router = useRouter();
  return (
    <main className="flex flex-col h-full w-full px-4 py-6 gap-5 md:items-center">
      <h1 className="text-xl text-gray-800 font-semibold w-full md:w-[60vw] text-start border-b h-fit py-4">
        Shopping Cart
      </h1>
      <div className="md:w-[60vw]">
        <div className="space-y-5 w-full">
          <LayoutGroup>
            <motion.section layout className="divide-y-2">
              {items.map((item, index) => (
                <ViewProduct
                  item={item}
                  onSelect={(item) =>
                    dispatch(
                      updateAmount({
                        index,
                        ["newAmount"]: item,
                      })
                    )
                  }
                  key={item.id}
                  removeItem={() => dispatch(removeFromCart(item))}
                />
              ))}
            </motion.section>
          </LayoutGroup>
          {total === 0 && (
            <h1 className="text-xl font-medium h-full">No Items Selected</h1>
          )}
          {total > 0 && (
            <section className="w-full  bg-gray-50 p-4 divide-y-2 rounded-lg">
              <div className="flex items-center justify-between py-4 text-gray-700 text-sm">
                <p>Subtotal</p>
                <h3 className="font-semibold text-base text-gray-900">
                  ${total}
                </h3>
              </div>
              <div className="flex items-center justify-between py-4 text-gray-700 text-sm">
                <p>Shipping</p>
                <h3 className="font-semibold text-base text-gray-900">$5</h3>
              </div>
              <div className="flex items-center justify-between py-4 text-gray-900 text-lg font-semibold">
                <h3>Order total</h3>
                <p>${total + 5}</p>
              </div>
            </section>
          )}
          {path === "/cart" && (
            <section className="w-full flex items-center justify-center">
              {total > 0 && (
                <button
                  onClick={() => router.push("/checkout")}
                  type="button"
                  className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw]"
                >
                  Checkout
                </button>
              )}
            </section>
          )}
          {path === "/cart" && (
            <button
              type="button"
              onClick={() => {
                //router.back()
                auth.signOut();
              }}
              className="font-medium  text-sky-600 flex items-center gap-3 justify-center w-full group"
            >
              {total > 0 && <p className="text-gray-600 text-sm">or</p>}
              <p className="group-hover:underline">Continue Shopping</p>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
function calculateTotalPrice(items: CartItemType[]) {
  let total = 0;
  items.forEach(
    ({ newAmount, amount, price }) =>
      (total +=
        (newAmount !== undefined ? newAmount : amount) * parseInt(price))
  );
  return total;
}
