"use client";

import { motion } from "framer-motion";

export function PageHeader({
  label,
  title,
  subtitle,
  maxWidth = "max-w-4xl",
  children,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  maxWidth?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={maxWidth}>
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
      >
        {label}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
        className="mt-6 h-[3px] w-16 bg-accent"
      />
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 text-offwhite md:text-lg"
        >
          {subtitle}
        </motion.div>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
