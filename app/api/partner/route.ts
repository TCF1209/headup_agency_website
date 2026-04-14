import { NextResponse } from "next/server";
import { Resend } from "resend";
import { partnerSchema } from "@/lib/validations";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = partnerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[partner]", parsed.data);
    return NextResponse.json({ ok: true, stubbed: true });
  }

  const resend = new Resend(apiKey);
  const d = parsed.data;
  await resend.emails.send({
    from: "Head Up Agency <noreply@headupagency.com>",
    to: CONTACT_EMAIL,
    replyTo: d.email,
    subject: `Partner inquiry — ${d.companyName}`,
    text: [
      `Name: ${d.fullName}`,
      `Company: ${d.companyName}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Business Type: ${d.businessType}`,
      "",
      "Reason:",
      d.reason,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
