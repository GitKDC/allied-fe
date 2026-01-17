export default function IconButton({
  onClick,
  children,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        ml-2 flex items-center justify-center
        w-12 h-12 rounded-xl
        bg-[var(--color-primary-soft)]
        text-[var(--color-primary)]
        border border-[var(--border-default)]
      "
    >
      {children}
    </button>
  );
}
