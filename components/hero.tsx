"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Activity, Check, ChevronDown, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MagneticButton } from "@/components/magnetic-button";
import { Particles } from "@/components/particles";
import { whatsappUrl } from "@/lib/brand";

const proof = ["Responsive Design", "AI Ready", "SEO Optimized", "Production Ready"];

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
            Corporate-grade product engineering
          </div>
          <h1 className="font-heading text-5xl font-bold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build scalable{" "}
            <span className="bg-gradient-to-r from-white via-apex-cyan to-white bg-clip-text text-transparent">
              Web, Mobile &amp; AI
            </span>{" "}
            products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            APEX Solutions designs and engineers secure web platforms, mobile applications,
            SaaS products, and AI systems with the polish, speed, and reliability modern
            companies expect.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Launch with APEX
            </MagneticButton>
            <a
              href="#projects"
              className="focus-ring sheen inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/70 hover:bg-white/10 hover:text-white hover:shadow-[0_0_44px_rgba(0,191,255,0.18)] active:translate-y-0"
            >
              View featured work
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 text-xs text-white/66 sm:grid-cols-4 sm:text-sm">
            {proof.map((item) => (
              <div
                key={item}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-center backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/45 hover:text-white"
              >
                <Check aria-hidden="true" className="size-3.5 text-apex-cyan" />
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
          className="glass premium-surface relative min-h-[520px] overflow-hidden rounded-lg p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_25%,rgba(0,191,255,0.38),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(0,71,255,0.38),transparent_38%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-apex-cyan to-transparent" />
          <div className="hero-orbit absolute -right-20 top-10 size-72 rounded-full border border-apex-cyan/25 shadow-glow" />
          <div className="hero-orbit absolute -bottom-24 left-8 h-80 w-80 rounded-full border border-apex-blue/25 [transform:rotateX(64deg)]" />

          <div className="hero-core relative h-full min-h-[472px] rounded-lg border border-white/12 bg-[#070b1d]/88 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <BrandLogo showText={false} imageClassName="ring-1 ring-white/15" />
              <div className="flex items-center gap-2 rounded-full border border-apex-cyan/30 bg-apex-cyan/10 px-3 py-1.5 text-xs text-apex-cyan">
                <span className="size-2 rounded-full bg-apex-cyan shadow-glow" />
                Live Product OS
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="hidden rounded-lg border border-white/10 bg-white/5 p-3 lg:block">
                <div className="mb-4 h-2 w-16 rounded-full bg-white/20" />
                {["Overview", "AI Flow", "Mobile", "Deploy"].map((item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-md px-3 py-2 text-xs ${
                      index === 1
                        ? "bg-apex-blue text-white shadow-blue-glow"
                        : "bg-white/5 text-white/54"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              <div className="grid gap-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Launch score", "98%"],
                    ["AI latency", "0.8s"],
                    ["SEO health", "A+"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-white/6 p-4">
                      <p className="text-xs text-white/48">{label}</p>
                      <p className="mt-2 font-heading text-2xl font-bold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="relative min-h-52 overflow-hidden rounded-lg border border-white/10 bg-[#050816] p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,191,255,0.22),transparent_32%)]" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase text-apex-cyan">Product growth</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold">AI-ready platform</h3>
                    </div>
                    <Activity aria-hidden="true" className="size-6 text-apex-cyan" />
                  </div>
                  <div className="relative mt-8 flex h-28 items-end gap-2">
                    {[48, 70, 58, 86, 76, 98, 88, 112, 104, 126].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-apex-blue to-apex-cyan shadow-[0_0_18px_rgba(0,191,255,0.22)]"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 hidden w-52 rounded-lg border border-white/12 bg-white/10 p-4 shadow-glow backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/apex-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs text-white/48">APEX delivery</p>
                  <p className="font-heading text-lg font-bold">Production Ready</p>
                </div>
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
