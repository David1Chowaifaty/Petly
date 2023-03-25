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
    image: "/second_section/medical_attention.webp",
  },
  {
    title: "Overnight Pet Care",
    description:
      "We understand that pets need round-the-clock care, which is why we offer overnight pet care services. Leave your furry friend with us, and our experienced team will make sure they receive the love and attention they deserve throughout the night. You can rest assured knowing that your pet is in safe hands with Petly.",
    image: "/second_section/overnight_care.webp",
  },
  {
    title: "Puppy Day Care",
    description:
      "Our puppy day care services are designed to keep your furry friend active and engaged while you're away. Our team of trained professionals will provide a safe and fun environment for your puppy to socialize, exercise and learn new skills. With plenty of playtime and cuddles, your puppy will have a blast at Petly's day care. Trust us to take care of your furry baby while you take care of your day-to-day activities.",
    image: "/second_section/day_care.webp",
  },
  {
    title: "Training Trough Goodpup",
    description:
      "At Petly, we believe that a well-trained pet is a happy pet. That's why we've partnered with Goodpup, a leading online dog training platform, to offer you access to top-quality training programs. Goodpup's team of expert trainers uses positive reinforcement techniques to help you train your dog in a way that's fun and effective. From obedience training to behavioral modification, you can trust Goodpup to help you create a happy and well-behaved pet. Sign up for training through Goodpup today and watch your furry friend thrive!",
    image: "/second_section/day_care.webp",
  },
  {
    title: "Pets House Sitting",
    description:
      "Going out of town? Leave your pets in the comfort of their own home with our house sitting services. Our experienced pet sitters will make sure your furry friends are fed, walked, and given lots of attention while you're away. We'll also keep an eye on your home, ensuring that everything is secure and in order. Enjoy your time away with peace of mind knowing that your pets and home are being taken care of by Petly's reliable house sitting team.",
    image: "/second_section/day_care.webp",
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
    <div className="flex w-full flex-col items-center md:flex-row md:justify-around">
      <div ref={accRef} className="flex flex-col space-y-2  w-full md:w-96">
        <h1 className="text-2xl font-extrabold mb-6 md:text-3xl">
          Services We Provide
        </h1>
        <div className="flex flex-col space-y-2 divide-y w-full">
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
      </div>
      <div className="hidden md:inline-flex">
        {openIndex > -1 ? (
          <Image
            src={data[openIndex].image}
            alt={data[openIndex].title}
            width={300}
            height={300}
            className="rounded-md md:w-60 lg:w-[300px]"
          />
        ) : (
          <Image
            src={"/second_section/second_section_main.webp"}
            alt=""
            width={300}
            height={300}
            className="rounded-md md:w-60 lg:w-[250px]"
          />
        )}
      </div>
    </div>
  );
}
