import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("home.hero");

  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <section className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 py-24">
        <p className="mb-6 font-mono text-xs tracking-widest text-accent">
          {t("label")}
        </p>
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {t.rich("headline", {
            accent: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h1>
        <p className="mt-8 max-w-2xl text-base text-offwhite md:text-lg">
          {t("subheading")}
        </p>
      </section>
    </main>
  );
}
