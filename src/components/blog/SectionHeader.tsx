
interface SectionHeaderProps {
  number: string;
  title: string;
  count?: number;
}

export function SectionHeader({ number, title, count }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="relative">
        <span
          className="text-8xl font-bold opacity-5 select-none leading-none absolute -top-4 -left-2 pointer-events-none"
          style={{ fontFamily: "Georgia, serif", color: "var(--color-wine)" }}
        >
          {number}
        </span>
        <h2
          className="relative text-2xl font-bold pl-4"
          style={{ fontFamily: "Georgia, serif", color: "var(--color-brown)" }}
        >
          {title}
        </h2>
      </div>
      {count !== undefined && (
        <span
          className="text-sm font-medium px-3 py-1 rounded-full"
          style={{
            background: "rgba(140,79,88,0.1)",
            color: "var(--color-wine)",
          }}
        >
          {count} article{count !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}