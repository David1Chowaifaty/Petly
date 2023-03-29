import { getSingleDocument } from "@/app/utils/getData";
import Image from "next/image";
import React from "react";
interface PageProps {
  params: {
    id: string;
  };
}
export default async function page({ params }: PageProps) {
  const { id } = params;
  const food = await getSingleDocument("food", id);
  return (
    <div className="h-screen">
      <h1>{food?.name}</h1>
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <Image
            width={300}
            height={300}
            src={food?.images[0].src}
            alt={""}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src={food?.images[1].src}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src={food?.images[2].src}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <Image
            width={300}
            height={300}
            src={food?.images[3].src}
            alt={""}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
