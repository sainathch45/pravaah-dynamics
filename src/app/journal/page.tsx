import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';

export default function JournalPage() {
  return (
    <>
      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
        <SectionHeading eyebrow="Journal" as="h1" title="Ideas worth carrying forward." lead="The Pravaah Journal will share considered work on design, engineering, business, AI, and the systems behind meaningful momentum." />
        <div className="mt-12 max-w-3xl border-t border-[color:var(--color-ink-950)]/10 pt-6">
          <h2 className="text-2xl font-semibold text-[color:var(--color-ink-950)]">The first pieces are being developed with care.</h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--color-ink-700)]">
            We will publish when we have something useful to say, not simply something to post.
          </p>
          <p className="mt-6 text-sm font-semibold text-[color:var(--color-moss-700)] underline underline-offset-4">
            <a href="/conversation">Start a conversation</a>
          </p>
        </div>
      </PageSection>
      <ConversationBanner />
    </>
  );
}
