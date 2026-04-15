import { setRequestLocale } from "next-intl/server";
import { TestimonialCard } from "@/components/TestimonialCard";
import { VideoCard } from "@/components/VideoCard";
import { InquiryTrigger } from "@/components/InquiryTrigger";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CaseStudyArticle } from "@/components/solutions/CaseStudyArticle";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/solutions",
    title: "Case Studies & Client Stories — Head Up Agency",
    description:
      "Real F&B problems, real solutions, real results. Case studies, client videos, and testimonials.",
  });
}

// TODO: replace placeholders with real entries from Sanity
const CASE_STUDIES = [
  {
    client: "Hawker Stall · Klang Valley",
    image: "/images/case-studies/hawker.jpg",
    problem: "Low visibility on GrabFood, averaging 20 orders/day.",
    solution:
      "Full menu redesign + promotional campaign + ad spend management across both GrabFood and Foodpanda.",
    results: ["+280% orders in 60 days", "RM 45,000 additional revenue", "4.7★ avg rating (from 3.9★)"],
  },
  {
    client: "Café · Petaling Jaya",
    image: "/images/case-studies/cafe.jpg",
    problem: "Consistent 4.1★ rating dragging discovery; stale 45-item menu.",
    solution:
      "Trimmed menu to 22 high-margin items, launched a weekend-only campaign, trained staff on review-response SOP.",
    results: ["4.1★ → 4.8★ in 90 days", "+110% weekend orders", "Top-20 discovery in zone"],
  },
  {
    client: "Cloud Kitchen · KL",
    image: "/images/case-studies/cloud-kitchen.jpg",
    problem: "POS choking at peak; orders missed; staff reconciling manually.",
    solution:
      "Migrated to integrated POS with GrabFood/Foodpanda sync, trained 8 staff, established monthly reporting cadence.",
    results: ["Zero missed orders / month", "RM 45K recovered / month", "2h admin time saved daily"],
  },
];

// TODO: replace with real testimonial videos
const VIDEOS = [
  {
    title: "Hawker stall +280% orders",
    caption: "Klang Valley · 60 days",
    youtubeId: "dQw4w9WgXcQ",
    poster: "/images/case-studies/hawker.jpg",
  },
  {
    title: "Café rating 4.1 → 4.8",
    caption: "Petaling Jaya · 90 days",
    youtubeId: "dQw4w9WgXcQ",
    poster: "/images/case-studies/cafe.jpg",
  },
  {
    title: "Cloud kitchen POS migration",
    caption: "Kuala Lumpur",
    youtubeId: "dQw4w9WgXcQ",
    poster: "/images/case-studies/cloud-kitchen.jpg",
  },
];

// TODO: replace with real quotes
const QUOTES = [
  {
    name: "Ahmad",
    business: "Restaurant · Shah Alam",
    quote: "Our GrabFood orders tripled in under two months. The menu rework alone paid for itself.",
  },
  {
    name: "Mei Ling",
    business: "Café · Cheras",
    quote: "Clear strategy, sharp execution. They know F&B in a way other agencies don't.",
  },
  {
    name: "Rizal",
    business: "Cloud Kitchen · KL",
    quote: "The POS migration was painless. Staff picked it up in a day. Ongoing support is real.",
  },
  {
    name: "Suraya",
    business: "Hawker · Ampang",
    quote: "They speak operator, not agency. First proposal had actual numbers, not buzzwords.",
  },
];

export default function SolutionsPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return (
    <main className="bg-dark-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <PageHeader
          label="// SOLUTIONS"
          title="Real problems. Real solutions. Real results."
          maxWidth="max-w-5xl"
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-muted">
          {"// CASE STUDIES"}
        </p>
        <div className="flex flex-col gap-6">
          {CASE_STUDIES.map((c, i) => (
            <CaseStudyArticle
              key={i}
              data={c}
              index={i}
              total={CASE_STUDIES.length}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// CLIENT STORIES"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
          Watch operators tell it themselves.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <VideoCard key={i} {...v} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// TESTIMONIALS"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
          What they said after.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <TestimonialCard key={q.name} {...q} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-md bg-dark-surface p-10 text-center md:p-16">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
            Want results like these? Start with 30 minutes.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-all hover:scale-[1.03] hover:bg-accent-muted"
            >
              Book a consultant
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <InquiryTrigger className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/80 px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-dark-primary">
              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-200 group-hover:scale-x-100" />
              <span className="relative">Send an inquiry</span>
            </InquiryTrigger>
          </div>
        </div>
      </section>
    </main>
  );
}