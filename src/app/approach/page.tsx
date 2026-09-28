import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { Card } from '@/components/ui/card';

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
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-moss-100)] text-xs font-semibold text-[color:var(--color-moss-700)]">
                0{index + 1}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-ink-950)]">{step.title}</h2>
              <p className="mt-2 text-base leading-7 text-[color:var(--color-ink-700)]">{step.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 max-w-3xl rounded-[var(--radius-card)] bg-[color:var(--color-paper-100)] p-8">
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
