export default function TabSwitcher (
    {tabs, 
    active,
    onChange} : any) {
        return (
            <div className="flex bg-[#e4e4e4] rounded-xl p-1">
                {tabs.map((t: any) => (
                    <button
                    key={t.id}
                    onClick={() => onChange(t.id)}
                    className={`flex-1 py-2 text-sm rounded-lg ${
                        active === t.id
                        ? "bg-white text-[var(--color-primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                    >
                    {t.label}
                    {t.count > 0 && (
                        <span className="ml-1 bg-[var(--color-primary)] text-white px-2 rounded-full text-xs">
                        {t.count}
                        </span>
                    )}
                    </button>
                ))}
            </div>
        )
    }