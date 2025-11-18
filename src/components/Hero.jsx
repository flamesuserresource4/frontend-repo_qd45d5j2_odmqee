import { Sparkles } from "lucide-react";
import AnimatedDroids from "./AnimatedDroids";
import Sandcrawler from "./Sandcrawler";
import Starfield from "./Starfield";
import ProbeDroids from "./ProbeDroids";
import MegaSandcrawler from "./MegaSandcrawler";
import Jawas from "./Jawas";
import ShootingStars from "./ShootingStars";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [t, setT] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });

    let start;
    const loop = (ts) => {
      if (start === undefined) start = ts;
      const elapsed = ts - start;
      // progress loops every 45s for mega, 30s for near crawler
      setT(elapsed / 1000);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // computed progress values
  const megaProgress = ((t / 45) % 1 + 1) % 1;
  const nearProgress = ((t / 30) % 1 + 1) % 1;

  return (
    <section className="relative overflow-hidden">
      {/* Brighter sandy sky with twin-sun heat and magenta fringe */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_-10%,rgba(251,191,36,0.35),transparent),radial-gradient(60%_50%_at_80%_0%,rgba(244,63,94,0.25),transparent),linear-gradient(to_bottom,rgba(23,23,23,1),rgba(30,27,20,0.96))]" />

      {/* Distant starfield parallax */}
      <Starfield scrollY={scrollY} depth={-180} />
      <ShootingStars scrollY={scrollY} depth={-140} />

      {/* Interactive probe droids (follow cursor, click = alert/turbo) */}
      <ProbeDroids className="absolute inset-0" />

      {/* Ambient tiny droids layer (brighter) */}
      <AnimatedDroids className="absolute inset-0 mix-blend-screen opacity-90" />

      {/* Dunes with parallax: far, mid, near */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `translateY(${scrollY * 0.06}px)` }}>
        <defs>
          <linearGradient id="sandFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path fill="url(#sandFar)" fillOpacity="0.6" d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,80C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,340L0,340Z" />
      </svg>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <defs>
          <linearGradient id="sandMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <path fill="url(#sandMid)" fillOpacity="0.75" d="M0,290L80,280C160,270,320,250,480,220C640,190,800,150,960,140C1120,130,1280,150,1360,160L1440,170L1440,360L0,360Z" />
      </svg>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `translateY(${scrollY * 0.18}px)` }}>
        <defs>
          <linearGradient id="sandNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        <path fill="url(#sandNear)" fillOpacity="0.9" d="M0,330L90,320C180,310,360,300,540,280C720,260,900,230,1080,220C1260,210,1410,230,1440,240L1440,380L0,380Z" />
      </svg>

      {/* Large sandcrawler on horizon with path-follow */}
      <div className="pointer-events-none [animation:float_5s_ease-in-out_infinite]" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
        <MegaSandcrawler progress={megaProgress} depth={-60} />
      </div>

      {/* Nearby sandcrawler silhouette on path */}
      <div className="pointer-events-none" style={{ transform: `translateY(${scrollY * 0.14}px)` }}>
        <div className="[animation:float_6s_ease-in-out_infinite]">
          <Sandcrawler progress={nearProgress} depth={-20} />
        </div>
      </div>

      {/* Jawa march line with hover/click reactions */}
      <Jawas />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-400/25 px-3 py-1 text-amber-100 text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)]">
          <Sparkles className="h-4 w-4" /> Custom AI for every galaxy sector
        </div>

        <h1 className="mt-6 text-5xl sm:text-7xl font-black tracking-tight text-amber-50 drop-shadow-[0_0_35px_rgba(245,158,11,0.55)]">
          Jawas build louder, brighter, faster AI systems
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-amber-100/90 max-w-3xl mx-auto">
          Probes scanning, droids hovering, crawlers rolling — your mission control for custom AI.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-7 py-3.5 font-extrabold text-zinc-900 shadow-lg hover:bg-amber-400 transition-transform hover:scale-[1.02]">Start a project</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-amber-300/60 bg-amber-400/25 px-7 py-3.5 font-bold text-amber-50 hover:bg-amber-400/35 transition">See capabilities</a>
        </div>
      </div>
    </section>
  );
}
