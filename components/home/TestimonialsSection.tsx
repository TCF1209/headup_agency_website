import { useTranslations } from "next-intl";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";

// TODO: replace placeholders with real testimonials from Sanity
const PLACEHOLDER = [
  {
    name: "Ahmad",
    business: "Restaurant · Shah Alam",
    quote:
      "Our GrabFood orders tripled in under two months. The menu rework alone paid for itself.",
  },
  {
    name: "Mei Ling",
    business: "Café · Cheras",
    quote:
      "Clear strategy, sharp execution. They know F&B in a way other agencies don't.",
  },
  {
    name: "Rizal",
    business: "Cloud Kitchen · KL",
    quote:
      "The POS migration was painless. Staff picked it up in a day. Ongoing support is real.",
  },
];

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  return (
    <section className="relative border-y border-light-border bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label={t("label")} title={t("title")} onLight />
        <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {PLACEHOLDER.map((p, i) => (
            <TestimonialCard key={p.name} {...p} index={i} onLight />
          ))}
        </div>
      </div>
    </section>
  );
}
