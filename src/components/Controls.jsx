import { Zap, Gauge, MousePointerClick } from "lucide-react";

export default function Controls({ onToggleTurbo, onBurst, onReduceMotion }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={onToggleTurbo}
        className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-slate-900 font-semibold shadow hover:bg-amber-400"
      >
        <Zap className="w-4 h-4"/> Turbo
      </button>
      <button
        onClick={onBurst}
        className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-3 py-2 text-white font-semibold shadow hover:bg-sky-400"
      >
        <MousePointerClick className="w-4 h-4"/> Burst
      </button>
      <button
        onClick={onReduceMotion}
        className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-2 text-amber-100 font-semibold shadow ring-1 ring-white/10 hover:bg-slate-700/80"
      >
        <Gauge className="w-4 h-4"/> Reduce motion
      </button>
    </div>
  );
}
}