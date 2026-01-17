export default function StatsRow ( {stats} : any) {
    return (
        <div className="grid grid-cols-3 gap-2">
            {stats.map((s: any) => (
            <div key={s.label} 
                className="text-center bg-white rounded-xl p-2">
                    <p className="text-lg font-semibold text-[var(--color-primary)]">
                        {s.value.toString().padStart(2, "0")}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                        {s.label}
                    </p>
            </div>
        )   )}
        </div>
    )
}