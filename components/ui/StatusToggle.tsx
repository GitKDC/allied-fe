"use client";

type Status = "ok" | "not_ok" | "na" | "";

interface StatusToggleProps {
  value?: Status;
  onChange: (v: Status) => void;
}

export default function StatusToggle({ value = "", onChange }: StatusToggleProps) {
  const base =
    "w-10 h-10 flex items-center justify-center rounded-lg border transition";

  return (
    <div className="flex gap-2">
      {/* OK */}
      <button
        type="button"
        onClick={() => onChange("ok")}
        className={`${base} ${
          value === "ok"
            ? "bg-green-100 border-green-500 text-green-600"
            : "border-[var(--border-default)] text-gray-300"
        }`}
      >
        ✓
      </button>

      {/* NOT OK */}
      <button
        type="button"
        onClick={() => onChange("not_ok")}
        className={`${base} ${
          value === "not_ok"
            ? "bg-red-100 border-red-500 text-red-600"
            : "border-[var(--border-default)] text-gray-300"
        }`}
      >
        ✕
      </button>

      {/* NA */}
      <button
        type="button"
        onClick={() => onChange("na")}
        className={`${base} ${
          value === "na"
            ? "bg-gray-200 border-gray-500 text-gray-600"
            : "border-[var(--border-default)] text-gray-300"
        }`}
      >
        –
      </button>
    </div>
  );
}
