"use client";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  value?: string;
  options: RadioOption[];
  required?: boolean;
  onChange: (v: string) => void;
}

export default function RadioGroup({
  label,
  value,
  options,
  required,
  onChange,
}: RadioGroupProps) {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--text-secondary)] mb-2">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </p>

      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="accent-[var(--color-primary)]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
