"use client";

import { useEffect, useRef } from "react";

/* Radial highlight that follows the cursor within its bounding element.
   CSS custom properties for x/y so the browser can composite without React.
   Coordinates are relative to the spotlight's own rect — works even when
   the user's cursor is above/below the hero (falloff clips naturally). */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--sx", `${e.clientX - rect.left}px`);
        node.style.setProperty("--sy", `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-90 motion-reduce:hidden"
      style={{
        background:
          "radial-gradient(560px circle at var(--sx, 50%) var(--sy, 20%), rgba(255,255,255,0.07), transparent 45%)",
      }}
    />
  );
}
