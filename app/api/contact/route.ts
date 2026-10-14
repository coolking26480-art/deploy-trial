import { Resend } from "resend";

import { validateContactSubmission } from "../../../lib/contact-validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const validation = validateContactSubmission(body);
  if (!validation.data) {
    return Response.json(
      { error: "Please correct the highlighted fields.", errors: validation.errors },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error(
      "Contact email is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
    );
    return Response.json(
      { error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: validation.data.email,
      subject: "New website contact message",
      text: [
        `Name: ${validation.data.name}`,
        `Email: ${validation.data.email}`,
        ...(validation.data.subject
          ? [`Subject: ${validation.data.subject}`]
          : []),
        "",
        validation.data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Failed to send contact form email through Resend.", error);
      return Response.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form email request failed.", error);
    return Response.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 502 },
    );
  }
}
