"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function SearchInput({ ...props }: SearchInputProps) {
  const [focused, setFocused] = useState(false);
  const { value } = props;
  return (
    <div
      className={`w-full md:w-[600px] flex items-center px-4 py-1.5 rounded-lg border-2 border-gray-300 bg-gray-100/60 ring-blue-300 ring-offset-2 ${
        focused && "ring md:ring-0"
      }`}
    >
      <label htmlFor="search">
        <MagnifyingGlassIcon
          className="h-5 w-5  stroke-gray-400 "
          strokeWidth={2}
        />
      </label>

      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id="search"
        name="search"
        type="text"
        placeholder="search"
        className="bg-transparent flex-1 px-4 focus:outline-none"
        {...props}
      />
      {value !== "" && (
        <button type="reset" className="cursor-default">
          <p className="sr-only">clear search</p>
          <XMarkIcon
            className="h-5 w-5  text-gray-400 hover:text-blue-400 active:scale-110"
            strokeWidth={2}
          />
        </button>
      )}
    </div>
  );
}
