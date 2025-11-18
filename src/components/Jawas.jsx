import { useEffect, useRef } from "react";

// Jawa sprites marching across dunes with hover/click reactions
export default function Jawas({ className = "absolute bottom-12 left-0 right-0 pointer-events-none" }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const count = 8;
    const els = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "absolute select-none will-change-transform";
      const size = 18 + Math.random() * 16;
      const y = 0 + Math.random() * 20;
      const delay = Math.random() * -10;
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = `${y}px`;
      el.style.width = `${size}px`;
      el.style.height = `${size * 1.3}px`;
      el.style.animation = `jawa-walk 12s linear ${delay}s infinite`;
      el.style.filter = "drop-shadow(0 0 6px rgba(245,158,11,0.4))";

      el.innerHTML = `
        <svg viewBox='0 0 24 30' width='100%' height='100%'>
          <defs>
            <linearGradient id='robe' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#d97706'/>
              <stop offset='100%' stop-color='#92400e'/>
            </linearGradient>
          </defs>
          <path d='M2 22 L6 8 Q12 0 18 8 L22 22 Z' fill='url(#robe)' stroke='#f59e0b' stroke-opacity='0.35'/>
          <circle cx='10' cy='14' r='1.6' fill='#fde68a'/>
          <circle cx='14' cy='14' r='1.6' fill='#fde68a'/>
          <path d='M8 24 L6 28 M16 24 L18 28' stroke='#1f2937' stroke-width='2' stroke-linecap='round'/>
        </svg>`;

      el.addEventListener("mouseenter", () => {
        el.style.animationDuration = "6s";
        el.style.transform = "translateY(-4px) scale(1.1)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.animationDuration = "12s";
        el.style.transform = "translateY(0) scale(1)";
      });
      el.addEventListener("click", () => {
        el.animate([
          { transform: 'translateY(-2px) scale(1.1)' },
          { transform: 'translateY(0) scale(1)' }
        ], { duration: 250, easing: 'ease-out' });
      });

      root.appendChild(el);
      els.push(el);
    }

    return () => {
      els.forEach((el) => el.remove());
    };
  }, []);

  return <div ref={ref} className={className} aria-hidden="true"/>;
}
