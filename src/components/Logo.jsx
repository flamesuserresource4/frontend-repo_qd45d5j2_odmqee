export default function Logo({ className = "w-9 h-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hood" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hood silhouette */}
      <path
        d="M8 40 C12 22, 24 8, 32 8 C40 8, 52 22, 56 40 C54 48, 46 56, 32 56 C18 56, 10 48, 8 40 Z"
        fill="url(#hood)"
        stroke="#F59E0B"
        strokeOpacity="0.4"
      />
      {/* Eyes */}
      <g filter="url(#glow)">
        <circle cx="26" cy="34" r="3.2" fill="#FDE68A" />
        <circle cx="38" cy="34" r="3.2" fill="#FDE68A" />
      </g>
    </svg>
  );
}
