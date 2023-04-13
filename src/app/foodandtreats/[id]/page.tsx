import ProductClient from "@/components/ProductClient";
import Image from "next/image";
import React from "react";
interface PageProps {
  params: {
    id: string;
  };
}
export default async function page({ params }: PageProps) {
  const { id } = params;
  const food = null;
  return (
    <main className="h-screen lg:h-full p-6 space-y-10">
      {/* <h1 className="text-xl font-bold text-gray-800 uppercase lg:hidden">
        {food?.name}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center lg:gap-14">
        <div className="h-full space-y-4">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg ">
            <Image
              width={800}
              height={800}
              src={food?.images[0]}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-24 w-24 overflow-hidden rounded-lg lg:h-40 lg:w-40">
              <Image
                width={800}
                height={800}
                src={food?.images[1]}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-24 w-24 overflow-hidden rounded-lg lg:h-40 lg:w-40">
              <Image
                width={800}
                height={800}
                src={food?.images[2]}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-24 w-24 sm:overflow-hidden rounded-lg lg:h-40 lg:w-40">
              <Image
                width={800}
                height={800}
                src={food?.images[3]}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-around">
          <div className="flex items-center justify-between">
            <h1 className="hidden text-2xl font-bold text-gray-800 uppercase lg:block">
              {food?.name}
            </h1>
            <p className="text-lg font-semibold">${food?.price}</p>
          </div>
          <p className="text-gray-600">{food?.description}</p>
          <ProductClient data={food!} id={id} category="food" />
        </div>
      </div> */}
    </main>
  );
}
