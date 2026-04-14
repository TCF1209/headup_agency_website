import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(data: {
  name: string;
  businessName: string;
  service: string;
  date: string;
  time: string;
}): string {
  return [
    "New Booking Request — Head Up Agency",
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Service: ${data.service}`,
    `Preferred: ${data.date} · ${data.time}`,
  ].join("\n");
}

export function inquiryMessage(data: {
  name: string;
  service: string;
  message: string;
}): string {
  return [
    "New Inquiry — Head Up Agency",
    `Name: ${data.name}`,
    `Service: ${data.service}`,
    `Message: ${data.message}`,
  ].join("\n");
}
