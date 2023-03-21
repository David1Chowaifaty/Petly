"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearSearch?: () => void;
}
export default function SearchInput({
  clearSearch,
  ...props
}: SearchInputProps) {
  const [focused, setFocused] = useState(false);
  const { value } = props;
  return (
    <div
      className={`max-w-[400px] flex items-center px-4 py-1.5 rounded-md bg-gray-100 ring-blue-400 ring-offset-2 ${
        focused && "ring"
      }`}
    >
      {value === "" && (
        <label htmlFor="search">
          <MagnifyingGlassIcon
            className="h-5 w-5  stroke-gray-400 "
            strokeWidth={2.5}
          />
        </label>
      )}
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
        <button type="button" onClick={clearSearch}>
          <p className="sr-only">clear search</p>
          <XMarkIcon className="h-5 w-5  stroke-gray-400 " strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
