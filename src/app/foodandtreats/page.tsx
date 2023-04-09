import React from "react";
import { getFoodData } from "../../utils/getData";
import Card from "../../components/Card";
export const revalidate = 60;
export default async function page() {
  const food = await getFoodData();
  return (
    <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {food.map(({ data, id }, index) => (
          <Card
            name={data.name}
            src={data.images[0]}
            key={data.name + "_" + index}
            href={"foodandtreats/" + id}
          />
        ))}
      </div>
    </main>
  );
}
