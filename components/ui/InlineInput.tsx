import { forwardRef } from "react";

interface InlineInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InlineInput = forwardRef<HTMLInputElement, InlineInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex items-center gap-4">
        {/* Label */}
        <label className="w-[55%] text-sm text-[var(--text-secondary)]">
          {label}
        </label>

        {/* Input */}
        <div className="w-[45%]">
          <input
            ref={ref}
            className={`w-full bg-white rounded-xl border border-[var(--border-default)]
            px-3 py-3 text-sm
            ${error ? "border-[var(--border-error)]" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

InlineInput.displayName = "InlineInput";
export default InlineInput;
