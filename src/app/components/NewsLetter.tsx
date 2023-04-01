"use client";
import React from "react";

export default function NewsLetter() {
  return (
    <form className="flex flex-col space-y-4 ">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="bg-gray-200/75 w-full py-1.5 px-4 rounded-lg border lg:w-[300px] border-gray-300 ring-sky-200 focus:outline-none focus:border-sky-400 focus:ring hover:ring"
      />
      <button
        type="submit"
        className="bg-sky-400 px-4 py-1.5 rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring"
      >
        Join us
      </button>
    </form>
  );
}
