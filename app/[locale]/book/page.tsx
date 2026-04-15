import { setRequestLocale } from "next-intl/server";
import { BookingForm } from "@/components/BookingForm";
import { BookSidebar } from "@/components/book/BookSidebar";
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
        <div className="mb-12">
          <PageHeader
            label="// BOOK A CONSULTANT"
            title="Book your free consultation."
            subtitle={<>30-minute session · No commitment · F&amp;B specialists only.</>}
            maxWidth="max-w-3xl"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-md bg-dark-surface/40 p-6 md:p-10">
            <BookingForm />
          </div>
          <BookSidebar />
        </div>
      </div>
    </main>
  );
}
