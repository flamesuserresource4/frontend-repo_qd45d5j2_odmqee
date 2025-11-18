export default function MegaSandcrawler({ className = "absolute bottom-8 right-4 w-[36rem] max-w-[80vw] drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]" }) {
  return (
    <svg className={className} viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="hullMega" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
      </defs>
      <path d="M20 150 L180 40 L520 40 L620 150 L20 150 Z" fill="url(#hullMega)" stroke="#f59e0b" strokeOpacity="0.5"/>
      {/* light windows */}
      <g fill="#fde68a">
        {Array.from({length:24}).map((_,i)=>{
          const x = 70 + i*18;
          const y = 70 + (i%3)*10;
          return <rect key={i} x={x} y={y} width="10" height="6" rx="1" opacity={0.5 + (i%3)*0.2}/>;
        })}
      </g>
      {/* tracks */}
      <g>
        <rect x="36" y="150" width="560" height="10" fill="#111827" opacity="0.8"/>
        { [90,170,260,340,430,510].map((cx,i)=> (
          <g key={i}>
            <circle cx={cx} cy="176" r="18" fill="#0b1220" stroke="#9ca3af" strokeWidth="3"/>
            <circle cx={cx} cy="176" r="6" fill="#f59e0b" opacity="0.8"/>
          </g>
        ))}
      </g>
    </svg>
  );
}
