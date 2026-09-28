export function Mark({ className = 'h-7 w-7', title = 'Pravaah' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="-10 -12 152 182" role="img" aria-label={title} className={className} fill="none">
      <path d="M0 0H132M66 0V145" stroke="currentColor" strokeWidth="13" strokeLinecap="square" />
      <path
        d="M120 23C104 5 80 -5 53 0C23 5 12 23 15 44C18 65 37 74 70 79C100 84 117 94 116 112C115 135 93 149 65 149C40 149 19 139 7 122"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="square"
      />
      <path d="M0 170H150" stroke="var(--color-moss-700)" strokeWidth="3" />
      <circle cx="132" cy="0" r="6" fill="var(--color-copper-600)" />
    </svg>
  );
}
