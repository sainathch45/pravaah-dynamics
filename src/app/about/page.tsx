import type { Metadata } from 'next';
import { ConversationBanner } from '@/components/site/conversation-banner';
import { Mark } from '@/components/site/mark';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description: 'Pravaah is built by an AI engineer and a customer-success specialist — not a portfolio, a discipline.',
  path: '/about',
});

const founders = [
  {
    name: 'Sainath Chakravadhanula',
    role: 'AI Engineer',
    bio: 'Builds production multi-agent systems and developer automation at Thomson Reuters — MCP integrations, AI-agentic workflows, backend systems on AWS and Snowflake. Studying Data Science at IIT Madras.',
  },
  {
    name: 'Tanveer Krishna Kistam',
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

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="border-t border-[color:var(--color-ink-950)]/10 pt-6">
              <Mark className="h-9 w-9 text-[color:var(--color-ink-950)]" title={founder.name} />
              <h2 className="mt-5 text-xl font-semibold text-[color:var(--color-ink-950)]">{founder.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-moss-700)]">
                {founder.role}
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--color-ink-700)]">{founder.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-3xl border-t border-[color:var(--color-ink-950)]/10 pt-8">
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
