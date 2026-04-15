"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STEPS = [
  { n: "01", t: "Audit", d: "Current state, operational gaps, ad baseline." },
  { n: "02", t: "Strategy", d: "Menu, pricing, campaign calendar, budget plan." },
  { n: "03", t: "Execute", d: "Weekly reporting, monthly reviews, fast iteration." },
];

export function StepsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {STEPS.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ x: -24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative rounded-md border border-dark-border bg-dark-surface p-8"
        >
          <div className="font-display text-6xl font-bold text-accent">
            {s.n}
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-white">
            {s.t}
          </h3>
          <p className="mt-2 text-sm text-offwhite">{s.d}</p>
          {i < STEPS.length - 1 && (
            <ArrowRight
              size={18}
              className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-dark-primary p-1 text-accent md:block"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
