'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Route } from 'next';

const navItems = [
  { href: '/about' as Route, label: 'About' },
  { href: '/approach' as Route, label: 'Approach' },
  { href: '/engagements' as Route, label: 'Engagements' },
  { href: '/journal' as Route, label: 'Journal' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!open && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 px-4 text-sm font-semibold text-[color:var(--color-ink-950)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)] md:hidden"
      >
        Menu
      </button>
      {open ? (
        <div id="mobile-menu" role="dialog" aria-label="Navigation menu" className="fixed inset-0 z-50 bg-[color:var(--color-paper-50)] px-5 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold tracking-[0.08em] text-[color:var(--color-ink-950)] no-underline" onClick={() => setOpen(false)}>
              Pravaah
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 px-4 text-sm font-semibold text-[color:var(--color-ink-950)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)]"
            >
              Close menu
            </button>
          </div>
          <nav aria-label="Mobile primary" className="mt-10 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-[family:var(--font-display)] leading-tight text-[color:var(--color-ink-950)] no-underline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/conversation"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] bg-[color:var(--color-moss-700)] px-5 text-sm font-semibold text-[color:var(--color-paper-50)] no-underline"
            >
              Start a conversation
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
