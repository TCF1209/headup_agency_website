import { z } from "zod";

const malaysianPhone = /^(\+?60|0)[0-9]{8,10}$/;

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(malaysianPhone),
  businessName: z.string().min(1),
  businessType: z.enum(["restaurant", "cafe", "hawker", "cloud_kitchen", "other"]),
  service: z.enum(["grabfood_foodpanda", "pos", "both"]),
  date: z.string().min(1),
  time: z.enum(["morning", "afternoon", "evening"]),
  notes: z.string().optional(),
});
export type BookingInput = z.infer<typeof bookingSchema>;

export const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(malaysianPhone),
  service: z.enum(["grabfood_foodpanda", "pos", "both", "other"]),
  message: z.string().min(10),
});
export type InquiryInput = z.infer<typeof inquirySchema>;

export const partnerSchema = z.object({
  fullName: z.string().min(2),
  companyName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().regex(malaysianPhone),
  businessType: z.string().min(1),
  reason: z.string().min(10),
});
export type PartnerInput = z.infer<typeof partnerSchema>;

export const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(malaysianPhone),
  position: z.string().min(1),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  coverLetter: z.string().min(20),
});
export type ApplicationInput = z.infer<typeof applicationSchema>;
