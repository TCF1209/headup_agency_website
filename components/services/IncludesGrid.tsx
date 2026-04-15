"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function IncludesGrid({
  items,
}: {
  items: { icon: LucideIcon; label: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map(({ icon: Icon, label: l }, i) => (
        <motion.li
          key={l}
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className="flex items-center gap-3 rounded-md border border-dark-border bg-dark-surface p-4"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-dark-border text-accent">
            <Icon size={18} />
          </span>
          <span className="text-sm text-offwhite">{l}</span>
        </motion.li>
      ))}
    </ul>
  );
}
