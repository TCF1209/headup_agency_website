import Image from "next/image";
import { Award, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { PartnerForm } from "@/components/PartnerForm";
import { TrustedByStrip } from "@/components/TrustedByStrip";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/partner",
    title: "Partner Programme — Head Up Agency",
    description:
      "Become an authorised Head Up partner. Recurring commissions, co-branded assets, joint pitches.",
  });
}

// TODO: replace with real partner-programme copy
const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Recurring commissions",
    description: "Transparent revenue share on every client you refer — for the life of the engagement.",
  },
  {
    icon: Award,
    title: "Authorised partner status",
    description: "Official listing, co-branded marketing assets, and priority lead routing.",
  },
  {
    icon: Users,
    title: "Joint pitch support",
    description: "We join your client calls when it helps close. No upcharge.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated partner manager",
    description: "One named contact, weekly check-ins, and a shared deal board.",
  },
];

export default function PartnerPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return (
    <main className="bg-dark-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              {"// PARTNER PROGRAMME"}
            </p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
              Become an authorised partner.
            </h1>
            <div className="mt-8 max-w-2xl space-y-4 text-offwhite md:text-lg">
              <p>
                {/* TODO: real programme description */}
                We work with POS resellers, F&amp;B consultants, and agencies that share our
                bias for specifics over slogans. If you already serve restaurants and want
                a credible partner for digital growth and POS delivery, let&rsquo;s talk.
              </p>
              <p>Simple terms, fair splits, real support. No channel theatre.</p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-dark-surface">
            <Image
              src="/images/partner/handshake.jpg"
              alt="Partnership handshake"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/70 via-transparent to-transparent" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 border-2 border-accent/40"
            />
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-md border border-dark-border bg-dark-primary/85 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur-sm">
              <span className="h-1.5 w-1.5 bg-accent" />
              Fair terms · Real support
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// BENEFITS"}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 rounded-md border border-dark-border bg-dark-surface p-6"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-dark-border text-accent">
                <b.icon size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-offwhite">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustedByStrip variant="platforms" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// INQUIRY"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
          Tell us how you&rsquo;d like to partner.
        </h2>
        <div className="mt-12 max-w-3xl">
          <PartnerForm />
        </div>
      </section>
    </main>
  );
}
