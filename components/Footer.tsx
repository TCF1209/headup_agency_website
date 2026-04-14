import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL, SOCIAL } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const t = useTranslations("nav");

  return (
    <footer className="border-t border-dark-border bg-dark-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Head Up Agency"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted">
              F&B digital growth — GrabFood & Foodpanda marketing, POS system solutions.
            </p>
          </div>

          <FooterCol title="Company">
            <FooterLink href="/">{t("home")}</FooterLink>
            <FooterLink href="/careers">{t("careers")}</FooterLink>
            <FooterLink href="/partner">{t("partner")}</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink href="/services">{t("services")}</FooterLink>
            <FooterLink href="/solutions">{t("solutions")}</FooterLink>
            <FooterLink href="/book">{t("book")}</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-offwhite transition-colors hover:text-accent"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-4 flex gap-3">
              <SocialLink href={SOCIAL.facebook} label="Facebook">
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href={SOCIAL.instagram} label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href={SOCIAL.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
            </div>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-dark-border pt-6 md:flex-row md:items-center md:justify-between">
          <LanguageSwitcher />
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Head Up Agency · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
        {title}
      </p>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block text-sm text-offwhite transition-all hover:translate-x-1 hover:text-accent"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded border border-dark-border text-offwhite transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
