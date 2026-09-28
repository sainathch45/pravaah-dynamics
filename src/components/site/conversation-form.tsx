'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ConversationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('Sending inquiry');

    const form = event.currentTarget;
    const body = new FormData(form);

    const response = await fetch('/api/inquiry', {
      method: 'POST',
      body,
    });

    const data = (await response.json()) as { ok?: boolean; error?: string };

    if (!response.ok || !data.ok) {
      setStatus('error');
      setMessage(data.error ?? 'Your inquiry could not be sent. Please try again or return later.');
      return;
    }

    setStatus('success');
    setMessage('Your inquiry has been received. A founder will review it and respond with a thoughtful next step.');
    form.reset();
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-[color:var(--color-ink-950)]">
          Your name
          <input
            name="name"
            required
            className="w-full rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 bg-white px-4 py-3 text-base font-normal text-[color:var(--color-ink-950)] outline-none focus:border-[color:var(--color-moss-700)] focus:ring-4 focus:ring-[color:var(--color-moss-700)]/20"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-[color:var(--color-ink-950)]">
          Work email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 bg-white px-4 py-3 text-base font-normal text-[color:var(--color-ink-950)] outline-none focus:border-[color:var(--color-moss-700)] focus:ring-4 focus:ring-[color:var(--color-moss-700)]/20"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-[color:var(--color-ink-950)]">
        Company or organisation
        <input
          name="company"
          required
          className="w-full rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 bg-white px-4 py-3 text-base font-normal text-[color:var(--color-ink-950)] outline-none focus:border-[color:var(--color-moss-700)] focus:ring-4 focus:ring-[color:var(--color-moss-700)]/20"
        />
      </label>
      <label className="space-y-2 text-sm font-semibold text-[color:var(--color-ink-950)]">
        What are you working through?
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 bg-white px-4 py-3 text-base font-normal text-[color:var(--color-ink-950)] outline-none focus:border-[color:var(--color-moss-700)] focus:ring-4 focus:ring-[color:var(--color-moss-700)]/20"
        />
        <span className="block text-sm font-normal text-[color:var(--color-ink-700)]">A few sentences are enough.</span>
      </label>
      <label className="space-y-2 text-sm font-semibold text-[color:var(--color-ink-950)]">
        Which area feels closest?
        <select
          name="area"
          required
          className="w-full rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 bg-white px-4 py-3 text-base font-normal text-[color:var(--color-ink-950)] outline-none focus:border-[color:var(--color-moss-700)] focus:ring-4 focus:ring-[color:var(--color-moss-700)]/20"
        >
          <option value="">Choose an area</option>
          <option value="foundations">Foundations</option>
          <option value="experiences">Experiences</option>
          <option value="systems">Systems</option>
          <option value="unsure">I am not sure yet</option>
        </select>
      </label>
      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] bg-[color:var(--color-moss-700)] px-5 text-sm font-semibold text-[color:var(--color-paper-50)] transition-colors hover:bg-[color:var(--color-ink-950)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)] disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending inquiry' : 'Send inquiry'}
        </button>
      </div>
      {status === 'success' ? (
        <p className="rounded-[var(--radius-control)] border border-[color:var(--color-moss-700)]/40 bg-[color:var(--color-moss-100)] px-4 py-3 text-sm text-[color:var(--color-ink-950)]" aria-live="polite">
          Thank you for sharing the context. {message}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="rounded-[var(--radius-control)] border border-[color:var(--color-error-700)]/40 bg-white px-4 py-3 text-sm text-[color:var(--color-error-700)]" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
