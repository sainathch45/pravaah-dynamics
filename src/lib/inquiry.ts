const AREAS = ['foundations', 'experiences', 'systems', 'unsure'] as const;

export type InquiryArea = (typeof AREAS)[number];

export interface InquiryPayload {
  name: string;
  email: string;
  company: string;
  message: string;
  area: InquiryArea;
}

export function validateInquiryPayload(input: Record<string, unknown>): { valid: true; data: InquiryPayload } | { valid: false; error: string } {
  const name = String(input.name ?? '').trim();
  const email = String(input.email ?? '').trim();
  const company = String(input.company ?? '').trim();
  const message = String(input.message ?? '').trim();
  const area = String(input.area ?? '').trim().toLowerCase();

  if (!name || name.length > 120) {
    return { valid: false, error: 'Enter your name so we know what to call you.' };
  }

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Enter a valid work email so we can reply.' };
  }

  if (!company || company.length > 160) {
    return { valid: false, error: 'Enter your company or organisation.' };
  }

  if (!message || message.length > 4000) {
    return { valid: false, error: 'Tell us a little about what you are working through.' };
  }

  if (!AREAS.includes(area as InquiryArea)) {
    return { valid: false, error: 'Choose the area that feels closest, or select “I am not sure yet.”' };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      company,
      message,
      area: area as InquiryArea,
    },
  };
}
