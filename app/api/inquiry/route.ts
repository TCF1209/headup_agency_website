import { NextResponse } from "next/server";
import { Resend } from "resend";
import { inquirySchema } from "@/lib/validations";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // TODO: set RESEND_API_KEY before production. Dev-friendly: accept and log.
    console.log("[inquiry]", parsed.data);
    return NextResponse.json({ ok: true, stubbed: true });
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, service, message } = parsed.data;
  await resend.emails.send({
    from: "Head Up Agency <noreply@headupagency.com>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New inquiry — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
