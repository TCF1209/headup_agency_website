import {
  ArrowRight,
  BarChart3,
  Cpu,
  FileText,
  Headphones,
  Link as LinkIcon,
  MessageSquare,
  Settings,
  Star,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { InquiryTrigger } from "@/components/InquiryTrigger";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/services",
    title: "Services — GrabFood & Foodpanda Marketing, POS Solutions",
    description:
      "Menu optimisation, ad spend management, POS installation and training. Specialist F&B services in Malaysia.",
  });
}

const GRABFOOD_INCLUDES: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Menu optimisation" },
  { icon: Target, label: "Promotional campaigns" },
  { icon: Star, label: "Rating & review management" },
  { icon: BarChart3, label: "Sales analytics & reporting" },
  { icon: TrendingUp, label: "Ad spend management" },
];

const POS_INCLUDES: { icon: LucideIcon; label: string }[] = [
  { icon: Cpu, label: "POS hardware setup" },
  { icon: Settings, label: "Software configuration" },
  { icon: Users, label: "Staff training" },
  { icon: Headphones, label: "Ongoing support" },
  { icon: LinkIcon, label: "GrabFood/Foodpanda integration" },
];

const GRABFOOD_FAQS = [
  {
    q: "How long until I see results?",
    a: "Most clients see meaningful order lift within 30–45 days. Menu and pricing changes move fast; ad spend scales from there.",
  },
  {
    q: "Do you handle the ad budget?",
    a: "Yes — we manage your GrabFood and Foodpanda ad spend with monthly reports breaking down cost per order, not just impressions.",
  },
  {
    q: "What if my food photos aren't great?",
    a: "We arrange a shoot or work with existing assets. Good photography lifts conversion 20–40% on most menus.",
  },
  {
    q: "Can you manage negative reviews?",
    a: "We respond within 24h on your behalf, flag pattern complaints, and push operational fixes back to your team.",
  },
  {
    q: "Is there a minimum contract?",
    a: "3 months. Enough time for campaigns to produce data, not so long that we can hide behind a contract.",
  },
];

const POS_FAQS = [
  {
    q: "Which POS brands do you work with?",
    a: "We're hardware-agnostic. We'll recommend based on your menu size, delivery mix, and existing setup — not a brand kickback.",
  },
  {
    q: "How long does installation take?",
    a: "A single-outlet installation typically takes one business day, including staff training and live test orders.",
  },
  {
    q: "Do you integrate with GrabFood and Foodpanda?",
    a: "Yes — every system we deploy auto-syncs orders from delivery platforms so your kitchen and back-of-house stay in one queue.",
  },
  {
    q: "What about support after install?",
    a: "Included for the first 90 days. Extended support available by tier — see your quote.",
  },
  {
    q: "Can you migrate my existing sales data?",
    a: "Yes, if your current system exports it. We'll confirm feasibility in the audit call before quoting.",
  },
];

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return (
    <main className="bg-light-bg pt-28 text-body">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          {"// SERVICES"}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-dark-primary md:text-7xl">
          Two focuses. Both F&amp;B. Done properly.
        </h1>
      </div>

      <ServiceBlock
        id="grabfood"
        label="// 01 · DELIVERY MARKETING"
        title="GrabFood & Foodpanda Marketing"
        subtitle="Orders, ratings, and ad efficiency — managed end to end."
        includes={GRABFOOD_INCLUDES}
        faqs={GRABFOOD_FAQS}
        ctaLabel="Book a free consultation"
        ctaHref="/book"
        variant="delivery"
      />

      <div className="border-t border-light-border" />

      <ServiceBlock
        id="pos"
        label="// 02 · POS SOLUTIONS"
        title="POS System Solutions"
        subtitle="Hardware, software, training, support — integrated with delivery."
        includes={POS_INCLUDES}
        faqs={POS_FAQS}
        ctaLabel="Get a quote"
        ctaHref="/book"
        variant="pos"
      />
    </main>
  );
}

function ServiceBlock({
  id,
  label,
  title,
  subtitle,
  includes,
  faqs,
  ctaLabel,
  ctaHref,
  variant,
}: {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  includes: { icon: LucideIcon; label: string }[];
  faqs: { q: string; a: string }[];
  ctaLabel: string;
  ctaHref: string;
  variant: "delivery" | "pos";
}) {
  const steps = [
    { n: "01", t: "Audit", d: "Current state, operational gaps, ad baseline." },
    { n: "02", t: "Strategy", d: "Menu, pricing, campaign calendar, budget plan." },
    { n: "03", t: "Execute", d: "Weekly reporting, monthly reviews, fast iteration." },
  ];

  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ServiceHero variant={variant} label={label} />

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold leading-[1] tracking-tight text-dark-primary md:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-light-muted md:text-lg">{subtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ctaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-white transition-all hover:scale-[1.03] hover:bg-accent-muted"
              >
                {ctaLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <InquiryTrigger className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-dark-primary px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-colors hover:text-white">
                <span className="absolute inset-0 origin-left scale-x-0 bg-dark-primary transition-transform duration-200 group-hover:scale-x-100" />
                <span className="relative">Ask a question</span>
              </InquiryTrigger>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-light-muted">
              {"// WHAT'S INCLUDED"}
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includes.map(({ icon: Icon, label: l }) => (
                <li
                  key={l}
                  className="flex items-center gap-3 rounded-md border border-light-border bg-light-surface p-4"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-light-border text-accent">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-body">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-light-muted">
            {"// HOW IT WORKS"}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-md border border-light-border bg-light-surface p-8"
              >
                <div className="font-display text-6xl font-bold text-accent">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-dark-primary">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm text-light-muted">{s.d}</p>
                {i < 2 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-light-bg p-1 text-accent md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-light-muted">
              {"// FAQ"}
            </p>
            <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-dark-primary md:text-5xl">
              Questions operators actually ask.
            </h3>
            <div className="mt-6 flex items-center gap-2">
              <MessageSquare size={16} className="text-accent" />
              <InquiryTrigger className="font-mono text-xs uppercase tracking-wider text-body underline-offset-4 transition-colors hover:text-accent hover:underline">
                Ask your own
              </InquiryTrigger>
            </div>
          </div>
          <FaqAccordion items={faqs} onLight />
        </div>
      </div>
    </section>
  );
}

function ServiceHero({
  variant,
  label,
}: {
  variant: "delivery" | "pos";
  label: string;
}) {
  return (
    <div className="mb-2">
      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </p>
      {variant === "pos" ? (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md bg-light-surface">
          <Image
            src="/images/services/pos-v2.jpg"
            alt="POS system hardware setup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-dark-primary/10 to-transparent" />
          <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-md border border-dark-border bg-dark-primary/80 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-wider text-white">
              Integrated hardware + software
            </span>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md border border-light-border bg-light-surface">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 border-2 border-light-border"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-12 bottom-8 h-40 w-40 border border-accent/30"
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-8 px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-light-muted">
              We run campaigns on
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:gap-28">
              <Image
                src="/images/platforms/grabfood.png"
                alt="GrabFood"
                width={440}
                height={128}
                className="h-14 w-auto object-contain md:h-28 lg:h-36"
              />
              <div className="h-10 w-px bg-light-border md:h-24" />
              <Image
                src="/images/platforms/foodpanda.jpg"
                alt="Foodpanda"
                width={480}
                height={128}
                className="h-14 w-auto object-contain md:h-28 lg:h-36"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
