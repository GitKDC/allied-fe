export default function ConditionTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-end pr-2">
        <div className="flex gap-1 text-xs font-medium text-black">
          <span className="w-10 text-center pr-1">OK</span>
          <p className="w-10 block text-center pl-2">NOT OK</p>
          <span className="w-10 text-center pl-3">NA</span>
        </div>
      </div>

      {/* Rows */}
      {children}
    </div>
  );
}
