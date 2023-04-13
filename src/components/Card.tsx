import Image from "next/image";
import Link from "next/link";
import React from "react";
type CardType = {
  name: string;
  src: string;
  href: string;
  price: string;
  quantity: number;
};
export default function Card({ name, src, href, price, quantity }: CardType) {
  return (
    <Link href={href} className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={src}
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      {quantity === 0 && (
        <p className=" absolute top-4 right-4 text-sm font-medium rounded-full px-4 w-fit py-0.5 bg-red-50 text-red-500">
          Out of Stock
        </p>
      )}
    </Link>
  );
}
