"use client";
import { LayoutGroup } from "framer-motion";
import React from "react";
import Accordion from "../ui/Accordion";

export default function AccordionSection() {
  return (
    <div className="flex flex-col space-y-2 divide-y w-96">
      <LayoutGroup>
        <Accordion
          title="Pet Medical Administration "
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae dolore aliquam qui ea numquam ipsum ducimus nam est. Eum debitis quidem voluptate nulla recusandae quasi tempore animi deleniti fuga."
        />
        <Accordion
          title="Overnight Pet Care"
          description="dadadadadadadadadadad"
        />
        <Accordion
          title="Puppy Day Care"
          description="ddddddddddddddddddddddd"
        />
      </LayoutGroup>
    </div>
  );
}
