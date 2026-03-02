import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-24 text-center"
    >
      <Search size={36} className="mb-4 opacity-30" style={{ color: "var(--color-taupe)" }} />
      <p className="text-lg font-semibold" style={{ color: "var(--color-brown)" }}>
        No articles found
      </p>
      <p className="text-sm mt-1" style={{ color: "var(--color-taupe)" }}>
        Try a different search or category
      </p>
    </motion.div>
  );
}