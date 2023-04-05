"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { addToCart } from "../Redux/features/cartSlice";

export default function ProductClient({
  data,
  id,
  category,
}: {
  data: DocumentData;
  id: string;
  category: string;
}) {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : prev))}
          className="active:scale-90 active:text-gray-600 hover:text-gray-700"
        >
          <p className="sr-only">decrement item</p>
          <MinusIcon className="h-5 w-5" strokeWidth={2} />
        </button>
        <p className="select-none">{counter}</p>
        <button
          type="button"
          onClick={() =>
            setCounter((prev) => (data.quantity > prev ? prev + 1 : prev))
          }
          className="active:scale-90 active:text-gray-600 hover:text-gray-700"
        >
          <p className="sr-only">encrement item</p>
          <PlusIcon className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
      <button
        type="button"
        disabled={counter === 0}
        className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw] disabled:bg-sky-300 disabled:cursor-not-allowed"
        onClick={() =>
          dispatch(
            addToCart({
              ...data,
              ["id"]: id,
              ["amount"]: counter,
              category,
            })
          )
        }
      >
        Add To Cart
      </button>
    </div>
  );
}
