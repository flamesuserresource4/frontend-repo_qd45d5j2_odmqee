import { useEffect, useRef } from "react";

// Simple canvas animation: floating droids (circles) hovering and blinking
export default function AnimatedDroids({ className = "absolute inset-0" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const scale = window.devicePixelRatio || 1;
    ctx.scale(scale, scale);

    const droids = Array.from({ length: 14 }).map(() => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight * 0.6 + canvas.offsetHeight * 0.1,
      r: 2 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.6,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // subtle gradient sky
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
      grad.addColorStop(0, "rgba(15,23,42,0)");
      grad.addColorStop(1, "rgba(15,23,42,0.2)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      droids.forEach((d, i) => {
        const hover = Math.sin(d.phase + performance.now() / 1000 * d.speed) * 4;
        const blink = (Math.sin(d.phase + performance.now() / 300) + 1) / 2; // 0..1

        // Droid body
        ctx.beginPath();
        ctx.arc(d.x, d.y + hover, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 230, 138, ${0.35 + 0.35 * blink})`;
        ctx.fill();

        // antenna
        ctx.beginPath();
        ctx.moveTo(d.x, d.y + hover - d.r);
        ctx.lineTo(d.x, d.y + hover - d.r - 6);
        ctx.strokeStyle = "rgba(245, 158, 11, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // eye
        ctx.beginPath();
        ctx.arc(d.x + 2, d.y + hover - 1, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + 0.4 * blink})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(scale, scale);
    };

    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
