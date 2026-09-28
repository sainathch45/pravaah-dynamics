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
            className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.08em] text-[color:var(--color-ink-950)] no-underline"
            aria-label="Pravaah home"
          >
            <Mark className="h-6 w-6" />
            Pravaah
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
      <footer className="border-t border-[color:var(--color-ink-950)]/10">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-16 md:grid-cols-3 md:px-8 lg:px-12">
          <p className="max-w-md text-sm leading-6 text-[color:var(--color-ink-700)]">
            A small studio for growing businesses, built by an AI engineer and a customer-success specialist.
          </p>
          <nav aria-label="Footer explore" className="flex flex-col gap-2 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">Explore</span>
            {navigation.map((item) => (
              <TextLink key={item.href} href={item.href} className="w-fit text-[color:var(--color-ink-950)] no-underline">
                {item.label}
              </TextLink>
            ))}
          </nav>
          <div className="text-sm text-[color:var(--color-ink-700)]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em]">Based in</p>
            <p className="mt-2">Hyderabad, Telangana, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
