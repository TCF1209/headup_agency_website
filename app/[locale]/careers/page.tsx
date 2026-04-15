import { setRequestLocale } from "next-intl/server";
import { CareersInteractive } from "@/components/CareersInteractive";
import { PageHeader } from "@/components/PageHeader";
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
        <PageHeader
          label="// CAREERS"
          title={<>Join the team that grows F&amp;B businesses.</>}
        />
      </div>
      <CareersInteractive />
    </main>
  );
}
