import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { SiteShell } from '@/components/site/site-shell';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
