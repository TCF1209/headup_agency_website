"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedCounter } from "./AnimatedCounter";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const s = useTranslations("home.stats");
  const cta = useTranslations("cta");

  const headline = t.raw("headline") as string;
  const parts = headline.split(/(<accent>.*?<\/accent>)/g).filter(Boolean);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-light-bg pt-24 text-body">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 hidden h-[420px] w-[420px] border-2 border-light-border lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-32 top-1/2 hidden h-[220px] w-[220px] border border-light-border lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-8 font-mono text-xs tracking-widest text-accent"
          >
            {t("label")}
          </motion.p>

          <h1 className="font-display text-[clamp(2.75rem,9vw,9rem)] font-bold leading-[0.92] tracking-tight text-dark-primary">
            {parts.map((part, i) => {
              const accentMatch = part.match(/^<accent>(.*?)<\/accent>$/);
              const words = (accentMatch ? accentMatch[1] : part)
                .split(/\s+/)
                .filter(Boolean);
              return words.map((word, j) => {
                const globalIndex = parts
                  .slice(0, i)
                  .reduce(
                    (acc, p) =>
                      acc +
                      (p.match(/^<accent>(.*?)<\/accent>$/)?.[1] ?? p)
                        .split(/\s+/)
                        .filter(Boolean).length,
                    0,
                  ) + j;
                const isAccent = Boolean(accentMatch);
                return (
                  <motion.span
                    key={`${i}-${j}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + globalIndex * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`mr-[0.25em] inline-block ${isAccent ? "text-accent" : ""}`}
                  >
                    {isAccent ? (
                      <motion.span
                        initial={{ scale: 1 }}
                        animate={{ scale: [0.85, 1.08, 1] }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + globalIndex * 0.07 + 0.4,
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              });
            })}
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 max-w-xl text-base text-light-muted md:text-lg"
          >
            {t("subheading")}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-white transition-all hover:scale-[1.03] hover:bg-accent-muted active:scale-[0.97]"
            >
              {cta("bookConsultant")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solutions"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-dark-primary px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-colors hover:text-white"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-dark-primary transition-transform duration-200 group-hover:scale-x-100" />
              <span className="relative">{cta("viewWork")}</span>
            </Link>
          </motion.div>

          <div className="mt-16 inline-flex items-center rounded-md border border-light-border bg-light-surface px-4 py-2">
            <span className="mr-2 h-2 w-2 bg-accent" />
            <span className="font-mono text-xs tracking-wider text-body">
              Specialising in F&amp;B
            </span>
          </div>
        </div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          <StatCard
            value={
              <>
                <AnimatedCounter to={200} delay={400} />+
              </>
            }
            label={s("clients")}
            accent
          />
          <StatCard
            value={
              <>
                RM{" "}
                <AnimatedCounter
                  to={2000000}
                  delay={400}
                  format={(v) => `${(v / 1000000).toFixed(1)}M`}
                />
                +
              </>
            }
            label={s("revenue")}
          />
          <StatCard
            value={
              <>
                <AnimatedCounter
                  to={4.9}
                  delay={400}
                  format={(v) => v.toFixed(1)}
                />
                ★
              </>
            }
            label={s("rating")}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0.4, 1], y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 2, repeat: Infinity, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, delay: 1.5 },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-accent"
      >
        ↓ {t("scroll")}
      </motion.div>
    </section>
  );
}

function StatCard({
  value,
  label,
  accent = false,
}: {
  value: React.ReactNode;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="border-l-2 border-accent bg-light-surface px-6 py-5 shadow-sm">
      <div
        className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${accent ? "text-accent" : "text-dark-primary"}`}
      >
        {value}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-light-muted">
        {label}
      </div>
    </div>
  );
}
