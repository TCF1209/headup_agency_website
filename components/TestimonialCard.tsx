"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialCard({
  name,
  business,
  quote,
  rating = 5,
  index = 0,
  onLight = false,
}: {
  name: string;
  business: string;
  quote: string;
  rating?: number;
  index?: number;
  onLight?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.09 }}
      className={`flex h-full min-w-[300px] flex-col gap-6 rounded-md p-8 md:min-w-0 ${onLight ? "border border-black/5 bg-white" : "bg-dark-surface"}`}
    >
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <p
        className={`flex-1 font-display text-xl leading-snug ${onLight ? "text-dark-primary" : "text-white"}`}
      >
        “{quote}”
      </p>
      <div
        className={`flex items-center gap-3 border-t pt-5 ${onLight ? "border-black/10" : "border-dark-border"}`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold ${onLight ? "bg-dark-primary text-white" : "bg-accent text-dark-primary"}`}
        >
          {name[0]}
        </div>
        <div>
          <p
            className={`font-medium ${onLight ? "text-dark-primary" : "text-white"}`}
          >
            {name}
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {business}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
