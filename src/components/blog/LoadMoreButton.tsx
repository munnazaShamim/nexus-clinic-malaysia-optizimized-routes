import { ChevronRight } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
}

export function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "var(--color-wine)";
    e.currentTarget.style.color = "white";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--color-wine)";
  };

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 border"
      style={{
        color: "var(--color-wine)",
        borderColor: "var(--color-wine)",
        background: "transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Load More Articles
      <ChevronRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}