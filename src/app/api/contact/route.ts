import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { contactSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalidRequest" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey || !from) {
    return NextResponse.json(
      { ok: false, error: "notConfigured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, organization, collaborationType, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Mountain Fauna Lover collaboration — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        `Collaboration type: ${collaborationType || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact delivery failed", error);
      return NextResponse.json(
        { ok: false, error: "deliveryFailed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route failed", error);
    return NextResponse.json(
      { ok: false, error: "deliveryFailed" },
      { status: 500 },
    );
  }
}
