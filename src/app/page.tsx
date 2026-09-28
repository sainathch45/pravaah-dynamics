import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ConversationBanner } from '@/components/site/conversation-banner';
import { FlowGraphic } from '@/components/site/flow-graphic';
import { PageSection } from '@/components/site/page-section';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { homeAudiences, homeEngagements, homePrinciples, homeTensions } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <PageSection className="relative overflow-hidden" id="potential">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <FlowGraphic className="pointer-events-none absolute -right-16 -top-16 hidden h-[420px] w-[420px] md:block lg:h-[520px] lg:w-[520px]" />
        <div className="relative mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl space-y-8">
            <SectionHeading
              eyebrow="01 / Potential"
              as="h1"
              title="Every business begins with potential."
              lead="But potential needs a clear path to become momentum."
            />
            <p className="max-w-[620px] text-lg leading-8 text-[color:var(--color-ink-700)]">
              Pravaah helps growing businesses turn an unclear digital presence into something people trust and actually use.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/conversation" variant="primary">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="#craft" variant="secondary">
                See how we work
              </ButtonLink>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {homeTensions.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Card>
                  <h2 className="text-base font-semibold text-[color:var(--color-ink-950)]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-ink-700)]">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="recognize">
        <SectionHeading
          eyebrow="02 / Sound familiar?"
          title="You don't need the vocabulary. You just need it to work."
          lead="Pravaah is built for whoever's actually running the business, not just the people who speak in tech stacks."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homeAudiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-[color:var(--color-ink-950)]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[color:var(--color-ink-700)]">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="craft">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="03 / Craft"
              title="Momentum needs care."
              lead="Thoughtful work is not decoration. It is the discipline of making every decision earn its place."
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-ink-700)]">
              We build with the same discipline used for production AI systems, and the same care for whether people keep using what we make.
            </p>
          </div>
          <div className="lg:col-span-5">
            <ol className="space-y-4">
              {homePrinciples.map((item, index) => (
                <Reveal key={item.label} as="li" delay={index * 90}>
                  <Card className="flex items-start gap-4 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-moss-100)] text-xs font-semibold text-[color:var(--color-moss-700)]">
                      {item.label}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[color:var(--color-ink-950)]">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-[color:var(--color-ink-700)]">{item.body}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-[color:var(--color-paper-100)]" id="momentum">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12">
          <SectionHeading
            eyebrow="04 / Momentum"
            title="Clear direction creates movement."
            lead="The right next step depends on where your business is now."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homeEngagements.map((item, index) => (
              <Reveal key={item.label} delay={index * 90}>
                <Card className="flex h-full flex-col bg-[color:var(--color-paper-50)]">
                  <h3 className="text-xl font-semibold text-[color:var(--color-ink-950)]">{item.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--color-ink-700)]">{item.body}</p>
                  <a
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-moss-700)] no-underline"
                  >
                    Explore {item.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 lg:px-12" id="systems">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="05 / Systems"
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
            <Card className="bg-[color:var(--color-paper-100)] shadow-none">
              <p className="text-sm leading-7 text-[color:var(--color-ink-700)]">
                Strategy shapes the experience. The experience depends on systems that hold up.
              </p>
            </Card>
          </div>
        </div>
      </PageSection>

      <ConversationBanner />
    </>
  );
}
