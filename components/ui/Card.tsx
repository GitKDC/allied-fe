export default function Card ({children , className = ""} : { children : React.ReactNode, className? : string}) {
    return (
        <div className={`bg-[var(--bg-card)] rounded-2xl p-4 shadow-lg ${className}`}>
            {children}
        </div>
    )
}