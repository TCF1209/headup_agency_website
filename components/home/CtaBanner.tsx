import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { InquiryTrigger } from "@/components/InquiryTrigger";

export function CtaBanner() {
  const t = useTranslations("home.ctaBanner");
  const cta = useTranslations("cta");

  return (
    <section className="relative bg-dark-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-md bg-dark-surface py-16 pl-8 pr-8 md:py-24 md:pl-16 md:pr-12">
          <span className="absolute inset-y-0 left-0 w-2 bg-accent" />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              {t("headline")}
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-all hover:scale-[1.03] hover:bg-accent-muted active:scale-[0.97]"
              >
                {cta("bookConsultant")}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <InquiryTrigger className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/80 px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-dark-primary">
                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-200 group-hover:scale-x-100" />
                <span className="relative">{cta("sendInquiry")}</span>
              </InquiryTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
