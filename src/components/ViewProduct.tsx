import { CartItemType } from "@/Redux/features/cartSlice";
import { CheckIcon } from "@heroicons/react/24/outline";
import Select from "./ui/SelectMenu/Select";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ViewProductProps {
  item: CartItemType;
  onSelect: (item: number) => void;
  removeItem: () => void;
}

const ViewProduct: FunctionComponent<ViewProductProps> = ({
  item,
  onSelect,
  removeItem,
}) => {
  return (
    <div className="flex w-full justify-between py-3">
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
              amount={
                item.newAmount !== undefined ? item.newAmount : item.amount
              }
              items={Array.from(
                Array(
                  parseInt(item.quantity) >= 10 ? 10 : parseInt(item.quantity)
                ),
                (_, i) => i + 1
              )}
              onSelect={(item) => onSelect(item)}
            />
            <button
              type="button"
              className="text-blue-600 text-sm hover:underline"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
          <p className="flex  items-center gap-2">
            <span>
              <CheckIcon className="h-4 w-4 text-emerald-400" strokeWidth={2} />
            </span>
            In stock
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center md:flex-col gap-4">
        <Select
          amount={item.newAmount !== undefined ? item.newAmount : item.amount}
          items={Array.from(
            Array(parseInt(item.quantity) >= 10 ? 10 : parseInt(item.quantity)),
            (_, i) => i + 1
          )}
          onSelect={(item) => onSelect(item)}
        />
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>

      <p className="w-24 text-end">${item.price}</p>
    </div>
  );
};

export default ViewProduct;
