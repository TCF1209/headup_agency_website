"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CaseStudy = {
  client: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
};

export function CaseStudyArticle({
  data,
  index,
  total,
}: {
  data: CaseStudy;
  index: number;
  total: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-0 overflow-hidden rounded-md border border-dark-border bg-dark-surface md:grid-cols-[2fr_3fr]"
    >
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={data.image}
            alt={data.client}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-dark-surface" />
        <div className="absolute left-6 top-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-md border border-dark-border bg-dark-primary/80 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 bg-accent" />
            {`0${index + 1} / 0${total}`}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-xs uppercase tracking-wider text-white">
            {data.client}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-8 md:p-12">
        <Block label="Problem" body={data.problem} delay={0.1} />
        <Block label="Solution" body={data.solution} delay={0.18} />
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.26 }}
            className="mb-3 font-mono text-xs uppercase tracking-wider text-muted"
          >
            Results
          </motion.p>
          <div className="grid gap-3 sm:grid-cols-3">
            {data.results.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: 0.32 + i * 0.06 }}
                className="rounded border-l-2 border-accent bg-dark-primary px-4 py-3 font-display text-lg font-bold leading-tight text-white"
              >
                {r}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Block({
  label,
  body,
  delay = 0,
}: {
  label: string;
  body: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="text-lg text-white md:text-xl">{body}</p>
    </motion.div>
  );
}
