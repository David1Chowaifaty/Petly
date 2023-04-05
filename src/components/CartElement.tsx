"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import Image from "next/image";
import {
  CartItemType,
  removeFromCart,
  updateAmount,
} from "../Redux/features/cartSlice";
import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Select from "./ui/SelectMenu/Select";
export default function CartElement() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(calculateTotalPrice(items));
  const path = usePathname();
  useEffect(() => {
    setTotal(calculateTotalPrice(items));
  }, [items]);
  const router = useRouter();
  return (
    <div className="space-y-5 w-full">
      <LayoutGroup>
        <motion.section layout className="divide-y-2">
          {items.map((item, index) => (
            <div key={item.id} className="flex w-full justify-between py-3">
              <div className="flex gap-4 h-fit">
                <Image
                  src={item.images[0]}
                  alt=""
                  height={200}
                  width={200}
                  className="h-48 w-48 rounded-md object-cover object-center"
                />
                <div className="flex flex-col justify-between w-36 md:w-24">
                  <p className="md:flex-1">{item.name}</p>
                  <div className="flex items-center gap-4 md:hidden ">
                    <Select
                      items={Array.from(
                        Array(11 - item.amount),
                        (_, i) => i + item.amount
                      )}
                      onSelect={(item) =>
                        dispatch(
                          updateAmount({
                            index,
                            ["newAmount"]: item,
                          })
                        )
                      }
                    />
                    <button
                      type="button"
                      className="text-blue-600 text-sm hover:underline"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="flex  items-center gap-2">
                    <span>
                      <CheckIcon
                        className="h-4 w-4 text-emerald-400"
                        strokeWidth={2}
                      />
                    </span>
                    In stock
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center md:flex-col gap-4">
                <Select
                  items={Array.from(
                    Array(11 - item.amount),
                    (_, i) => i + item.amount
                  )}
                  onSelect={(item) =>
                    dispatch(
                      updateAmount({
                        index,
                        ["newAmount"]: item,
                      })
                    )
                  }
                />
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </button>
              </div>

              <p className="w-24 text-end">${item.price}</p>
            </div>
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
            <h3 className="font-semibold text-base text-gray-900">${total}</h3>
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
          onClick={() => router.back()}
          className="font-medium  text-sky-600 flex items-center gap-3 justify-center w-full group"
        >
          {total > 0 && <p className="text-gray-600 text-sm">or</p>}
          <p className="group-hover:underline">Continue Shopping</p>
        </button>
      )}
    </div>
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
