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
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[360px]">

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            -top-12
            right-4
            w-10 h-10
            rounded-full
            bg-white
            flex items-center justify-center
            shadow-md
            z-10
          "
        >
          <RxCross1 />
        </button>

        {/* Bottom Sheet */}
        <div className="relative bg-white w-full rounded-t-2xl p-4 max-h-[80vh] flex flex-col">
          {/* Title */}
          <h2 className="font-semibold text-sm mb-3">
            Select {title}
          </h2>

          {/* Search */}
          <div className="relative mb-3">
            <GoSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search for an ${title}`}
              className="
                w-full
                border
                border-[var(--border-default)]
                rounded-xl
                pl-9
                pr-3
                py-2
                text-sm
              "
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
                  text-sm
                  font-medium
                  cursor-pointer
                  border-b
                  border-gray-200
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
