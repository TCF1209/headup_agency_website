import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema } from "@/lib/validations";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[booking]", parsed.data);
    return NextResponse.json({ ok: true, stubbed: true });
  }

  const resend = new Resend(apiKey);
  const d = parsed.data;
  await resend.emails.send({
    from: "Head Up Agency <noreply@headupagency.com>",
    to: CONTACT_EMAIL,
    replyTo: d.email,
    subject: `New booking — ${d.fullName} · ${d.date}`,
    text: [
      `Name: ${d.fullName}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Business: ${d.businessName} (${d.businessType})`,
      `Service: ${d.service}`,
      `Preferred: ${d.date} · ${d.time}`,
      d.notes ? `Notes: ${d.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return NextResponse.json({ ok: true });
}
