export function FlowGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 480 480"
      className={className}
      fill="none"
    >
      <path
        className="draw-in"
        d="M40 400C160 400 160 260 240 210C300 172 340 120 360 60"
        stroke="var(--color-moss-700)"
        strokeOpacity="0.16"
        strokeWidth="2"
      />
      <path
        className="draw-in"
        style={{ animationDelay: '120ms' }}
        d="M40 340C140 340 150 230 230 180C290 144 330 96 350 40"
        stroke="var(--color-moss-700)"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        className="draw-in"
        style={{ animationDelay: '240ms' }}
        d="M40 280C120 280 140 200 220 150C280 116 320 72 340 20"
        stroke="var(--color-copper-600)"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
      <circle cx="342" cy="18" r="5" fill="var(--color-copper-600)" fillOpacity="0.7" />
    </svg>
  );
}
