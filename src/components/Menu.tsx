"use client";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchInput from "./ui/SearchInput";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import Image from "next/image";
import { signOut } from "next-auth/react";
import AccountMenu from "./AccountMenu";
interface MenuProps {
  session: Session | null;
}
export default function Menu({ session }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <div ref={menuRef} className="lg:hidden">
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
              <Link href={"/"} onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href={"/foodandtreats"} onClick={() => setOpen(false)}>
                Food and Treats
              </Link>

              <Link href={"/toys"} onClick={() => setOpen(false)}>
                Toys
              </Link>

              <Link href={"/health"} onClick={() => setOpen(false)}>
                Health
              </Link>
            </div>
            {session !== null && (
              <div className="grid gap-5 border-t py-5">
                <div className="flex items-center gap-8 h-9">
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt="profile image"
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                  )}
                  <h1 className="title">{session.user.name}</h1>
                </div>

                <Link href="/profile">Profile</Link>
                <Link href="/profile">Order History</Link>
                <Link href={"/wishlist"}>Wish List</Link>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-start text-gray-500"
                >
                  Sign Out
                </button>
              </div>
            )}
            {session === null && <Link href={"/signin"}>Sign In</Link>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
