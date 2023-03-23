"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchInput from "../ui/SearchInput";
import { usePathname } from "next/navigation";

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <div ref={menuRef}>
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        <p className="sr-only">toggle menu</p>
        {!open ? (
          <Bars3Icon className="h-6 w-6" strokeWidth={2.5} />
        ) : (
          <XMarkIcon className="h-6 w-6 text-slate-700" strokeWidth={2.5} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            transition={{ duration: 0.4 }}
            className="absolute top-10 border-t right-0 h-screen w-full space-y-10 bg-white shadow-lg p-6 z-50"
          >
            <form className="mx-auto w-full py-4" onReset={() => setValue("")}>
              <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
            <ul className="space-y-5">
              <li className="link" onClick={() => setOpen(false)}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="link" onClick={() => setOpen(false)}>
                <Link href={"/"}>Food and Treats</Link>
              </li>
              <li className="link" onClick={() => setOpen(false)}>
                <Link href={"/"}>Toys</Link>
              </li>
              <li className="link" onClick={() => setOpen(false)}>
                <Link href={"/"}>Health</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
