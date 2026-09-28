import { ConversationBanner } from '@/components/site/conversation-banner';
import { PageSection } from '@/components/site/page-section';
import { SectionHeading } from '@/components/site/section-heading';
import { homeEngagements, homePrinciples, homeTensions } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12 lg:py-28" id="potential">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="01 / Potential"
            as="h1"
            title="Every business begins with potential."
            lead="But potential needs a clear path to become momentum."
          />
          <p className="max-w-[680px] text-lg leading-8 text-[color:var(--color-ink-700)]">
            Pravaah helps growing businesses turn an unclear digital presence into something people trust and actually use.
          </p>
          <a
            href="#craft"
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] border border-[color:var(--color-ink-950)]/20 px-5 text-sm font-semibold text-[color:var(--color-ink-950)] transition-colors hover:bg-[color:var(--color-paper-100)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)]"
          >
            Explore the chapters
          </a>
          <div className="grid gap-4 pt-8 md:grid-cols-3">
            {homeTensions.map((item) => (
              <div key={item.title} className="border-t border-[color:var(--color-ink-950)]/10 pt-4">
                <h2 className="text-sm font-semibold text-[color:var(--color-ink-950)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-ink-700)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="craft">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="02 / Craft"
              title="Momentum needs care."
              lead="Thoughtful work is not decoration. It is the discipline of making every decision earn its place."
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-ink-700)]">
              We build with the same discipline used for production AI systems, and the same care for whether people keep using what we make.
            </p>
          </div>
          <div className="lg:col-span-5">
            <ol className="space-y-4">
              {homePrinciples.map((item) => (
                <li key={item.label} className="border-t border-[color:var(--color-ink-950)]/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">{item.label}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-ink-950)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-ink-700)]">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="momentum">
        <SectionHeading
          eyebrow="03 / Momentum"
          title="Clear direction creates movement."
          lead="The right next step depends on where your business is now."
        />
        <div className="mt-10 space-y-6">
          {homeEngagements.map((item) => (
            <article key={item.label} className="grid gap-4 border-t border-[color:var(--color-ink-950)]/10 pt-5 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-3">
                <h3 className="text-xl font-semibold text-[color:var(--color-ink-950)]">{item.label}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-sm leading-7 text-[color:var(--color-ink-700)]">{item.body}</p>
              </div>
              <div className="lg:col-span-3">
                <a href={item.href} className="inline-flex text-sm font-semibold text-[color:var(--color-moss-700)] underline underline-offset-4">
                  Explore {item.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="systems">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="04 / Systems"
              title="Good systems make growth easier to sustain."
              lead="A thoughtful experience needs dependable foundations behind it."
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-ink-700)]">
              We design what people see and the systems behind it together, so growth doesn&apos;t outpace what&apos;s holding it up.
            </p>
            <p className="mt-6">
              <a href="/engagements#systems" className="inline-flex text-sm font-semibold text-[color:var(--color-moss-700)] underline underline-offset-4">
                Explore Systems
              </a>
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-7 text-[color:var(--color-ink-700)]">
              Strategy shapes the experience. The experience depends on systems that hold up.
            </p>
          </div>
        </div>
      </PageSection>

      <section className="bg-[color:var(--color-ink-950)] text-[color:var(--color-paper-50)]" id="conversation">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-paper-50)]/70">05 / Conversation</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]">
                Start where you are.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--color-paper-50)]/80">
                You do not need a finished brief to begin a useful conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/conversation"
                  className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] bg-[color:var(--color-moss-700)] px-5 text-sm font-semibold text-[color:var(--color-paper-50)] transition-colors hover:bg-[color:var(--color-paper-50)] hover:text-[color:var(--color-ink-950)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-paper-50)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-ink-950)]"
                >
                  Start a conversation
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-7 text-[color:var(--color-paper-50)]/75">
                Tell us what is changing, what feels difficult, and what you hope to make possible. We will begin by understanding the problem.
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-paper-50)]/60">
                A founder will review your note and respond with a thoughtful next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversationBanner />
    </>
  );
}
