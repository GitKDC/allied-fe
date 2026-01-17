"use client";

import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";


interface Props {
  title: string;
  options: string[];
  onClose: () => void;
  onSelect: (value: string) => void;
}

export default function SelectModal({
  title,
  options,
  onClose,
  onSelect,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

    
    {/* Floating Close Button (outside modal) */}
      <button
        onClick={onClose}
        className="
          absolute
          top-4
          right-4
          z-50
          w-[42px]
          h-[42px]
          rounded-full
          bg-white
          shadow
          flex
          items-center
          justify-center
          mt-31
          text-sm
        "
      >
        <RxCross1 />
      </button>


      {/* Bottom Sheet */}
      <div className="relative bg-white w-full rounded-t-2xl p-4 max-h-[80%] flex flex-col">
        {/* Title */}
        <h2 className="font-semibold text-sm mb-3">Select {title}</h2>

        {/* Search */}
        <div className="relative mb-3">
          <GoSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search for an ${title}`}
            className="w-full border border-[var(--border-default)] rounded-xl pl-9 pr-3 py-2 text-sm"
          />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelect(item)}
              className="
                py-3
                border-b
                border-0
                text-sm
                font-medium
                cursor-pointer
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
