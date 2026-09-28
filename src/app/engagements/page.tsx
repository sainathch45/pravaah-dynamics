import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { Card } from '@/components/ui/card';

const engagements = [
  {
    id: 'foundations',
    label: 'Foundations',
    detail:
      'For businesses that need a clearer, stronger digital base. This may include brand direction, a website, search fundamentals, hosting, analytics, and performance work that gives the next stage somewhere dependable to stand.',
    cta: 'Discuss Foundations',
  },
  {
    id: 'experiences',
    label: 'Experiences',
    detail:
      'For businesses that need people to understand, trust, and act with more confidence. This may include journey design, websites, product interfaces, content hierarchy, and conversion-focused improvements.',
    cta: 'Discuss Experiences',
  },
  {
    id: 'systems',
    label: 'Systems',
    detail:
      'For businesses that need their operations and digital tools to work with less friction. This may include software, AI integrations, automation, dashboards, and custom systems built around a real workflow.',
    cta: 'Discuss Systems',
  },
];

export default function EngagementsPage() {
  return (
    <>
      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
        <SectionHeading eyebrow="Engagements" as="h1" title="Different problems need different kinds of progress." lead="Pravaah does not force a business into a package. These engagements give a starting shape to the work." />
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--color-ink-700)]">
          Every engagement begins with discovery. The right scope follows the context.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagements.map((item) => (
            <Card key={item.id} id={item.id} className="flex flex-col">
              <h2 className="text-2xl font-semibold text-[color:var(--color-ink-950)]">{item.label}</h2>
              <p className="mt-3 flex-1 text-base leading-7 text-[color:var(--color-ink-700)]">{item.detail}</p>
              <a
                href="/conversation"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-moss-700)] no-underline"
              >
                {item.cta}
                <span aria-hidden="true">→</span>
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-base leading-8 text-[color:var(--color-ink-700)]">
          The work is shaped around the problem, the people involved, and the level of change the business can responsibly sustain.
        </p>
      </PageSection>
      <ConversationBanner />
    </>
  );
}
