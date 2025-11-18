import { useEffect, useRef } from "react";

// Fun easter eggs: Konami code triggers amber confetti + Jawa "Utinni!"
// Double-click anywhere spawns a quick sandworm silhouette sliding by.
export default function EasterEggs() {
  const seqRef = useRef([]);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = document.body;
    rootRef.current = root;

    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

    const onKey = (e) => {
      seqRef.current.push(e.key);
      if (seqRef.current.length > KONAMI.length) seqRef.current.shift();
      if (KONAMI.every((k, i) => seqRef.current[i] === k)) {
        triggerConfetti();
        spawnUtinni();
        seqRef.current = [];
      }
    };

    const onDbl = (e) => {
      spawnSandworm(e.clientX, e.clientY);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("dblclick", onDbl);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("dblclick", onDbl);
    };
  }, []);

  const triggerConfetti = () => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "60";
    document.body.appendChild(container);

    for (let i = 0; i < 80; i++) {
      const p = document.createElement("span");
      const left = Math.random() * 100;
      const size = 6 + Math.random() * 6;
      p.style.cssText = `position:absolute;left:${left}%;top:-10px;width:${size}px;height:${size}px;border-radius:2px;`;
      const colors = ["#fde68a","#f59e0b","#d97706","#ef4444","#fca5a5"];
      p.style.background = colors[i % colors.length];
      container.appendChild(p);
      const dx = (Math.random() * 2 - 1) * 160;
      const dy = 300 + Math.random() * 120;
      const rot = (Math.random() * 2 - 1) * 360;
      p.animate([
        { transform: `translate(0,0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${dx}px,${dy}px) rotate(${rot}deg)`, opacity: 0 }
      ], { duration: 1800 + Math.random()*600, easing: 'cubic-bezier(.17,.67,.45,1)', fill: 'forwards' });
    }
    setTimeout(() => container.remove(), 2600);
  };

  const spawnUtinni = () => {
    const bubble = document.createElement("div");
    bubble.textContent = "Utinni!";
    bubble.setAttribute("role", "status");
    bubble.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#f59e0b;color:#1c1917;font-weight:900;padding:8px 12px;border-radius:9999px;box-shadow:0 8px 30px rgba(245,158,11,.4);z-index:70";
    document.body.appendChild(bubble);
    bubble.animate([
      { transform: 'translate(-50%, 10px)', opacity: 0 },
      { transform: 'translate(-50%, 0)', opacity: 1 },
      { transform: 'translate(-50%, -10px)', opacity: 0 }
    ], { duration: 1800, easing: 'ease-out' }).onfinish = () => bubble.remove();
  };

  const spawnSandworm = (x, y) => {
    const worm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    worm.setAttribute("viewBox", "0 0 200 60");
    worm.setAttribute("width", "240");
    worm.setAttribute("height", "72");
    worm.style.position = "fixed";
    worm.style.left = `${x - 120}px`;
    worm.style.top = `${y - 36}px`;
    worm.style.zIndex = "55";
    worm.style.filter = "drop-shadow(0 0 12px rgba(245,158,11,.35))";
    worm.innerHTML = `<defs>
      <linearGradient id='worm' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#a16207'/>
        <stop offset='100%' stop-color='#7c2d12'/>
      </linearGradient>
    </defs>
    <path d='M0 40 C40 10, 80 70, 120 35 C150 10, 170 60, 200 30' stroke='#f59e0b' stroke-opacity='.5' stroke-width='6' fill='none'/>
    <ellipse cx='30' cy='38' rx='18' ry='12' fill='url(#worm)'/>
    <ellipse cx='30' cy='38' rx='6' ry='4' fill='#0b0a08'/>`;
    document.body.appendChild(worm);
    worm.animate([
      { transform: 'translateX(-40px)', opacity: .0 },
      { transform: 'translateX(0px)', opacity: 1 },
      { transform: 'translateX(220px)', opacity: 0 }
    ], { duration: 2200, easing: 'ease-in-out', fill: 'forwards' }).onfinish = () => worm.remove();
  };

  return null;
}
