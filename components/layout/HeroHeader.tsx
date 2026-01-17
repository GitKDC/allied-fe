interface HeroHeaderProps {
  children: React.ReactNode;
  title?: string;
  background?: string;
}

export default function HeroHeader({
  title = "Allied Mechanical Solution",
  background = "/images/homebg.png",
  children,
}: HeroHeaderProps) {
  return (
    <div
      className="relative w-full h-[260px] bg-cover bg-center rounded-b-32px"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-b-3xl" />

      <div className="relative z-10 flex items-center gap-2 px-4 pt-4 text-white">
        <button className="text-2xl">☰</button>
        <h1 className="font-semibold text-sm">{title}</h1>
      </div>

      <div className="relative z-10 mt-6 px-4">{children}</div>
    </div>
  );
}

