"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export type Job = {
  title: string;
  department: string;
  type: string;
  location: string;
  summary: string;
};

export function JobCard({
  job,
  index = 0,
  onApply,
  onLight = false,
}: {
  job: Job;
  index?: number;
  onApply: (title: string) => void;
  onLight?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className={`group flex h-full flex-col justify-between rounded-md border p-8 transition-colors hover:border-accent ${
        onLight
          ? "border-light-border bg-light-surface"
          : "border-dark-border bg-dark-surface"
      }`}
    >
      <div>
        <p
          className={`font-mono text-xs uppercase tracking-wider ${onLight ? "text-light-muted" : "text-muted"}`}
        >
          {job.department} · {job.type}
        </p>
        <h3
          className={`mt-3 font-display text-2xl font-bold leading-tight tracking-tight ${onLight ? "text-dark-primary" : "text-white"}`}
        >
          {job.title}
        </h3>
        <div
          className={`mt-3 flex items-center gap-2 font-mono text-xs ${onLight ? "text-light-muted" : "text-offwhite"}`}
        >
          <MapPin size={14} />
          {job.location}
        </div>
        <p
          className={`mt-6 text-sm ${onLight ? "text-light-muted" : "text-offwhite"}`}
        >
          {job.summary}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onApply(job.title)}
        className="mt-8 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-wider text-accent"
      >
        Apply now
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </motion.div>
  );
}
