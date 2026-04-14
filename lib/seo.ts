import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://headupagency.com";

type PageSeoInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: PageSeoInput): Metadata {
  const canonical = `${SITE_URL}/${locale}${path}`;
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      locale,
      siteName: "Head Up Agency",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Head Up Agency",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "F&B digital growth agency. GrabFood & Foodpanda marketing and POS system solutions for restaurants, cafés, hawkers, and cloud kitchens.",
  areaServed: "MY",
};

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Head Up Agency",
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
    addressRegion: "Selangor",
  },
};
