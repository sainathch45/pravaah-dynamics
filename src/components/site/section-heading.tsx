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
    <div className="space-y-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-700)]">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="max-w-4xl font-[family:var(--font-display)] text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] text-[color:var(--color-ink-950)]">
        {title}
      </HeadingTag>
      {lead ? <p className="max-w-3xl text-lg leading-8 text-[color:var(--color-ink-700)]">{lead}</p> : null}
    </div>
  );
}
