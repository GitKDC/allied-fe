"use client";

import { useEffect, useState } from "react";
import DatePickerModal from "./DatePickerModal";

interface DateInputProps {
  label: string;
  value?: string;
  error?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export default function DateInput({
  label,
  value,
  error,
  required,
  onChange,
}: DateInputProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
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
            cursor-pointer
            ${error ? "border-[var(--border-error)]" : "border-[var(--border-default)]"}
          `}
        >
          {value || "Select Date"}
        </div>

        {error && <p className="text-xs text-[var(--error)] mt-1">{error}</p>}
      </div>

      {open && (
        <DatePickerModal
          value={value}
          onClose={() => setOpen(false)}
          onSelect={(date) => {
            onChange?.(date);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
