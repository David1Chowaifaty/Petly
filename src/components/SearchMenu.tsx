"use client";
import { useState } from "react";
import SearchInput from "./ui/SearchInput";

export default function SearchMenu() {
  const [value, setValue] = useState<string>("");
  return (
    <form onReset={() => setValue("")} onSubmit={(e) => e.preventDefault()}>
      <SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
}
