"use client";
import { LayoutGroup } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "../ui/Accordion";
import Image from "next/image";
const data = [
  {
    title: "Pet Medical Administration",
    description:
      "Pet Medical Administration: Keeping Your Furry Friend Healthy and Happy At Petly, we understand how important it is to keep your pet healthy and safe. That's why we offer a range of products to help you with pet medical administration, from vitamins and supplements to prescription medications. Our selection is carefully curated to ensure that you have access to the highest quality products for your furry friend. With Petly, you can trust that your pet is getting the care they need to stay healthy and happy.",
    image: "/second_section/medical_attention.jpg",
  },
  {
    title: "Overnight Pet Care",
    description:
      "We understand that pets need round-the-clock care, which is why we offer overnight pet care services. Leave your furry friend with us, and our experienced team will make sure they receive the love and attention they deserve throughout the night. You can rest assured knowing that your pet is in safe hands with Petly.",
    image: "/second_section/overnight_care.jpg",
  },
  {
    title: "Puppy Day Care",
    description:
      "Our puppy day care services are designed to keep your furry friend active and engaged while you're away. Our team of trained professionals will provide a safe and fun environment for your puppy to socialize, exercise and learn new skills. With plenty of playtime and cuddles, your puppy will have a blast at Petly's day care. Trust us to take care of your furry baby while you take care of your day-to-day activities.",
    image: "/second_section/day_care.jpg",
  },
];
export default function AccordionSection() {
  const accRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!accRef.current?.contains(e.target as Node)) {
        setOpenIndex(-1);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="px-4 flex flex-col items-center sm:flex-row sm:justify-around">
      <div
        ref={accRef}
        className="flex flex-col space-y-2 divide-y w-full sm:w-96"
      >
        <LayoutGroup>
          {data.map((item, index) => (
            <Accordion
              key={item.title + "_" + index}
              open={openIndex === index}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </LayoutGroup>
      </div>
      <div className="hidden sm:inline-flex">
        {openIndex > -1 ? (
          <Image
            src={data[openIndex].image}
            alt={data[openIndex].title}
            width={200}
            height={300}
          />
        ) : (
          <Image
            src={"/second_section/second_section_main.jpg"}
            alt=""
            width={200}
            height={300}
          />
        )}
      </div>
    </div>
  );
}
