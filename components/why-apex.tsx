"use client";

import { ShieldCheck, Zap, Target } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: 42, suffix: "+", label: "products shipped" },
  { value: 95, suffix: "+", label: "Lighthouse targets" },
  { value: 3, suffix: "x", label: "faster MVP cycles" },
];

const reasons = [
  {
    icon: Zap,
    title: "Velocity without fragility",
    body: "Lean senior teams, crisp architecture, and shipping rituals that keep product progress visible.",
  },
  {
    icon: ShieldCheck,
    title: "Built for trust",
    body: "Security, accessibility, observability, and reliability are included from the first sprint.",
  },
  {
    icon: Target,
    title: "Business-first execution",
    body: "Every feature is shaped around user value, acquisition, retention, and operational leverage.",
  },
];

export function WhyApex() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-apex-cyan/40 to-transparent" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase text-apex-cyan">Why APEX</p>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal sm:text-5xl">
            Strategy, design, and engineering in one focused crew.
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-5">
                <div className="font-heading text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.08}>
                <div className="glass rounded-lg p-6">
                  <div className="flex gap-5">
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-apex-cyan/12 text-apex-cyan">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold">{reason.title}</h3>
                      <p className="mt-2 leading-7 text-white/66">{reason.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
