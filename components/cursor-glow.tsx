"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!glowRef.current || reduceMotion || !finePointer) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glowRef.current?.classList.add("is-visible");
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      glowRef.current?.style.setProperty("--cursor-x", `${currentX}px`);
      glowRef.current?.style.setProperty("--cursor-y", `${currentY}px`);
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move);
    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />;
}
