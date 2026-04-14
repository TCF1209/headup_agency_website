"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyCard({
  clientType,
  problem,
  result,
  large = false,
  fromRight = false,
}: {
  clientType: string;
  problem: string;
  result: string;
  large?: boolean;
  fromRight?: boolean;
}) {
  return (
    <motion.article
      initial={{ x: fromRight ? 40 : -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-md bg-dark-surface p-8 transition-colors hover:bg-[#2a2a2a] ${large ? "md:p-12" : ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-[0.06]"
      />
      <div className="relative">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
          {clientType}
        </p>
        <p
          className={`font-display font-bold leading-tight text-white ${large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
        >
          {problem}
        </p>
      </div>
      <div className="relative mt-10 border-t border-dark-border pt-6">
        <div
          className={`font-display font-bold tracking-tight text-white transition-colors group-hover:text-accent ${large ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}
        >
          {result}
        </div>
        <div className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-offwhite">
          View Case
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </motion.article>
  );
}
