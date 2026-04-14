"use client";

import { Utensils, Cpu } from "lucide-react";
import { useTranslations } from "next-intl";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";

export function ServicesSection() {
  const t = useTranslations("home.services");
  return (
    <section className="relative bg-dark-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label={t("label")} title={t("title")} />
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            icon={Utensils}
            title={t("grabfood.title")}
            description={t("grabfood.description")}
            href="/services"
            index={0}
          />
          <ServiceCard
            icon={Cpu}
            title={t("pos.title")}
            description={t("pos.description")}
            href="/services"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
