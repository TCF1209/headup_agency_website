"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "/images/team/team-01.jpg", alt: "Head Up Agency team" },
  { src: "/images/team/team-02.jpg", alt: "Head Up Agency team" },
  { src: "/images/team/team-03.jpg", alt: "Head Up Agency team" },
];

export function TeamGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
        {"// THE TEAM"}
      </p>
      <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
        The people behind the results.
      </h2>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {PHOTOS.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-md bg-dark-surface ${i === 1 ? "md:translate-y-8" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-50" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
