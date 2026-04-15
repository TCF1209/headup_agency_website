"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BookSidebar() {
  const perks = [
    {
      n: "01",
      title: "No sales pitch",
      body: "We use the 30 minutes to understand your business, not to push services.",
    },
    {
      n: "02",
      title: "Specific recommendations",
      body: "You leave with concrete next steps — even if you never hire us.",
    },
    {
      n: "03",
      title: "F&B only",
      body: "Restaurants, cafés, hawkers, cloud kitchens. We don\u2019t do general agency work.",
    },
  ];

  return (
    <aside className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-md bg-dark-surface"
      >
        <Image
          src="/images/book/consultation.jpg"
          alt="In-person consultation"
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="absolute bottom-5 left-5 right-5"
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-dark-border bg-dark-primary/80 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 bg-accent" />
            30-minute session
          </span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-6">
        {perks.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="border-l-2 border-accent pl-5"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {p.n}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-offwhite">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </aside>
  );
}
