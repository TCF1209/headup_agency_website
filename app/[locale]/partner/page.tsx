import { Award, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { PartnerForm } from "@/components/PartnerForm";
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
    <main className="bg-light-bg pt-28 text-dark-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          {"// PARTNER PROGRAMME"}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-dark-primary md:text-7xl">
          Become an authorised partner.
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-light-muted md:text-lg">
          <p>
            {/* TODO: real programme description */}
            We work with POS resellers, F&amp;B consultants, and agencies that share our
            bias for specifics over slogans. If you already serve restaurants and want
            a credible partner for digital growth and POS delivery, let&rsquo;s talk.
          </p>
          <p>
            Simple terms, fair splits, real support. No channel theatre.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-light-muted">
          {"// BENEFITS"}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 rounded-md border border-light-border bg-light-surface p-6"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-light-border text-accent">
                <b.icon size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-dark-primary">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-light-muted">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-light-muted">
          {"// INQUIRY"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-dark-primary md:text-6xl">
          Tell us how you&rsquo;d like to partner.
        </h2>
        <div className="mt-12 max-w-3xl">
          <PartnerForm />
        </div>
      </section>
    </main>
  );
}
