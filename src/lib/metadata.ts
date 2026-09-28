import type { Metadata } from 'next';
import { siteConfig } from './site';

export function createMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}
