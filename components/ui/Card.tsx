export default function Card ({children} : { children : React.ReactNode}) {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-4 shadow-sm">
            {children}
        </div>
    )
}