export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: HeadingTag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <div className="space-y-5">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink-950)]/10 bg-[color:var(--color-paper-100)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-moss-700)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-copper-600)]" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag className="max-w-4xl font-[family:var(--font-display)] text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.01em] text-[color:var(--color-ink-950)]">
        {title}
      </HeadingTag>
      {lead ? <p className="max-w-3xl text-lg leading-8 text-[color:var(--color-ink-700)]">{lead}</p> : null}
    </div>
  );
}
