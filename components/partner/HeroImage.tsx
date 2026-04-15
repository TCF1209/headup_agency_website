"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PartnerHeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/5] overflow-hidden rounded-md bg-dark-surface"
    >
      <Image
        src="/images/partner/handshake.jpg"
        alt="Partnership handshake"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/70 via-transparent to-transparent" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 border-2 border-accent/40"
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-md border border-dark-border bg-dark-primary/85 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 bg-accent" />
        Fair terms · Real support
      </motion.div>
    </motion.div>
  );
}
