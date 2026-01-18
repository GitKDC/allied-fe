import Card from "@/components/ui/Card";

interface Stat {
  label: string;
  value: number;
}

interface User {
  name: string;
  role: string;
  avatar: string;
}

interface ProfileSummaryCardProps {
  user: User;
  stats: Stat[];
}

export default function ProfileSummaryCard({
  user,
  stats,
}: ProfileSummaryCardProps) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* Top section */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-[62px] w-[62px] rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-[var(--text-primary)]">
            {user.name}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            {user.role}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[var(--border-default)] mx-4" />

      {/* Stats */}
      <div className="grid grid-cols-3 text-center py-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center ${
              index !== stats.length - 1
                ? "border-r border-[var(--border-default)]"
                : ""
            }`}
          >
            <span className="text-lg font-semibold text-[var(--color-primary)]">
              {String(stat.value).padStart(2, "0")}
            </span>
            <span className="text-xs text-[var(--text-muted)] uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
