"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { addToCart } from "../Redux/features/cartSlice";

export default function ProductClient({
  data,
  id,
}: {
  data: DocumentData;
  id: string;
}) {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : prev))}
          className="hover:border p-1 rounded-lg active:border-gray-200 active:border-2 hover:bg-gray-50/50 hover:backdrop-blur-sm"
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
          className="hover:border p-1 rounded-lg active:border-gray-200 active:border-2 hover:bg-gray-50/50 hover:backdrop-blur-sm"
        >
          <p className="sr-only">encrement item</p>
          <PlusIcon className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
      <button
        type="button"
        className="bg-sky-500 text-white px-4 w-96 py-1.5 font-medium rounded-lg hover:bg-opacity-80"
        onClick={() =>
          dispatch(addToCart({ ...data, ["id"]: id, ["amount"]: counter }))
        }
      >
        Add To Cart
      </button>
    </div>
  );
}
