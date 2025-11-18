import { Sparkles } from "lucide-react";
import AnimatedDroids from "./AnimatedDroids";
import Sandcrawler from "./Sandcrawler";
import Starfield from "./Starfield";
import ProbeDroids from "./ProbeDroids";
import MegaSandcrawler from "./MegaSandcrawler";
import Jawas from "./Jawas";
import ShootingStars from "./ShootingStars";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brighter twin-suns sky with bold gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_-10%,rgba(251,191,36,0.30),transparent),radial-gradient(60%_50%_at_80%_0%,rgba(244,63,94,0.20),transparent),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(15,23,42,0.92))]" />

      {/* Stars + meteors */}
      <Starfield />
      <ShootingStars />

      {/* Interactive probe droids (follow cursor, click = alert/turbo) */}
      <ProbeDroids className="absolute inset-0" />

      {/* Ambient tiny droids layer (brighter) */}
      <AnimatedDroids className="absolute inset-0 mix-blend-screen opacity-90" />

      {/* Dunes */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#sand)" fillOpacity="0.8" d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,80C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <defs>
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Large sandcrawler on horizon */}
      <div className="pointer-events-none [animation:float_5s_ease-in-out_infinite]">
        <MegaSandcrawler />
      </div>

      {/* Nearby sandcrawler silhouette */}
      <div className="pointer-events-none">
        <div className="[animation:float_6s_ease-in-out_infinite]">
          <Sandcrawler />
        </div>
      </div>

      {/* Jawa march line with hover/click reactions */}
      <Jawas />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-400/20 px-3 py-1 text-amber-100 text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)]">
          <Sparkles className="h-4 w-4" /> Custom AI for every galaxy sector
        </div>

        <h1 className="mt-6 text-5xl sm:text-7xl font-black tracking-tight text-amber-50 drop-shadow-[0_0_35px_rgba(245,158,11,0.55)]">
          Jawas build louder, brighter, faster AI systems
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-amber-100/90 max-w-3xl mx-auto">
          Probes scanning, droids hovering, crawlers rolling — your mission control for custom AI.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-7 py-3.5 font-extrabold text-slate-900 shadow-lg hover:bg-amber-400 transition-transform hover:scale-[1.02]">Start a project</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-amber-300/60 bg-amber-400/20 px-7 py-3.5 font-bold text-amber-50 hover:bg-amber-400/30 transition">See capabilities</a>
        </div>
      </div>
    </section>
  );
}
