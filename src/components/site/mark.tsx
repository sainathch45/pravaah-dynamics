export function Mark({ className = 'h-7 w-7', title = 'Pravaah' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label={title} className={className} fill="none">
      <path d="M8 36L20 22Q24 17 34 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="6" r="4" fill="var(--color-copper-600)" />
    </svg>
  );
}
