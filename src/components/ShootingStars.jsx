import { useEffect, useRef } from "react";

export default function ShootingStars({ className = "absolute inset-0 pointer-events-none" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const make = () => {
      const s = document.createElement("span");
      const left = Math.random() * 100;
      const dur = 1200 + Math.random() * 1200;
      s.style.cssText = `position:absolute;left:${left}%;top:-10px;width:2px;height:2px;background:#fff;border-radius:50%;box-shadow:0 0 10px #fff, 0 0 20px #fde68a;opacity:0.9;`;
      el.appendChild(s);
      s.animate([
        { transform: 'translate(-20px,-20px)', opacity: 0.9 },
        { transform: 'translate(200px,220px)', opacity: 0 }
      ], { duration: dur, easing: 'ease-out' }).onfinish = () => s.remove();
    };

    const id = setInterval(make, 900);
    return () => clearInterval(id);
  }, []);
  return <div ref={ref} className={className}/>;
}
