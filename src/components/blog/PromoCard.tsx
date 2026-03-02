import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { scaleIn } from "../../lib/animations";

export function PromoCard() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between"
      style={{
        background: "linear-linear(135deg, var(--color-wine), var(--color-rose))",
        minHeight: "120px",
      }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 translate-x-8 -translate-y-8"
        style={{ background: "white" }}
      />
      <p className="text-taupe/80 text-xs font-semibold tracking-widest uppercase mb-2">
        Limited Offer
      </p>
      <p className="text-taupe font-bold text-lg leading-snug">
        Claim your RM100 Voucher
      </p>
      <a
        href="https://wa.link/q64h1l"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-taupe/90 hover:text-taupe transition-colors"
      >
        Chat with doctor now <ArrowUpRight size={13} />
      </a>
    </motion.div>
  );
}