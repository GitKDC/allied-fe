import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  containerClass?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, containerClass = "", ...props }, ref) => {
    return (
      <div className={containerClass}>
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">
          {label}
          {props.required && <span className="text-red-500"> *</span>}
        </label>

        <input
          ref={ref}
          className={`w-full bg-white rounded-xl border border-[var(--border-default)] px-3 py-3 pr-10 text-sm
          ${error ? "border-[var(--border-error)]" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
          {...props}
        />

        {helperText && !error && (
          <p className="text-xs text-[var(--text-muted)] mt-1">{helperText}</p>
        )}

        {error && <p className="text-xs text-[var(--error)] mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;