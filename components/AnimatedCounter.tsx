"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export function AnimatedCounter({
  to,
  format = (v) => Math.round(v).toLocaleString(),
  delay = 0,
  className,
}: {
  to: number;
  format?: (v: number) => string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => format(v));

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => mv.set(to), delay);
    return () => clearTimeout(timer);
  }, [inView, to, delay, mv]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
