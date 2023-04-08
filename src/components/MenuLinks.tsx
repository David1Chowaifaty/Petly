"use client";
//import { motion } from "framer-motion";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
//import { usePathname } from "next/navigation";
// const Underline = ({ path, link }: { path: string; link: string }) => {
//   return (
//     <motion.div
//       className={
//         path === link
//           ? "bg-sky-500 rounded-full h-[3px] absolute -bottom-1 left-0 right-0"
//           : ""
//       }
//       layoutId="underline"
//     ></motion.div>
//   );
// };
export default function MenuLinks() {
  const path = "/";
  return (
    <div className="flex items-center h-full space-x-6 md:flex-row-reverse order-1 md:order-2">
      <div className="md:hidden">
        <Menu />
      </div>

      <Link
        href={"/health"}
        className={`
          hidden md:inline-flex relative h-full items-center`}
      >
        Health
      </Link>
      <Link
        href={"/toys"}
        className={` hidden md:inline-flex relative h-full items-center`}
      >
        Toys
      </Link>

      <Link
        href={"/foodandtreats"}
        className={`hidden md:inline-flex relative h-full items-center`}
      >
        Food and Treats
      </Link>
      <Link
        href={"/"}
        className={`hidden md:inline-flex relative h-full items-center`}
      >
        Home
      </Link>
      <button type="button" onClick={() => signOut()}>
        log out
      </button>
    </div>
  );
}
