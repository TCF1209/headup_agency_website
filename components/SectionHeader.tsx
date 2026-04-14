"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  label,
  title,
  onLight = false,
}: {
  label: string;
  title: React.ReactNode;
  onLight?: boolean;
}) {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.3 }}
        className={`mb-4 font-mono text-xs uppercase tracking-widest ${onLight ? "text-muted" : "text-accent"}`}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ x: -24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-4xl font-bold leading-[1] tracking-tight md:text-6xl ${onLight ? "text-dark-primary" : "text-white"}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.25 }}
        style={{ transformOrigin: "left" }}
        className="mt-6 h-[3px] w-16 bg-accent"
      />
    </div>
  );
}
