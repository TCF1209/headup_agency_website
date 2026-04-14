import { NextResponse } from "next/server";
import { Resend } from "resend";
import { HR_EMAIL } from "@/lib/constants";

const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(req: Request) {
  const fd = await req.formData();

  const fullName = String(fd.get("fullName") ?? "");
  const email = String(fd.get("email") ?? "");
  const phone = String(fd.get("phone") ?? "");
  const position = String(fd.get("position") ?? "");
  const portfolioUrl = String(fd.get("portfolioUrl") ?? "");
  const coverLetter = String(fd.get("coverLetter") ?? "");
  const resume = fd.get("resume");

  if (!fullName || !email || !phone || !position || !coverLetter) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "resume required" }, { status: 400 });
  }
  if (resume.size > MAX_BYTES) {
    return NextResponse.json({ error: "file too large" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[application]", {
      fullName,
      email,
      position,
      resume: resume.name,
      size: resume.size,
    });
    return NextResponse.json({ ok: true, stubbed: true });
  }

  const buf = Buffer.from(await resume.arrayBuffer());
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "Head Up Agency <noreply@headupagency.com>",
    to: HR_EMAIL,
    replyTo: email,
    subject: `Application — ${fullName} · ${position}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position: ${position}`,
      portfolioUrl ? `Portfolio: ${portfolioUrl}` : "",
      "",
      "Cover Letter:",
      coverLetter,
    ]
      .filter(Boolean)
      .join("\n"),
    attachments: [{ filename: resume.name, content: buf }],
  });

  return NextResponse.json({ ok: true });
}
