import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import type { Category } from "../../types/blog";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: any) => void;
}

export function CategoryFilter({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <section
      className="sticky top-0 z-30 border-b"
      style={{
        background: "rgba(243,239,238,0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(172,153,144,0.25)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          <Filter size={14} className="shrink-0 mr-2" style={{ color: "var(--color-taupe)" }} />
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0"
                style={{
                  color: isActive ? "white" : "var(--color-brown)",
                  background: isActive ? "var(--color-wine)" : "transparent",
                }}
              >
                {cat.icon}
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: "var(--color-wine)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}