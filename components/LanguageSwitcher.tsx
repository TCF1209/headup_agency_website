"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  zh: "中文",
  ms: "BM",
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-md border border-dark-border bg-dark-surface p-1 font-mono text-xs ${className}`}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            onClick={() => router.replace(pathname, { locale: loc })}
            className="relative rounded px-3 py-1.5 transition-colors"
            aria-current={active ? "true" : undefined}
          >
            {active && (
              <motion.span
                layoutId="activeLang"
                className="absolute inset-0 rounded bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className={`relative ${active ? "text-dark-primary" : "text-offwhite hover:text-accent"}`}
            >
              {LABELS[loc]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
