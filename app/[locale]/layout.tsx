import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Syne, DM_Sans, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryProvider } from "@/components/InquiryDrawer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { LOCAL_BUSINESS_JSONLD, ORG_JSONLD, pageMetadata } from "@/lib/seo";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});
const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sc",
  weight: ["400", "500", "700"],
  display: "swap",
});

const TITLES: Record<string, { title: string; description: string }> = {
  en: {
    title: "Head Up Agency — F&B Digital Growth",
    description:
      "GrabFood & Foodpanda marketing and POS system solutions for F&B businesses in Malaysia. Real results, no fluff.",
  },
  zh: {
    title: "Head Up Agency — 餐饮数字增长机构",
    description:
      "专为马来西亚餐饮业打造的 GrabFood 与 Foodpanda 营销及 POS 系统方案。真实成效,绝无虚言。",
  },
  ms: {
    title: "Head Up Agency — Pertumbuhan Digital F&B",
    description:
      "Pemasaran GrabFood & Foodpanda dan penyelesaian sistem POS untuk perniagaan F&B di Malaysia. Hasil sebenar.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = TITLES[locale] ?? TITLES.en;
  return pageMetadata({ locale, path: "", title: t.title, description: t.description });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} ${notoSC.variable}`}
    >
      <body
        className={`bg-dark-primary text-white antialiased ${locale === "zh" ? "font-cjk" : "font-sans"}`}
      >
        <NextIntlClientProvider>
          <InquiryProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFab />
          </InquiryProvider>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
