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
  const toy = await getSingleDocument("toys", id);
  return (
    <div className="h-screen">
      <h1>{toy?.name}</h1>
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <Image
            width={800}
            height={800}
            src={toy?.images[0]}
            alt={""}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <Image
              width={800}
              height={800}
              src={toy?.images[1]}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <Image
              width={800}
              height={800}
              src={toy?.images[2]}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <Image
            width={800}
            height={800}
            src={toy?.images[3]}
            alt={""}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
