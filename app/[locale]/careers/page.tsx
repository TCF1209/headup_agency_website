import { setRequestLocale } from "next-intl/server";
import { CareersInteractive } from "@/components/CareersInteractive";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/careers",
    title: "Careers — Head Up Agency",
    description:
      "Open roles at Head Up Agency. Join a specialist F&B growth team in Malaysia.",
  });
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-dark-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          {"// CAREERS"}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
          Join the team that grows F&amp;B businesses.
        </h1>
      </div>
      <CareersInteractive />
    </main>
  );
}
