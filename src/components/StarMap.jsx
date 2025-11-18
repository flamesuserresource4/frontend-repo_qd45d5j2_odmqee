import { useEffect, useMemo, useRef, useState } from "react";

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-[min(92vw,720px)] rounded-2xl border border-amber-400/20 bg-stone-950/90 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-amber-100">{title}</h3>
          <button onClick={onClose} className="rounded-md border border-amber-400/20 px-3 py-1 text-amber-200 hover:bg-amber-400/10">Close</button>
        </div>
        <div className="mt-4 text-amber-100/80 text-sm">{children}</div>
      </div>
    </div>
  );
}

export default function StarMap() {
  const [hover, setHover] = useState(null);
  const [selected, setSelected] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const outposts = useMemo(() => ([
    { id: 'tat', name: 'Tatooine Hub', system: 'Outer Rim', x: 18, y: 70, status: 'Primary operations base', services: ['Data Crawlers', 'Copilots', 'Field Repairs'] },
    { id: 'jak', name: 'Jakku Relay', system: 'Western Reaches', x: 35, y: 64, status: 'Relay & logistics', services: ['ETL Relays', 'Telemetry'] },
    { id: 'cor', name: 'Coruscant Node', system: 'Core Worlds', x: 76, y: 42, status: 'Enterprise deployments', services: ['Gov AI', 'Compliance', 'Observability'] },
    { id: 'bes', name: 'Bespin Station', system: 'Anoat Sector', x: 63, y: 48, status: 'R&D skunkworks', services: ['LLM Experiments', 'Evaluations'] },
    { id: 'nab', name: 'Naboo Garden', system: 'Mid Rim', x: 68, y: 58, status: 'Design partnerships', services: ['UX Research', 'Agents'] },
    { id: 'hot', name: 'Hoth Listening Post', system: 'Outer Rim', x: 56, y: 28, status: 'Cold storage + sims', services: ['Batch Jobs', 'Sim Labs'] },
  ]), []);

  useEffect(() => {
    const onMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const node = containerRef.current;
    node?.addEventListener('mousemove', onMove);
    return () => node?.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(234,179,8,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-100">Galactic star map</h2>
          <p className="mt-3 text-amber-100/70">Outposts, relays, and enterprise deployments across the galaxy. Hover to inspect; click for details.</p>
        </div>

        <div ref={containerRef} className="mt-10 relative w-full overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-b from-stone-900/60 to-stone-950/80 p-4">
          {/* Background grid/orbits */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <radialGradient id="glow" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(245,158,11,0.25)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="60" fill="url(#glow)" />
            <g stroke="rgba(253,230,138,0.08)" strokeWidth="0.2">
              {Array.from({ length: 8 }).map((_, i) => (
                <circle key={i} cx="50" cy="30" r={6 + i * 6} fill="none" />
              ))}
            </g>
            <g stroke="rgba(253,230,138,0.06)" strokeWidth="0.2">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={i} x1="0" y1={(i + 1) * 6} x2="100" y2={(i + 1) * 6} />
              ))}
            </g>
          </svg>

          {/* Stars */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {Array.from({ length: 150 }).map((_, i) => (
              <div key={i} className="absolute rounded-full bg-amber-200" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 1,
                height: 1,
                opacity: 0.5 + Math.random() * 0.5,
                filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.4))'
              }} />
            ))}
          </div>

          {/* Points */}
          <svg className="relative block w-full h-[min(70vw,520px)]" viewBox="0 0 100 60" preserveAspectRatio="none">
            {outposts.map((o) => (
              <g key={o.id}
                 transform={`translate(${o.x}, ${o.y})`}
                 onMouseEnter={() => setHover(o)}
                 onMouseLeave={() => setHover(null)}
                 onClick={() => setSelected(o)}
                 className="cursor-pointer">
                <circle r="1.8" fill="#f59e0b" />
                <circle r="4" fill="none" stroke="#f59e0b" strokeOpacity="0.4" />
                <circle r="7" fill="none" stroke="#f59e0b" strokeOpacity="0.18" />
              </g>
            ))}
          </svg>

          {/* Tooltip */}
          {hover && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-3 rounded-md border border-amber-400/30 bg-stone-950/90 px-3 py-1.5 text-xs text-amber-100 shadow"
              style={{ left: `${(hover.x / 100) * containerRef.current.clientWidth}px`, top: `${(hover.y / 60) * containerRef.current.clientHeight}px` }}
            >
              {hover.name}
            </div>
          )}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-amber-100/80"><span className="text-amber-200/90">System:</span> {selected.system}</p>
              <p className="text-amber-100/80 mt-2"><span className="text-amber-200/90">Role:</span> {selected.status}</p>
              <p className="text-amber-100/70 mt-2 text-sm">Services:</p>
              <ul className="mt-1 list-disc pl-5 text-amber-100/70 text-sm">
                {selected.services.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
            <div className="rounded-lg border border-amber-400/20 bg-stone-900/60 p-3">
              <p className="text-amber-100/70 text-sm">Sample transmission log</p>
              <div className="mt-2 rounded-md bg-black/40 p-3 font-mono text-xs text-amber-200/80">
                [{new Date().toISOString()}] Uplink established from {selected.name}. Routing telemetry...\nOK: 24 shards synchronized.\nOK: 3 droids deployed.
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
