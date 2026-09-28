import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { ConversationForm } from '@/components/site/conversation-form';

export default function ConversationPage() {
  return (
    <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
      <SectionHeading eyebrow="Conversation" as="h1" title="Tell us what is moving." lead="Share a little context. You do not need to have the answer before we talk." />
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="space-y-4 text-base leading-8 text-[color:var(--color-ink-700)]">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">A useful first note can include:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>What your business is trying to achieve.</li>
              <li>What feels unclear, slow, or difficult.</li>
              <li>Who needs to be involved in the next step.</li>
            </ul>
            <div className="pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">What happens next</p>
              <p className="mt-2">A founder reviews every inquiry. If there is a useful fit, we will suggest a thoughtful next conversation.</p>
            </div>
          </div>
        </aside>
        <div className="lg:col-span-8">
          <div className="rounded-[var(--radius-card)] border border-[color:var(--color-ink-950)]/8 bg-[color:var(--color-paper-50)] p-6 shadow-[var(--shadow-card)] md:p-8">
            <ConversationForm />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
