"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ChevronDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { Particles } from "@/components/particles";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.25]);

  useEffect(() => {
    if (!orbRef.current) return;

    const context = gsap.context(() => {
      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".hero-core", {
        y: -14,
        scale: 1.04,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, orbRef);

    return () => context.revert();
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <Particles />
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-radial-grid bg-[length:52rem_52rem,64px_64px,64px_64px] opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-apex-night to-transparent" />

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80">
            <Sparkles aria-hidden="true" className="size-4 text-apex-cyan" />
            Product engineering for ambitious founders
          </div>
          <h1 className="font-heading text-5xl font-bold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build the next market-defining digital product.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            APEX Solutions designs and engineers web applications, mobile experiences,
            SaaS platforms, and AI systems with the polish, speed, and resilience modern
            startups need.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#contact">Launch with APEX</MagneticButton>
            <a
              href="#projects"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-apex-cyan/70 hover:text-white"
            >
              View featured work
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={orbRef}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative min-h-[420px] overflow-hidden rounded-lg p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_25%,rgba(0,191,255,0.34),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(0,71,255,0.34),transparent_38%)]" />
          <div className="relative grid h-full min-h-[368px] place-items-center">
            <div className="hero-orbit absolute size-64 rounded-full border border-apex-cyan/35 shadow-glow" />
            <div className="absolute size-44 rounded-full border border-white/15" />
            <div className="hero-orbit absolute h-72 w-72 rounded-full border border-apex-blue/35 [transform:rotateX(64deg)]" />
            <div className="hero-core grid size-32 place-items-center rounded-full bg-white text-apex-night shadow-glow">
              <span className="font-heading text-4xl font-bold">APEX</span>
            </div>
            <div className="absolute left-4 top-8 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/75 backdrop-blur">
              +47% faster launch cycles
            </div>
            <div className="absolute bottom-8 right-4 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/75 backdrop-blur">
              AI-ready architecture
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="focus-ring absolute bottom-8 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/8 backdrop-blur"
      >
        <ChevronDown className="size-5 animate-pulse-arrow rotate-90 text-apex-cyan" />
      </a>
    </section>
  );
}
