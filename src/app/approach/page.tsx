import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';

const steps = [
  {
    title: 'Understand',
    body: 'We learn how the business works, who it serves, what is changing, and where momentum is being lost.',
  },
  {
    title: 'Shape',
    body: 'We turn the real problem into a clear direction, with honest trade-offs and a practical plan.',
  },
  {
    title: 'Make',
    body: 'We design and build with regular review, visible progress, and care for the details that affect trust.',
  },
  {
    title: 'Sustain',
    body: 'We hand over work clearly, support what needs care, and leave the system easier to grow.',
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
        <SectionHeading eyebrow="Approach" as="h1" title="Good work begins with a better question." lead="Pravaah works with businesses to understand the situation before deciding what to make." />
        <div className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <article key={step.title} className="grid gap-4 border-t border-[color:var(--color-ink-950)]/10 pt-5 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">0{index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[color:var(--color-ink-950)]">{step.title}</h2>
              </div>
              <div className="lg:col-span-9">
                <p className="text-base leading-8 text-[color:var(--color-ink-700)]">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 max-w-3xl border-t border-[color:var(--color-ink-950)]/10 pt-8">
          <h2 className="text-3xl font-[family:var(--font-display)] leading-tight text-[color:var(--color-ink-950)]">Clarity is part of the work.</h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--color-ink-700)]">
            We explain why we recommend a direction, what alternatives we considered, and what each choice means for the business. A good decision should remain understandable after the meeting ends.
          </p>
        </div>
      </PageSection>
      <ConversationBanner />
    </>
  );
}
