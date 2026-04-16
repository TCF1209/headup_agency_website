"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Variant = "platforms" | "clients";

const PLATFORMS = [
  { name: "GrabFood", src: "/images/platforms/grabfood.png", width: 140, height: 44 },
  { name: "Foodpanda", src: "/images/platforms/foodpanda.jpg", width: 160, height: 44 },
];

export function TrustedByStrip({
  variant = "platforms",
  onLight = false,
}: {
  variant?: Variant;
  onLight?: boolean;
}) {
  if (variant === "platforms") {
    return (
      <section
        className={`relative py-16 ${onLight ? "border-y border-light-border bg-light-bg" : "border-y border-dark-border bg-[#1f1f1f]"}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p
            className={`mb-8 text-center font-mono text-xs uppercase tracking-widest ${onLight ? "text-light-muted" : "text-muted"}`}
          >
            {"// WE INTEGRATE WITH"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  className="h-10 w-auto object-contain transition-transform hover:scale-105 md:h-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // variant === "clients" — placeholder slots (Option A)
  const slots = Array.from({ length: 6 });
  return (
    <section
      className={`relative py-20 md:py-24 ${onLight ? "bg-light-bg text-dark-primary" : "bg-dark-primary text-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              {"// TRUSTED BY"}
            </p>
            <h2
              className={`max-w-xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl ${onLight ? "text-dark-primary" : "text-white"}`}
            >
              Real F&amp;B operators. Real results.
            </h2>
          </div>
          <p
            className={`max-w-sm text-sm ${onLight ? "text-light-muted" : "text-offwhite"}`}
          >
            Be our next success story — your logo here next.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {slots.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`flex aspect-[5/3] items-center justify-center rounded-md border-2 border-dashed ${onLight ? "border-light-border bg-white" : "border-dark-border bg-dark-surface/40"}`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${onLight ? "text-light-muted" : "text-muted"}`}
              >
                {"// YOUR LOGO HERE"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
