import type { ReactNode } from 'react';
import Link from 'next/link';
import { Link as TextLink } from '@/components/ui/link';
import { Mark } from '@/components/site/mark';
import { MobileMenu } from '@/components/site/mobile-menu';

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/approach', label: 'Approach' },
  { href: '/engagements', label: 'Engagements' },
  { href: '/journal', label: 'Journal' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-paper-50)] text-[color:var(--color-ink-950)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-[color:var(--color-paper-50)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[color:var(--color-ink-950)] focus:outline-none focus:ring-4 focus:ring-[color:var(--color-moss-700)]"
      >
        Skip to content
      </a>
      <header className="border-b border-[color:var(--color-ink-950)]/10 bg-[color:var(--color-paper-50)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-base font-semibold tracking-[0.02em] text-[color:var(--color-ink-950)] no-underline"
            aria-label="Pravaah home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[color:var(--color-ink-950)]">
              <Mark className="h-5 w-5 text-[color:var(--color-paper-50)]" />
            </span>
            <span className="font-[family:var(--font-display)] text-lg">Pravaah</span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-5">
            <div className="hidden items-center gap-5 md:flex">
              {navigation.map((item) => (
                <TextLink key={item.href} href={item.href} className="text-sm font-semibold text-[color:var(--color-ink-700)] no-underline">
                  {item.label}
                </TextLink>
              ))}
            </div>
            <Link
              href="/conversation"
              className="hidden min-h-12 items-center justify-center rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 px-5 text-sm font-semibold text-[color:var(--color-ink-950)] transition-colors hover:bg-[color:var(--color-paper-100)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)] md:inline-flex"
            >
              Start a conversation
            </Link>
            <MobileMenu />
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="border-t border-[color:var(--color-ink-950)]/10 bg-[color:var(--color-paper-100)]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[color:var(--color-ink-950)]">
                  <Mark className="h-5 w-5 text-[color:var(--color-paper-50)]" />
                </span>
                <span className="font-[family:var(--font-display)] text-lg text-[color:var(--color-ink-950)]">Pravaah</span>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[color:var(--color-ink-700)]">
                A small studio for growing businesses, built by an AI engineer and a customer-success specialist.
              </p>
            </div>
            <nav aria-label="Footer explore" className="flex flex-col gap-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">Explore</span>
              {navigation.map((item) => (
                <TextLink key={item.href} href={item.href} className="w-fit text-[color:var(--color-ink-950)] no-underline">
                  {item.label}
                </TextLink>
              ))}
            </nav>
            <div className="text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">Based in</span>
              <p className="mt-3 text-[color:var(--color-ink-950)]">Hyderabad, Telangana, India</p>
              <p className="mt-4">
                <TextLink href="/conversation" className="text-[color:var(--color-moss-700)] no-underline">
                  Start a conversation →
                </TextLink>
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-[color:var(--color-ink-950)]/10 pt-6 text-xs text-[color:var(--color-ink-700)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Pravaah Dynamics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
