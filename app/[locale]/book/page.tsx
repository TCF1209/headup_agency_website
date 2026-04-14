import { setRequestLocale } from "next-intl/server";
import { BookingForm } from "@/components/BookingForm";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/book",
    title: "Book a Free Consultation — Head Up Agency",
    description:
      "30-minute consultation with F&B digital specialists. No commitment, specific recommendations.",
  });
}

export default function BookPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <main className="min-h-screen bg-dark-primary pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            {"// BOOK A CONSULTANT"}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
            Book your free consultation.
          </h1>
          <p className="mt-6 text-offwhite md:text-lg">
            30-minute session · No commitment · F&amp;B specialists only.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-md bg-dark-surface/40 p-6 md:p-10">
            <BookingForm />
          </div>
          <aside className="flex flex-col gap-6">
            <Perk number="01" title="No sales pitch">
              We use the 30 minutes to understand your business, not to push services.
            </Perk>
            <Perk number="02" title="Specific recommendations">
              You leave with concrete next steps — even if you never hire us.
            </Perk>
            <Perk number="03" title="F&B only">
              Restaurants, cafés, hawkers, cloud kitchens. We don&rsquo;t do general agency work.
            </Perk>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Perk({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        {number}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-offwhite">{children}</p>
    </div>
  );
}
