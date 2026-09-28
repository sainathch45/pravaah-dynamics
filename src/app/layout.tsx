import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/site-shell';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pravaah',
    template: '%s — Pravaah',
  },
  description: 'A small studio for growing businesses, built by an AI engineer and a customer-success specialist. Practical work, built to actually get used.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
