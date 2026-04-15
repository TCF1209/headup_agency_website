"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function BenefitsGrid({
  items,
}: {
  items: { icon: LucideIcon; title: string; description: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex gap-5 rounded-md border border-dark-border bg-dark-surface p-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-dark-border text-accent"
          >
            <b.icon size={22} />
          </motion.span>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-offwhite">{b.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
