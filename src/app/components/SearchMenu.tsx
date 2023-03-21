"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SearchInput from "../ui/SearchInput";

export default function SearchMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("");
  return (
    <form onReset={() => setValue("")} onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={() => setOpen(true)}>
        <p className="sr-only">toggle menu</p>
        <MagnifyingGlassIcon
          className="h-5 w-5 stroke-slate-600"
          strokeWidth={2.5}
        />
      </button>
      <AnimatePresence>
        {open && (
          <div className="absolute top-0 right-0 h-screen w-full bg-white shadow-lg p-4 flex flex-col items-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="self-start"
            >
              <p className="sr-only">close search</p>
              <XMarkIcon className="h-5 w-5 text-slate-700" strokeWidth={2.5} />
            </button>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className=" "
            >
              <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </form>
  );
}
