import { ButtonLink } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

export function ConversationBanner() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ink-950)] text-[color:var(--color-paper-50)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(80% 120% at 85% 0%, rgba(165, 96, 58, 0.16), transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-paper-50)]/70">Conversation</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
              Start where you are.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--color-paper-50)]/80">
              You do not need a finished brief to begin a useful conversation.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/conversation"
                variant="primary"
                className="hover:bg-[color:var(--color-paper-50)] hover:text-[color:var(--color-ink-950)]"
              >
                Start a conversation
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-7 text-[color:var(--color-paper-50)]/75">
              Tell us what is changing, what feels difficult, and what you hope to make possible. We will begin by understanding the problem.
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-paper-50)]/60">
              A founder will review your note and respond with a thoughtful next step.
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-paper-50)]/60">
              <Link href="/conversation" className="text-[color:var(--color-paper-50)]">Open the inquiry form</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
