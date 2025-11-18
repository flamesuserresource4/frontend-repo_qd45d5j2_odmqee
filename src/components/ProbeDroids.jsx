import { useEffect, useRef, useState } from "react";

// Interactive probe droids: swarm follows cursor, click to trigger scan beams
export default function ProbeDroids({ className = "absolute inset-0" }) {
  const canvasRef = useRef(null);
  const [turbo, setTurbo] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    const scale = window.devicePixelRatio || 1;
    ctx.scale(scale, scale);

    const viewW = canvas.offsetWidth;
    const viewH = canvas.offsetHeight;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const probes = Array.from({ length: 10 }).map(() => ({
      x: rand(0, viewW),
      y: rand(viewH * 0.15, viewH * 0.6),
      vx: rand(-0.6, 0.6),
      vy: rand(-0.3, 0.3),
      r: rand(6, 10),
      phase: Math.random() * Math.PI * 2,
      alert: false,
      pulse: 0,
    }));

    const mouse = { x: viewW / 2, y: viewH / 3, active: false };

    let raf;
    const draw = (t) => {
      ctx.clearRect(0, 0, viewW, viewH);

      // glow backdrop
      const grad = ctx.createRadialGradient(viewW/2, viewH*0.35, 10, viewW/2, viewH*0.35, viewH*0.9);
      grad.addColorStop(0, "rgba(245,158,11,0.10)");
      grad.addColorStop(1, "rgba(15,23,42,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,viewW,viewH);

      probes.forEach((p) => {
        // seek cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const seek = Math.min(0.04 * (turbo ? 2 : 1), 0.06);
        if (mouse.active) {
          p.vx += (dx / dist) * seek;
          p.vy += (dy / dist) * seek;
        }

        // hovering wobble
        p.vy += Math.sin(t / 600 + p.phase) * 0.003;

        // velocity clamp
        const maxV = turbo ? 2.2 : 1.2;
        p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
        p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < -20) p.x = viewW + 20;
        if (p.x > viewW + 20) p.x = -20;
        if (p.y < 20) { p.y = 20; p.vy *= -0.5; }
        if (p.y > viewH * 0.7) { p.y = viewH * 0.7; p.vy *= -0.5; }

        // draw legs
        ctx.strokeStyle = "rgba(148,163,184,0.7)";
        ctx.lineWidth = 1.5;
        const legLen = p.r + 6;
        const legs = [Math.PI * 0.15, -Math.PI * 0.15, Math.PI - Math.PI * 0.12, -Math.PI + Math.PI * 0.12];
        legs.forEach((ang) => {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + Math.cos(ang) * legLen, p.y + Math.sin(ang) * legLen);
          ctx.stroke();
        });

        // body
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const c = p.alert ? "rgba(239,68,68,0.9)" : "rgba(59,130,246,0.9)"; // red or blue
        ctx.fillStyle = c;
        ctx.shadowColor = c;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // center eye
        ctx.beginPath();
        ctx.arc(p.x + 0.5, p.y - 0.5, p.r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = p.alert ? "#FCA5A5" : "#93C5FD";
        ctx.fill();

        // scanning arc when near cursor
        if (mouse.active && dist < 160) {
          ctx.beginPath();
          ctx.strokeStyle = p.alert ? "rgba(239,68,68,0.5)" : "rgba(59,130,246,0.5)";
          ctx.lineWidth = 2;
          const a = Math.atan2(dy, dx);
          ctx.arc(p.x, p.y, p.r + 8 + (Math.sin(t/200)+1)*2, a - 0.5, a + 0.5);
          ctx.stroke();
        }

        // pulse ring on alert
        if (p.alert) {
          p.pulse += 2.2;
          for (let i=0;i<2;i++){
            const rad = p.r + 6 + ((p.pulse + i*10) % 40);
            const alpha = 1 - ((p.pulse + i*10) % 40) / 40;
            ctx.beginPath();
            ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(239,68,68,${0.25*alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(scale, scale);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    const onClick = () => {
      // toggle turbo and set alerts
      setTurbo((s) => !s);
      probes.forEach((p) => { p.alert = !p.alert; p.pulse = 0; });
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    draw(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [turbo]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
