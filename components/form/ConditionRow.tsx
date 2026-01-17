import StatusToggle from "@/components/ui/StatusToggle";

export default function ConditionRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: any;
  onChange: (v: any) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm w-[60%] text-[var(--text-secondary)]">
        {label}
      </p>
      <div className="flex gap-2">
        {/* OK / NOT OK / NA buttons already here */}
      </div>
      <StatusToggle value={value} onChange={onChange} />
    </div>
  );
}
