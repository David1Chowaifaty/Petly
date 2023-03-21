"use client";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SearchInput from "../ui/SearchInput";

export default function SearchMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("");
  return (
    <form onReset={() => setValue("")} onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={() => setOpen(true)} className="md:hidden">
        <p className="sr-only">toggle menu</p>
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
      <AnimatePresence>
        {open && (
          <div className="absolute top-0 right-0 h-screen w-full bg-white shadow-lg p-6">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button type="button" onClick={() => setOpen(false)}>
                <p className="sr-only">close search</p>
                <XMarkIcon className="h-5 w-5" />
              </button>
              <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="hidden lg:inline-flex">
        <SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </form>
  );
}
