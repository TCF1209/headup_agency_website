import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeader } from "@/components/SectionHeader";

// TODO: replace placeholders with real case studies from Sanity
export function CaseStudiesSection() {
  const t = useTranslations("home.cases");
  return (
    <section className="relative bg-dark-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label={t("label")} title={t("title")} />
        <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
          <div className="md:row-span-2">
            <CaseStudyCard
              clientType="Hawker Stall · Klang Valley"
              problem="Low GrabFood visibility, averaging 20 orders/day"
              result="+340% Orders"
              large
            />
          </div>
          <CaseStudyCard
            clientType="Café · Petaling Jaya"
            problem="Poor rating dragging down discovery"
            result="4.2★ → 4.8★"
            fromRight
          />
          <CaseStudyCard
            clientType="Cloud Kitchen · KL"
            problem="POS system bottlenecking peak-hour orders"
            result="RM 45K / mo"
            fromRight
          />
        </div>
        <div className="mt-12">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
          >
            {t("viewAll")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
