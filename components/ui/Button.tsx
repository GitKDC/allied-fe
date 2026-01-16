export default function Button({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="w-full bg-gradient-to-r from-[#4f6d39]  to-[#99D36E] text-white py-3 rounded-xl text-sm font-medium
      hover:bg-green-800 disabled:opacity-50"
    >
      {children}
    </button>
  );
}
