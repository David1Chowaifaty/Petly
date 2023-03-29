"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import Image from "next/image";

export default function CartElement() {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className="space-y-5 divide-y-2 w-full">
      {items.map((item) => (
        <div key={item.id} className="flex w-full justify-between py-3">
          <div className="flex gap-4 h-fit">
            <Image
              src={item.images[0]}
              alt=""
              height={300}
              width={300}
              className="h-48 w-48 rounded-md"
            />
            <div className="flex flex-col justify-between w-24">
              <p className="md:flex-1">{item.name}</p>
              <div className="flex items-center gap-4 md:hidden ">
                <select
                  aria-label={`quantity_${item.id}`}
                  className="active:outline-none border rounded-md w-16 h-7"
                >
                  <option value={item.amount}>{item.amount}</option>
                  <option value={item.amount + 1}>{item.amount + 1}</option>
                  <option value={item.amount + 2}>{item.amount + 2}</option>
                </select>
                <button
                  type="button"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
              <p className="flex  items-center gap-2">
                <span>
                  <CheckIcon className="h-4 w-4 text-emerald-400" />
                </span>
                In stock
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center md:flex-col gap-4">
            <select
              aria-label={`quantity_${item.id}`}
              className="active:outline-none border rounded-md w-16 h-7"
            >
              <option value={item.amount}>{item.amount}</option>
              <option value={item.amount + 1}>{item.amount + 1}</option>
              <option value={item.amount + 2}>{item.amount + 2}</option>
            </select>
            <button type="button" className="text-blue-600 hover:underline">
              Remove
            </button>
          </div>

          <p className="w-24 text-end">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
