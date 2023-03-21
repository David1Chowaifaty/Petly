"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div ref={menuRef}>
      <button type="button" onClick={() => setOpen(true)}>
        <p className="sr-only">toggle menu</p>
        <Bars3Icon className="h-5 w-5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 h-screen w-96 bg-white shadow-lg p-6"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
