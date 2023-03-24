"use client";
import React from "react";

export default function NewsLetter() {
  return (
    <form className="flex flex-col space-y-4 w-full">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="bg-gray-200/75 w-full py-1.5 px-4 rounded-lg border border-gray-300 ring-blue-200 focus:outline-none focus:border-blue-300 focus:ring"
      />
      <button
        type="submit"
        className="bg-[#10B8FF] px-4 py-1 rounded-lg text-white font-medium ring-blue-300 hover:bg-blue-400 active:ring"
      >
        Join us
      </button>
    </form>
  );
}
