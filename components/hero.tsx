"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { BarChart3, Check, ChevronDown, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MagneticButton } from "@/components/magnetic-button";
import { Particles } from "@/components/particles";
import { whatsappUrl } from "@/lib/brand";

const proof = ["Responsive Design", "AI Ready", "SEO Optimized", "Production Ready"];

const metrics = [
  { label: "Total Projects", value: "42", detail: "+18% this quarter" },
  { label: "Performance", value: "98", detail: "Lighthouse score" },
  { label: "Revenue", value: "$1.8M", detail: "+32% pipeline" },
  { label: "Uptime", value: "99.9%", detail: "Production SLA" },
];

const chartPath = "M8 116 C42 94 58 100 86 74 C114 48 142 66 170 50 C204 30 230 44 260 28 C292 12 316 22 344 10";
const chartArea = "M8 116 C42 94 58 100 86 74 C114 48 142 66 170 50 C204 30 230 44 260 28 C292 12 316 22 344 10 L344 136 L8 136 Z";

const topServices = [
  { name: "Web Applications", value: "31%" },
  { name: "Mobile Applications", value: "18%" },
  { name: "SaaS Platforms", value: "28%" },
  { name: "AI Systems", value: "23%" },
];

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.25]);

  useEffect(() => {
    if (!orbRef.current) return;

    const context = gsap.context(() => {
      gsap.to(".hero-core", {
        y: -8,
        scale: 1.01,
        duration: 3.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, orbRef);

    return () => context.revert();
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-28 pt-28 lg:pb-24">
      <Particles />
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-apex-cyan/12 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-px w-[min(88rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-apex-cyan/70 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[conic-gradient(from_180deg_at_50%_34%,transparent,rgba(0,71,255,0.2),rgba(0,191,255,0.22),transparent_32%)] opacity-70 blur-3xl" />
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-radial-grid bg-[length:52rem_52rem,64px_64px,64px_64px] opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-apex-night to-transparent" />

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
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
            <MagneticButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Launch with APEX
            </MagneticButton>
            <a
              href="#projects"
              className="focus-ring sheen inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/70 hover:bg-white/10 hover:text-white hover:shadow-[0_0_44px_rgba(0,191,255,0.18)] active:translate-y-0 sm:w-auto"
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
          className="glass premium-surface relative overflow-hidden rounded-lg p-3 shadow-[0_30px_120px_rgba(0,0,0,0.38)] sm:p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_15%,rgba(0,191,255,0.22),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(0,71,255,0.28),transparent_36%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-apex-cyan to-transparent" />

          <div className="hero-core relative rounded-lg border border-white/12 bg-[#070b1d]/92 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur sm:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <BrandLogo showText={true} />
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-apex-cyan/30 bg-apex-cyan/10 px-3 py-1.5 text-xs text-apex-cyan">
                <span className="size-2 rounded-full bg-apex-cyan shadow-glow" />
                Live dashboard
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="min-w-0 rounded-lg border border-white/10 bg-white/[0.055] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-apex-cyan/35 hover:bg-white/[0.075] sm:p-4"
                >
                  <p className="text-xs text-white/48">{metric.label}</p>
                  <p className="mt-2 truncate font-heading text-xl font-bold tracking-normal sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-apex-cyan/82">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-lg border border-white/10 bg-[#050816]/82 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase text-apex-cyan">Project Activity chart</p>
                    <h3 className="mt-1 font-heading text-xl font-bold">Delivery momentum</h3>
                  </div>
                  <BarChart3 aria-hidden="true" className="size-5 text-apex-cyan" />
                </div>
                <div className="mt-6 overflow-hidden rounded-md border border-white/8 bg-white/[0.025] p-3">
                  <svg
                    viewBox="0 0 352 144"
                    role="img"
                    aria-label="Project activity line chart"
                    className="h-32 w-full sm:h-40"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="activityLine" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#0047FF" />
                        <stop offset="100%" stopColor="#00BFFF" />
                      </linearGradient>
                      <linearGradient id="activityFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#0047FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[24, 64, 104].map((line) => (
                      <line
                        key={line}
                        x1="0"
                        x2="352"
                        y1={line}
                        y2={line}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    ))}
                    <motion.path
                      d={chartArea}
                      fill="url(#activityFill)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                    />
                    <motion.path
                      d={chartPath}
                      fill="none"
                      stroke="url(#activityLine)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <circle cx="344" cy="10" r="5" fill="#00BFFF" />
                    <circle cx="344" cy="10" r="10" fill="#00BFFF" opacity="0.14" />
                  </svg>
                </div>
                <div className="mt-4 flex justify-between text-[11px] text-white/38">
                  <span>Discovery</span>
                  <span>Design</span>
                  <span>Build</span>
                  <span>Scale</span>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Layers3 aria-hidden="true" className="size-4 text-apex-cyan" />
                    <h3 className="font-heading text-lg font-bold">Top Services</h3>
                  </div>
                  <div className="grid gap-3">
                    {topServices.map((service) => (
                      <div key={service.name}>
                        <div className="mb-1.5 flex justify-between text-xs">
                          <span className="text-white/70">{service.name}</span>
                          <span className="text-apex-cyan">{service.value}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-apex-blue to-apex-cyan"
                            style={{ width: service.value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck aria-hidden="true" className="size-4 text-apex-cyan" />
                    <p className="font-heading text-lg font-bold">Production Ready</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    Secure architecture, performance budgets, and launch-ready QA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="focus-ring absolute bottom-9 left-1/2 z-10 grid size-9 -translate-x-1/2 place-items-center rounded-full border border-white/12 bg-white/6 backdrop-blur transition duration-300 hover:border-apex-cyan/50 hover:bg-white/10"
      >
        <ChevronDown className="size-4 animate-pulse-down text-apex-cyan" />
      </a>
    </section>
  );
}
