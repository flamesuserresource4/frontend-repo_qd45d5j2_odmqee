export default function Sandcrawler({ className = "absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] h-[140px] opacity-80" }) {
  return (
    <svg className={className} viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>
      {/* Body */}
      <path d="M10 90 L120 30 L360 30 L410 90 L10 90 Z" fill="url(#hull)" stroke="#F59E0B" strokeOpacity="0.3"/>
      {/* Windows */}
      <g fill="#FDE68A">
        <rect x="70" y="52" width="12" height="6" rx="1" opacity="0.7"/>
        <rect x="90" y="50" width="10" height="6" rx="1" opacity="0.6"/>
        <rect x="110" y="48" width="12" height="6" rx="1" opacity="0.5"/>
        <rect x="320" y="48" width="16" height="6" rx="1" opacity="0.65"/>
      </g>
      {/* Tracks */}
      <g>
        <rect x="18" y="90" width="384" height="8" fill="#1F2937" opacity="0.6" />
        <circle cx="50" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
        <circle cx="120" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
        <circle cx="260" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
        <circle cx="340" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
      </g>
    </svg>
  );
}
