import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';

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
        <div className="mt-12 space-y-8">
          {engagements.map((item) => (
            <article key={item.id} id={item.id} className="grid gap-4 border-t border-[color:var(--color-ink-950)]/10 pt-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-semibold text-[color:var(--color-ink-950)]">{item.label}</h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-8 text-[color:var(--color-ink-700)]">{item.detail}</p>
              </div>
              <div className="lg:col-span-2">
                <a href="/conversation" className="inline-flex text-sm font-semibold text-[color:var(--color-moss-700)] underline underline-offset-4">
                  {item.cta}
                </a>
              </div>
            </article>
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
