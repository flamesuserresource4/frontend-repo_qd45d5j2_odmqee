import { useEffect, useRef } from "react";

// Mega crawler slowly tracks along a bezier dune path over time
export default function MegaSandcrawler({ className = "absolute bottom-8 right-4 w-[36rem] max-w-[80vw] drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]", progress = 0, depth = -40 }) {
  const groupRef = useRef(null);

  useEffect(() => {
    const g = groupRef.current;
    if (!g) return;
    // simple bob for 3D feel
    g.style.transform = `translateY(${Math.sin(progress * Math.PI * 2) * 2}px)`;
  }, [progress]);

  // Map progress to a dune-like path
  const pathX = 20 + progress * 560;
  const pathY = 150 - Math.sin(progress * Math.PI * 2) * 14 - (Math.sin(progress * Math.PI) * 10);

  return (
    <svg className={className} viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ transform: `translateZ(${depth}px)` }}>
      <defs>
        <linearGradient id="hullMega" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
      </defs>
      <g ref={groupRef} transform={`translate(${pathX}, ${pathY - 150})`}>
        <path d="M0 110 L160 0 L500 0 L600 110 L0 110 Z" fill="url(#hullMega)" stroke="#f59e0b" strokeOpacity="0.5"/>
        {/* windows */}
        <g fill="#fde68a">
          {Array.from({length:24}).map((_,i)=>{
            const x = 50 + i*18;
            const y = 24 + (i%3)*10;
            return <rect key={i} x={x} y={y} width="10" height="6" rx="1" opacity={0.5 + (i%3)*0.2}/>;
          })}
        </g>
        {/* tracks */}
        <g>
          <rect x="16" y="110" width="560" height="10" fill="#111827" opacity="0.8"/>
          { [90,170,260,340,430,510].map((cx,i)=> (
            <g key={i}>
              <circle cx={cx} cy="136" r="18" fill="#0b1220" stroke="#9ca3af" strokeWidth="3"/>
              <circle cx={cx} cy="136" r="6" fill="#f59e0b" opacity="0.8"/>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
