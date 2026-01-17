"use client";

import { useState, useEffect } from "react";
import SelectModal from "./SelectModal";

interface SelectInputProps {
  label: string;
  value?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function SelectInput({
  label,
  value,
  error,
  required,
  placeholder = "Select",
  options,
  onChange,
}: SelectInputProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div>
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>

        <div
          onClick={() => setOpen(true)}
          className={`w-full bg-white rounded-xl border px-3 py-3 text-sm
          cursor-pointer flex justify-between items-center
          ${error ? "border-[var(--border-error)]" : "border-[var(--border-default)]"}`}
        >
          <span className={value ? "text-black" : "text-gray-400"}>
            {value || placeholder}
          </span>
          <span className="text-gray-400">⌄</span>
        </div>

        {error && <p className="text-xs text-[var(--error)] mt-1">{error}</p>}
      </div>

      {open && (
        <SelectModal
          title={label}
          options={options}
          onClose={() => setOpen(false)}
          onSelect={(val) => {
            onChange(val);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
    