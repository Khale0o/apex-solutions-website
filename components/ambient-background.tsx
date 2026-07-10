"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!rootRef.current || reduceMotion) return;

    const context = gsap.context(() => {
      gsap.to(".ambient-gradient", {
        backgroundPosition: "100% 50%",
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".floating-orb", {
        y: (index) => [-28, 34, -18][index % 3],
        x: (index) => [24, -26, 18][index % 3],
        scale: (index) => [1.08, 0.94, 1.12][index % 3],
        duration: (index) => [8, 10, 12][index % 3],
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-gradient absolute inset-0 opacity-75" />
      <div className="floating-orb absolute left-[-9rem] top-[10%] size-[28rem] rounded-full bg-apex-blue/24 blur-[110px]" />
      <div className="floating-orb absolute right-[-10rem] top-[22%] size-[30rem] rounded-full bg-apex-cyan/18 blur-[120px]" />
      <div className="floating-orb absolute bottom-[-14rem] left-[28%] size-[34rem] rounded-full bg-[#2447ff]/18 blur-[130px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
    </div>
  );
}
