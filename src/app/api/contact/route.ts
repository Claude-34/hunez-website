import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.errors[0]?.message ?? "Invalid form data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    if (process.env.FORMSPREE_ENDPOINT) {
      const formspreeResponse = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!formspreeResponse.ok) {
        return NextResponse.json(
          { error: "Failed to send enquiry" },
          { status: 502 },
        );
      }
    } else if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
          to: process.env.CONTACT_TO_EMAIL ?? "contact@humannetzero.co.uk",
          subject: `New enquiry from ${data.name}`,
          text: JSON.stringify(data, null, 2),
        }),
      });
    } else {
      console.log("[Contact form submission]", data);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
