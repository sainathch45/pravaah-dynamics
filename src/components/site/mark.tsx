export function Mark({ className = 'h-7 w-auto', title = 'Pravaah' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="-12 -8 250 160" role="img" aria-label={title} className={className} fill="none">
      <path
        d="M0 122V54C0 16 27 0 57 0C87 0 114 17 114 54V122M27 122V57C27 38 40 29 57 29C74 29 87 38 87 57V122"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M112 122V54C112 16 139 0 169 0C199 0 226 17 226 54V122M139 122V57C139 38 152 29 169 29C186 29 199 38 199 57V122"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M-8 141H235" stroke="var(--color-moss-700)" strokeWidth="3" />
      <path d="M-8 141H57" stroke="var(--color-copper-600)" strokeWidth="6" />
    </svg>
  );
}
