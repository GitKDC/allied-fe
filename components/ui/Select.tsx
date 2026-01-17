import { forwardRef } from "react";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options?: { label: string; value: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options = [], ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">
          {label}
          {props.required && <span className="text-red-500"> *</span>}
        </label>

        <select
          ref={ref}
          className={`w-full bg-white rounded-xl border border-[var(--border-default)]
          px-3 py-3 text-sm appearance-none
          ${error ? "border-[var(--border-error)]" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
          {...props}
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {error && <p className="text-xs text-[var(--error)] mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
