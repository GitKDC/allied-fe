import { forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">
          {label}
          {props.required && <span className="text-red-500"> *</span>}
        </label>

        <textarea
          ref={ref}
          rows={4}
          className={`w-full bg-white rounded-xl border border-[var(--border-default)]
          px-3 py-3 text-sm resize-none
          ${error ? "border-[var(--border-error)]" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
          {...props}
        />

        {error && <p className="text-xs text-[var(--error)] mt-1">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
