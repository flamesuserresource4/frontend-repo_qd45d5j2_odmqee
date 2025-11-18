import { useEffect, useState } from "react";

export default function ParallaxSection({ id, children, strength = 0.08, bgStrength = 0.12, className = "", background = null }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {background && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${scrollY * bgStrength}px)` }}
          aria-hidden="true"
        >
          {background}
        </div>
      )}
      <div
        className="relative will-change-transform"
        style={{ transform: `translateY(${scrollY * strength}px)` }}
      >
        {children}
      </div>
    </section>
  );
}
