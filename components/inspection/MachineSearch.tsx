import { GoSearch } from "react-icons/go";

export default function MachineSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <GoSearch className="absolute left-4 top-4 text-gray-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Machines"
        className="w-full bg-white rounded-xl pl-10 pr-4 py-3 text-sm border border-[var(--border-default)]"
      />
    </div>
  );
}
