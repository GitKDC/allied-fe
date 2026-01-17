import Card from "../ui/Card";

export default function ProfileCard ( {user} : any  ) {
    return (
    <Card>
        <div className="flex items-center gap-3">
                <img
                src={user.avatar}
                className="h-12 w-12 rounded-full object-cover"
                />
            <div>
                <p className="font-medium text-[var(--text-primary)]">
                    {user.name}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                    {user.role}
                </p>
            </div>
      </div>
    </Card>
    )
}

