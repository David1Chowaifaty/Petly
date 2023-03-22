"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const [descRef, { height }] = useMeasure();

  return (
    <motion.div
      layout
      onClick={() => setOpen((prev) => !prev)}
      animate={{
        height,
      }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer select-none"
    >
      <div className="py-1" ref={descRef}>
        <p className="">{title}</p>
        {open && <p className="text-sm mt-2  text-gray-700">{description}</p>}
      </div>
    </motion.div>
  );
};

export default Accordion;
