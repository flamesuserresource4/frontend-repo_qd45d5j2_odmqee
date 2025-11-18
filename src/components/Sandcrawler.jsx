import { useEffect, useRef } from "react";

export default function Sandcrawler({ className = "absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] h-[140px] opacity-90", progress = 0.2, depth = -20 }) {
  const groupRef = useRef(null);

  useEffect(() => {
    const g = groupRef.current;
    if (!g) return;
    g.style.transform = `translateY(${Math.sin(progress * Math.PI * 2) * 1.5}px)`;
  }, [progress]);

  const pathX = -40 + progress * 360;
  const pathY = 90 - Math.sin(progress * Math.PI * 2) * 8 - Math.sin(progress * Math.PI) * 6;

  return (
    <svg className={className} viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ transform: `translateZ(${depth}px)` }}>
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>
      <g ref={groupRef} transform={`translate(${pathX}, ${pathY - 90})`}>
        {/* Body */}
        <path d="M0 90 L110 30 L350 30 L400 90 L0 90 Z" fill="url(#hull)" stroke="#F59E0B" strokeOpacity="0.4"/>
        {/* Windows */}
        <g fill="#FDE68A">
          <rect x="60" y="52" width="12" height="6" rx="1" opacity="0.75"/>
          <rect x="80" y="50" width="10" height="6" rx="1" opacity="0.65"/>
          <rect x="100" y="48" width="12" height="6" rx="1" opacity="0.55"/>
          <rect x="300" y="48" width="16" height="6" rx="1" opacity="0.7"/>
        </g>
        {/* Tracks */}
        <g>
          <rect x="8" y="90" width="384" height="8" fill="#1F2937" opacity="0.7" />
          <circle cx="40" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
          <circle cx="110" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
          <circle cx="250" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
          <circle cx="330" cy="110" r="14" fill="#111827" stroke="#6B7280" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  );
}
