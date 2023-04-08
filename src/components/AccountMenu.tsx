"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

type AccountMenuProps = {
  session: Session | null;
};

const AccountMenu: React.FC<AccountMenuProps> = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);
  const listRef = useRef<HTMLUListElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const items = ["Profile", "Order History", "Wish List", "Sign Out"];
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setIsOpen(true);
        if (ref.current) {
          ref.current.focus();
        }
      } else {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((selectedIndex) =>
          selectedIndex === null
            ? 0
            : selectedIndex === items.length - 1
            ? 0
            : Math.min(selectedIndex + 1, items.length - 1)
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((selectedIndex) =>
          selectedIndex === null
            ? items.length - 1
            : selectedIndex === 0
            ? items.length - 1
            : Math.max(selectedIndex - 1, 0)
        );
      } else if (event.key === "Enter" && selectedIndex !== null) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen, items.length, selectedIndex]);

  return (
    <div ref={ref} className="hidden relative lg:block text-left ">
      <div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-8 h-8 flex items-center justify-around bg-white   text-sm font-medium text-gray-700 "
          id="options-menu"
          aria-haspopup="true"
        >
          {session?.user.image && (
            <Image
              src={session.user.image}
              alt="profile image"
              height={30}
              width={30}
              className={`object-cover rounded-full`}
            />
          )}
        </span>
      </div>
      {isOpen && (
        <ul
          id="menu_scroll"
          ref={listRef}
          className="absolute right-0 z-30 space-y-1 mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg p-1 bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none"
          dir="rtld"
        >
          {items.map((item, index) => {
            const link = item.toLowerCase().split(" ");
            return (
              <li
                key={item}
                onMouseEnter={() => setSelectedIndex(index)}
                onMouseLeave={() => setSelectedIndex(-1)}
                className={`${
                  selectedIndex === index ? "bg-sky-100 " : ""
                } py-2 pl-3 pr-9 text-sm text-gray-900 rounded-md cursor-default select-none relative hover:bg-sky-50 focus:bg-sky-50 `}
              >
                {item === "Sign Out" ? (
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="text-start text-gray-500 w-full h-full"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link href={`/${link.join("")}`} className="h-full w-full">
                    {item}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AccountMenu;
