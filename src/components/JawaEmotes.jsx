import { useEffect, useRef } from "react";

// Adds random emotes to Jawas: wave hand, flashlight blink, hop
export default function JawaEmotes({ className = "absolute bottom-20 left-0 right-0 pointer-events-none" }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const count = 6;
    const nodes = [];

    function createJawa(i) {
      const el = document.createElement("div");
      el.className = "absolute select-none will-change-transform";
      const size = 20 + Math.random() * 18;
      const y = Math.random() * 30;
      el.style.left = `${(i / count) * 100 + Math.random() * 8}%`;
      el.style.bottom = `${y}px`;
      el.style.width = `${size}px`;
      el.style.height = `${size * 1.3}px`;
      el.style.filter = "drop-shadow(0 0 6px rgba(245,158,11,0.5))";

      el.innerHTML = `
        <svg viewBox='0 0 28 34' width='100%' height='100%'>
          <defs>
            <linearGradient id='robe2' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#f59e0b'/>
              <stop offset='100%' stop-color='#92400e'/>
            </linearGradient>
            <radialGradient id='flash' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stop-color='rgba(253,230,138,1)'/>
              <stop offset='100%' stop-color='rgba(253,230,138,0)'/>
            </radialGradient>
          </defs>
          <path d='M3 25 L7 9 Q14 1 21 9 L25 25 Z' fill='url(#robe2)' stroke='#f59e0b' stroke-opacity='0.35'/>
          <circle cx='12' cy='16' r='1.8' fill='#fde68a'/>
          <circle cx='16' cy='16' r='1.8' fill='#fde68a'/>
          <g id='hand' transform='translate(6,22)'>
            <path d='M0 0 L-2 5' stroke='#1f2937' stroke-width='2' stroke-linecap='round'/>
          </g>
          <g id='torch' transform='translate(18,23)'>
            <rect x='0' y='0' width='3' height='6' fill='#1f2937' rx='1'/>
            <circle id='beam' cx='1.5' cy='0' r='0' fill='url(#flash)' />
          </g>
          <path d='M10 26 L8 30 M18 26 L20 30' stroke='#1f2937' stroke-width='2' stroke-linecap='round'/>
        </svg>`;

      // Random emote loop
      let timer;
      function schedule() {
        const delay = 1000 + Math.random() * 4000;
        timer = setTimeout(() => {
          const r = Math.random();
          if (r < 0.33) {
            // wave: rotate hand
            const hand = el.querySelector('#hand');
            if (hand) hand.animate([
              { transform: 'translate(6px,22px) rotate(0deg)' },
              { transform: 'translate(6px,22px) rotate(-25deg)' },
              { transform: 'translate(6px,22px) rotate(0deg)' }
            ], { duration: 700, easing: 'ease-in-out' });
          } else if (r < 0.66) {
            // blink torch
            const beam = el.querySelector('#beam');
            if (beam) beam.animate([
              { r: 0, opacity: 0.0 },
              { r: 16, opacity: 0.35 },
              { r: 0, opacity: 0.0 },
            ], { duration: 500, easing: 'ease-out' });
          } else {
            // hop
            el.animate([
              { transform: 'translateY(0)' },
              { transform: 'translateY(-6px)' },
              { transform: 'translateY(0)' }
            ], { duration: 500, easing: 'ease-out' });
          }
          schedule();
        }, delay);
      }
      schedule();

      el.addEventListener('mouseenter', () => {
        el.animate([
          { transform: 'translateY(0) scale(1)' },
          { transform: 'translateY(-4px) scale(1.05)' },
          { transform: 'translateY(0) scale(1)' }
        ], { duration: 350 });
      });

      root.appendChild(el);
      nodes.push({ el, timer });
    }

    for (let i = 0; i < count; i++) createJawa(i);

    return () => {
      nodes.forEach(({ el, timer }) => {
        if (timer) clearTimeout(timer);
        el.remove();
      });
    };
  }, []);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
