import { useEffect, useRef } from "react";

export default function Starfield({ className = "absolute inset-0 pointer-events-none", depth = -150, scrollY = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stars = 220;
    let html = "";
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const s = Math.random() * 1.4 + 0.3;
      const o = Math.random() * 0.9 + 0.1;
      html += `<span style="position:absolute;left:${x}%;top:${y}%;width:${s}px;height:${s}px;border-radius:50%;background:rgba(255,255,255,${o})"></span>`;
    }
    el.innerHTML = html;

    return () => {
      el.innerHTML = "";
    };
  }, []);

  // Parallax translate based on depth and scroll
  const parallaxY = (scrollY * (depth / 600));

  return <div ref={ref} className={className} style={{ transform: `translateY(${parallaxY}px) translateZ(${depth}px)` }} aria-hidden="true"/>;
}
