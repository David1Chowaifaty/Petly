"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchInput from "./ui/SearchInput";
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
            className="absolute top-14 border-t right-0 h-screen w-full space-y-10 bg-white shadow-lg p-6 z-50"
          >
            <form className="mx-auto w-full py-4" onReset={() => setValue("")}>
              <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
            <div className="flex flex-col gap-5">
              <Link href={"/"} onClick={() => setOpen(false)} className="link">
                Home
              </Link>
              <Link
                href={"/foodandtreats"}
                onClick={() => setOpen(false)}
                className="link"
              >
                Food and Treats
              </Link>

              <Link
                href={"/toys"}
                onClick={() => setOpen(false)}
                className="link"
              >
                Toys
              </Link>

              <Link
                href={"/health"}
                onClick={() => setOpen(false)}
                className="link"
              >
                Health
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
