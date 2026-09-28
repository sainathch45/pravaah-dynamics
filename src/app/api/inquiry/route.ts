import { NextResponse } from 'next/server';
import { validateInquiryPayload } from '@/lib/inquiry';

const RESEND_API_URL = 'https://api.resend.com/emails';

function htmlEmailBody(input: { name: string; email: string; company: string; area: string; message: string }) {
  return `
    <h1>New Pravaah inquiry</h1>
    <p><strong>Name:</strong> ${input.name}</p>
    <p><strong>Email:</strong> ${input.email}</p>
    <p><strong>Company:</strong> ${input.company}</p>
    <p><strong>Area:</strong> ${input.area}</p>
    <p><strong>Message:</strong></p>
    <p>${input.message.replace(/\n/g, '<br />')}</p>
  `;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const honeypot = String(formData.get('companyWebsite') ?? '');
  if (honeypot.trim()) {
    return NextResponse.json({ ok: true });
  }

  const validation = validateInquiryPayload({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
    area: formData.get('area'),
  });

  if (!validation.valid) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Inquiry delivery is temporarily unavailable. Please try again or return later.',
      },
      { status: 503 },
    );
  }

  const payload = validation.data;

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New Pravaah inquiry: ${payload.company}`,
      reply_to: payload.email,
      html: htmlEmailBody(payload),
      text: [
        'New Pravaah inquiry',
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company}`,
        `Area: ${payload.area}`,
        'Message:',
        payload.message,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Your inquiry could not be sent. Please try again or return later.',
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
