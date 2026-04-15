"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-dark-border border-y border-dark-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl font-bold text-white md:text-2xl">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-dark-border text-accent"
              >
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-16 text-offwhite">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
