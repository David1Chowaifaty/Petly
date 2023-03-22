"use client";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
interface AccordionProps {
  title: string;
  description: string;
  open: boolean;
  onClick: () => void;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  description,
  open,
  onClick,
}) => {
  const [descRef, { height }] = useMeasure();

  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        height,
      }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer select-none"
    >
      <div className="py-1" ref={descRef}>
        <span className="flex items-center">
          <p className="flex-1">{title}</p>
          {!open ? (
            <ChevronDownIcon className="h-5 w-5" />
          ) : (
            <ChevronUpIcon className="h-5 w-5" />
          )}
        </span>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="text-sm mt-2  text-gray-700"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Accordion;
