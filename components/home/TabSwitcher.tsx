export default function TabSwitcher({
  tabs,
  active,
  onChange,
}: any) {
  return (
    <div className="flex bg-[#e4e4e4] rounded-xl p-1">
      {tabs.map((t: any) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`
            flex-1 
            flex items-center justify-center gap-2
            py-2 
            text-sm 
            rounded-lg 
            transition
            ${
              active === t.id
                ? "bg-white text-[var(--color-primary)]"
                : "text-[var(--text-muted)]"
            }
          `}
        >
          <span>{t.label}</span>

          {t.count > 0 && (
            <span
              className="
                flex items-center justify-center
                w-5 h-5
                rounded-full
                bg-[var(--color-primary)]
                text-white
                text-[10px]
                font-medium
              "
            >
              {t.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
