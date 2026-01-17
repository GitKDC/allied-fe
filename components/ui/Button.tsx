type ButtonVariant = "primary" | "secondary" | "ghost";

export default function Button({
  children,
  disabled,
  variant = "primary",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-[#4f6d39] to-[#99D36E] text-white",
    secondary:
      "bg-[var(--bg-muted)] text-[var(--text-primary)] border border-[var(--border-default)]",
    ghost:
      "bg-transparent text-[var(--text-primary)]",
  };

  return (
    <button
      disabled={disabled}
      className={`w-full py-3 rounded-xl text-sm font-medium 
      ${styles[variant]} 
      disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
