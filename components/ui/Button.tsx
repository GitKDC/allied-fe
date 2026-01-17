type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
  onClick?: () => void;
}

export default function Button({
  children,
  disabled,
  variant = "primary",
  onClick
}: ButtonProps) {

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
      onClick={onClick}
      className={`w-full py-3 rounded-xl text-sm font-medium 
      ${styles[variant]} 
      disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

