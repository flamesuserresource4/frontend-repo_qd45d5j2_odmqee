import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sand dune gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,191,36,0.20),transparent),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(15,23,42,0.9))]" />
      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.10),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.06),transparent_18%)]" />
      </div>

      {/* Jawa silhouettes / dunes */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#sand)" fillOpacity="0.5" d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,80C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <defs>
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-36 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-amber-200 text-sm">
          <Sparkles className="h-4 w-4" /> Custom AI for every galaxy sector
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-amber-100 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          Jawa-built AI systems for scrappy teams and massive empires
        </h1>

        <p className="mt-5 text-lg text-amber-100/80 max-w-2xl mx-auto">
          From droid copilots to data sandcrawlers — we design, build, and deploy production-grade AI tailored to your mission.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400 transition">Start a project</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-amber-400/30 bg-amber-500/10 px-6 py-3 font-semibold text-amber-100 hover:bg-amber-400/20 transition">See capabilities</a>
        </div>
      </div>
    </section>
  );
}
