import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhySection } from "@/components/home/WhySection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <WhySection />
      <CtaBanner />
    </>
  );
}
