import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

type ListBoxProps = {
  items: number[];
  onSelect: (item: number) => void;
};

const ListBox: React.FC<ListBoxProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);
  const listRef = useRef<HTMLUListElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const handleSelect = useCallback(
    (item: number) => {
      onSelect(item);
      setIsOpen(false);
      setSelectedIndex(0);
    },
    [onSelect]
  );

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

  useEffect(() => {
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
        handleSelect(items[selectedIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [handleSelect, isOpen, items, selectedIndex]);
  useEffect(() => {
    if (listRef.current && selectedIndex !== null) {
      const itemHeight = (listRef.current.children[0] as HTMLElement)
        .offsetHeight;
      const scrollTop = itemHeight * selectedIndex;
      listRef.current.scrollTop = scrollTop;
    }
  }, [selectedIndex]);

  return (
    <div ref={ref} className="relative inline-block text-left ">
      <div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md shadow-sm cursor-pointer w-16 md:24 h-7 flex items-center justify-around bg-white  ring-1 ring-gray-300  text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
        >
          <p>{items[selectedIndex]}</p>
          {isOpen ? (
            <ChevronUpIcon className="h-4 w-4" strokeWidth={2} />
          ) : (
            <ChevronDownIcon className="h-4 w-4" strokeWidth={2} />
          )}
        </span>
      </div>
      {isOpen && (
        <ul
          id="menu_scroll"
          ref={listRef}
          className="absolute left-0 z-30 space-y-1 mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg p-1 bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none"
          dir="rtld"
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={`${
                selectedIndex === index ? "bg-sky-100 " : ""
              } py-2 pl-3 pr-9 text-sm text-gray-900 rounded-md cursor-default select-none relative hover:bg-sky-50 focus:bg-sky-50 `}
              onClick={() => {
                handleSelect(item);
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListBox;
