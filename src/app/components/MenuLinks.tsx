"use client";
import { motion } from "framer-motion";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Underline = ({ path, link }: { path: string; link: string }) => {
  return (
    <motion.div
      className={
        path === link
          ? "bg-sky-500 rounded-full h-[3px] absolute -bottom-1 left-0 right-0"
          : ""
      }
      layoutId="underline"
    ></motion.div>
  );
};
export default function MenuLinks() {
  const path = usePathname();
  return (
    <ul className="flex items-center h-full space-x-6 md:flex-row-reverse order-1 md:order-2">
      <li className="md:hidden">
        <Menu />
      </li>
      <li className="hidden md:inline-flex relative">
        <Link
          href={"/health"}
          className={`${path === "/health" ? "text-sky-500" : null}`}
        >
          Health
        </Link>
        {path === "/health" && <Underline path={path} link="/health" />}
      </li>
      <li className="hidden md:inline-flex relative">
        <Link
          href={"/toys"}
          className={`${path === "/toys" && "text-sky-500"}`}
        >
          Toys
        </Link>
        {path === "/toys" && <Underline path={path} link="/toys" />}
      </li>
      <li className="hidden md:inline-flex relative">
        <Link
          href={"/foodandtreats"}
          className={`${path === "/foodandtreats" && "text-sky-500"}`}
        >
          Food and Treats
        </Link>
        {path === "/foodandtreats" && (
          <Underline path={path} link="/foodandtreats" />
        )}
      </li>
      <li className="hidden md:inline-flex relative">
        <Link href={"/"} className={path === "/" ? "text-sky-500" : ""}>
          Home
        </Link>
        {path === "/" && <Underline path={path} link="/" />}
      </li>
    </ul>
  );
}
