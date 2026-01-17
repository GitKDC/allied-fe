export default function InspectionItem({ item }: any) {
  return (
    <div className="bg-white rounded-xl p-3">
      <p className="font-medium">{item.machine}</p>
      <p className="text-xs text-[var(--text-muted)]">{item.address}</p>
      <p className="text-xs text-[var(--text-muted)]">{item.client}</p>
      <p className="text-xs text-[var(--text-muted)]">{item.date}</p>
    </div>
  );
}
