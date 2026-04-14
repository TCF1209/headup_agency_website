"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" as const },
  { href: "/services", key: "services" as const },
  { href: "/solutions", key: "solutions" as const },
  { href: "/book", key: "book" as const },
  { href: "/careers", key: "careers" as const },
  { href: "/partner", key: "partner" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(26,26,26,0)", "rgba(26,26,26,0.8)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg }}
        className="fixed inset-x-0 top-0 z-40 backdrop-blur-md"
      >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-dark-border"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-75">
          <Image
            src="/images/logo.png"
            alt="Head Up Agency"
            width={140}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="group relative font-mono text-xs uppercase tracking-wider text-offwhite transition-colors hover:text-white"
              >
                {t(item.key)}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-transform duration-200 ${isActive(item.href) ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"}`}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center text-white md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            style={{ backgroundColor: "#1A1A1A" }}
            className="fixed inset-0 z-[60] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Image
                src="/images/logo.png"
                alt="Head Up Agency"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-6 px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.key}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`font-display text-4xl font-bold tracking-tight ${isActive(item.href) ? "text-accent" : "text-white"}`}
                  >
                    {t(item.key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-10 pt-6">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
