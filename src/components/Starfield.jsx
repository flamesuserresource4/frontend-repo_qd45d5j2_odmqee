import { useEffect, useRef } from "react";

export default function Starfield({ className = "absolute inset-0 pointer-events-none" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stars = 180;
    let html = "";
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const s = Math.random() * 1.2 + 0.3;
      const o = Math.random() * 0.8 + 0.2;
      html += `<span style="position:absolute;left:${x}%;top:${y}%;width:${s}px;height:${s}px;border-radius:50%;background:rgba(255,255,255,${o})"></span>`;
    }
    el.innerHTML = html;

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className={className} />;
}
