"use client";

import { useState } from "react";
import dayjs from "dayjs";
import Screen from "../layout/Screen";

interface Props {
  value?: string;
  onClose: () => void;
  onSelect: (date: string) => void;
}

export default function DatePickerModal({ onClose, onSelect }: Props) {
  const [current, setCurrent] = useState(dayjs());

  const daysInMonth = current.daysInMonth();
  const startDay = current.startOf("month").day();

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
  <div className="absolute inset-0 z-50 flex flex-col justify-center">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={onClose}
    />

    {/* Bottom Sheet */}
    <div
      className="
        relative
        bg-white
        w-full
        p-4
        shadow-xl
        animate-slide-up
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium text-[var(--color-primary)]">
          {current.format("MMMM YYYY")}
        </p>
        <div className="px-4">
             <button className="px-6" onClick={() => setCurrent(current.subtract(1, "month"))}>
          ‹
        </button>
        <button onClick={() => setCurrent(current.add(1, "month"))}>
          ›
        </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {days.map((d, i) =>
          d ? (
            <button
              key={i}
              onClick={() =>
                onSelect(current.date(d).format("DD/MM/YYYY"))
              }
              className="w-9 h-9 rounded-full text-sm
              text-[var(--color-primary)]
              hover:bg-[var(--color-primary-soft)]"
            >
              {d}
            </button>
          ) : (
            <div key={i} />
          )
        )}
      </div>
    </div>
  </div>
);

}
