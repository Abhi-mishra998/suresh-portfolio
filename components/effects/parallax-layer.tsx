"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
  speed?: number;
  className?: string;
  children?: ReactNode;
};

/* Scroll-linked translateY. Speed > 0 makes the layer lag behind scroll
   (feels deeper). Style is set imperatively on the ref — no React state,
   no reconciliation per scroll event. rAF-throttled. */
export function ParallaxLayer({
  speed = 0.3,
  className,
  children,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        node.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
