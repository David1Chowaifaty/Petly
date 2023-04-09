import ProductClient from "@/components/ProductClient";
import { getSingleDocument } from "@/utils/getData";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
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
  const rating = {
    oneStar: 40,
    twoStars: 30,
    threeStars: 60,
    fourStars: 50,
    fiveStars: 20,
    total: 200,
  };

  const weightedSum =
    (rating.oneStar * rating.oneStar) / rating.total +
    (rating.twoStars * rating.twoStars) / rating.total +
    (rating.threeStars * rating.threeStars) / rating.total +
    (rating.fourStars * rating.fourStars) / rating.total +
    (rating.fiveStars * rating.fiveStars) / rating.total;
  const averageRating = weightedSum / rating.total;
  const numStars = Math.round(averageRating * 5);

  return (
    <main className="h-full p-6 space-y-10">
      <h1 className="text-xl font-bold text-gray-800 uppercase lg:hidden">
        {toy?.name}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center lg:gap-14">
        <div className="h-full space-y-4">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg ">
            <Image
              width={800}
              height={800}
              src={toy?.images[0]}
              alt={""}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-24 w-24 overflow-hidden rounded-lg lg:h-40 lg:w-40">
              <Image
                width={800}
                height={800}
                src={toy?.images[1]}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-24 w-24 overflow-hidden rounded-lg lg:h-40 lg:w-40">
              <Image
                width={800}
                height={800}
                src={toy?.images[2]}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-24 w-24 sm:overflow-hidden rounded-lg lg:h-40 lg:w-40">
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
        <div className="h-full flex flex-col justify-around">
          <div className="flex items-center justify-between">
            <h1 className="hidden text-2xl font-bold text-gray-800 uppercase lg:block">
              {toy?.name}
            </h1>
            <p className="text-lg font-semibold">${toy?.price}</p>
          </div>
          <p className="text-gray-600">{toy?.description}</p>
          <div className="flex items-center gap-1">
            {Array.from(Array(5), (_, i) => i + 1).map((i) => (
              <button type="button" key={i}>
                <p className="sr-only">rating+{i}</p>
                {numStars >= i ? (
                  <FilledStarIcon className="h-6 w-6 text-yellow-500" />
                ) : (
                  <StarIcon className="h-6 w-6 text-gray-500" />
                )}
              </button>
            ))}
            <p>{rating.total} reviews</p>
          </div>
          <ProductClient data={toy!} id={id} category="toys" />
        </div>
      </div>
    </main>
  );
}
