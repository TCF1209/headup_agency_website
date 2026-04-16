"use client";

import { motion } from "framer-motion";
import { Target, BarChart3, Handshake, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";

export function WhySection() {
  const t = useTranslations("home.why");
  const reasons: { icon: LucideIcon; key: "specialists" | "data" | "endToEnd" }[] =
    [
      { icon: Target, key: "specialists" },
      { icon: BarChart3, key: "data" },
      { icon: Handshake, key: "endToEnd" },
    ];

  return (
    <section className="relative bg-light-bg py-24 text-dark-primary md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label={t("label")} title={t("title")} onLight />
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.key}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 -top-10 font-display text-8xl font-bold leading-none text-accent md:text-9xl">
                0{i + 1}
              </div>
              <div className="relative pl-2 pt-6">
                <r.icon size={32} className="mb-6 text-dark-primary" />
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {t(`${r.key}.title`)}
                </h3>
                <p className="mt-3 text-base text-light-muted">
                  {t(`${r.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
