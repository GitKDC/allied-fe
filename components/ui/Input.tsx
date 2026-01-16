import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm  text-[var(--text-secondary)] font-medium mb-1">{label}</label>
        <input
          ref={ref}
          className={`w-full bg-white rounded-xl border border-[var(--border-default)] px-3 py-3 pr-10 text-sm  
            placeholder: text-black font-inter
            ${error ? "border-red-500 focus:ring-red-200" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
