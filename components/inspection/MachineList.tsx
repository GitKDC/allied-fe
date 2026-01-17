import { FaRegFileAlt } from "react-icons/fa";

interface Machine {
  id: string;
  name: string;
}

export default function MachineList({
  machines,
  onSelect,
}: {
  machines: Machine[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-3 px-4">
      {machines.map((m) => (
        <div
          key={m.id}
          onClick={() => onSelect(m.id)}
          className="
            flex justify-between items-center
            bg-white rounded-xl p-4 shadow-sm
            cursor-pointer transition
            hover:shadow-md
          "
        >
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            {m.name}
          </p>
          <FaRegFileAlt className="text-[var(--color-primary)] text-lg" />
        </div>
      ))}
    </div>
  );
}
