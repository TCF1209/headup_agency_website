"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  const t = useTranslations("cta");
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-md bg-dark-surface p-8 transition-colors hover:bg-[#2a2a2a] md:p-10"
      style={{ willChange: "transform" }}
    >
      <span className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-200 group-hover:w-1" />
      <div>
        <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-md border border-dark-border bg-dark-primary text-accent">
          <Icon size={28} />
        </div>
        <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-base text-offwhite">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent"
      >
        {t("learnMore")}
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
