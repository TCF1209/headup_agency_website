"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(
    "Hi Head Up Agency, I'd like to know more about your services.",
  );
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dark-primary text-accent shadow-lg ring-1 ring-dark-border transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
