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
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-apex-cyan/12 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-px w-[min(88rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-apex-cyan/70 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[conic-gradient(from_180deg_at_50%_34%,transparent,rgba(0,71,255,0.2),rgba(0,191,255,0.22),transparent_32%)] opacity-70 blur-3xl" />
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-radial-grid bg-[length:52rem_52rem,64px_64px,64px_64px] opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-apex-night to-transparent" />

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="glass sheen mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80">
            <Sparkles aria-hidden="true" className="size-4 text-apex-cyan" />
            Product engineering for ambitious founders
          </div>
          <h1 className="font-heading text-5xl font-bold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build the next{" "}
            <span className="bg-gradient-to-r from-white via-apex-cyan to-white bg-clip-text text-transparent">
              AI-native
            </span>{" "}
            digital product.
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
              className="focus-ring sheen inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/70 hover:bg-white/10 hover:text-white hover:shadow-[0_0_44px_rgba(0,191,255,0.18)] active:translate-y-0"
            >
              View featured work
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-xs text-white/52 sm:text-sm">
            {["AI automation", "SaaS scale", "Launch systems"].map((item) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={orbRef}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="glass premium-surface relative min-h-[420px] overflow-hidden rounded-lg p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_25%,rgba(0,191,255,0.38),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(0,71,255,0.38),transparent_38%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-apex-cyan to-transparent" />
          <div className="relative grid h-full min-h-[368px] place-items-center">
            <div className="absolute inset-6 rounded-lg border border-white/8 bg-black/10" />
            <div className="hero-orbit absolute size-64 rounded-full border border-apex-cyan/35 shadow-glow" />
            <div className="absolute size-44 rounded-full border border-white/15" />
            <div className="hero-orbit absolute h-72 w-72 rounded-full border border-apex-blue/35 [transform:rotateX(64deg)]" />
            <div className="hero-core grid size-32 place-items-center rounded-full bg-white text-apex-night shadow-glow">
              <span className="font-heading text-4xl font-bold">APEX</span>
            </div>
            <div className="absolute left-4 top-8 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/75 shadow-[0_0_34px_rgba(0,191,255,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-apex-cyan/40">
              +47% faster launch cycles
            </div>
            <div className="absolute bottom-8 right-4 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/75 shadow-[0_0_34px_rgba(0,71,255,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-apex-cyan/40">
              AI-ready architecture
            </div>
            <div className="absolute bottom-8 left-4 hidden w-40 rounded-md border border-white/12 bg-white/8 p-3 backdrop-blur sm:block">
              <div className="mb-3 h-2 w-16 rounded-full bg-apex-cyan/70" />
              <div className="grid gap-2">
                <span className="h-2 rounded-full bg-white/18" />
                <span className="h-2 w-2/3 rounded-full bg-white/12" />
                <span className="h-2 w-5/6 rounded-full bg-apex-blue/35" />
              </div>
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
