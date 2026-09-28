import type { Metadata } from 'next';
import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { Card } from '@/components/ui/card';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description: 'Pravaah is built by an AI engineer and a customer-success specialist — not a portfolio, a discipline.',
  path: '/about',
});

const founders = [
  {
    name: 'Sainath Chakravadhanula',
    initials: 'SC',
    role: 'AI Engineer',
    bio: 'Builds production multi-agent systems and developer automation at Thomson Reuters — MCP integrations, AI-agentic workflows, backend systems on AWS and Snowflake. Studying Data Science at IIT Madras.',
  },
  {
    name: 'Tanveer Krishna Kistam',
    initials: 'TK',
    role: 'Customer Success',
    bio: 'Works customer success at Optmyzr, where the job is making sure a product keeps earning its place after the sale. Brings the client instinct: what makes people actually keep using what you build for them.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="About"
          as="h1"
          title="Built by two people, not a portfolio."
          lead="Pravaah is new. What isn't new is the discipline behind it."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <Card key={founder.name}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-ink-950)] font-[family:var(--font-display)] text-base text-[color:var(--color-paper-50)]">
                {founder.initials}
              </span>
              <h2 className="mt-5 text-xl font-semibold text-[color:var(--color-ink-950)]">{founder.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-moss-700)]">
                {founder.role}
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--color-ink-700)]">{founder.bio}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl rounded-[var(--radius-card)] bg-[color:var(--color-paper-100)] p-8">
          <p className="text-lg leading-8 text-[color:var(--color-ink-700)]">
            We don&apos;t dress up &ldquo;AI-powered&rdquo; as a pitch. One of us builds production AI systems for a
            living. The other makes sure what gets built actually gets used. That&apos;s the standard we hold every
            engagement to.
          </p>
        </div>
      </PageSection>
      <ConversationBanner />
    </>
  );
}
