"use client";

import { Bot, Code2, Layers3, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";

const services = [
  {
    title: "Web Applications",
    description: "Fast, accessible, conversion-focused web platforms engineered for scale.",
    icon: Code2,
  },
  {
    title: "Mobile Applications",
    description: "Native-quality mobile experiences with sharp flows and reliable delivery.",
    icon: Smartphone,
  },
  {
    title: "SaaS Platforms",
    description: "Multi-tenant products, dashboards, billing flows, and secure admin systems.",
    icon: Layers3,
  },
  {
    title: "AI Systems",
    description: "Applied AI workflows, copilots, automations, and intelligent product layers.",
    icon: Bot,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-apex-cyan">Services</p>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal sm:text-5xl">
            High-performance systems with startup momentum.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <TiltCard className="group h-full min-h-64">
                  <div className="grid size-12 place-items-center rounded-lg bg-apex-blue/22 text-apex-cyan ring-1 ring-apex-cyan/30">
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/68">{service.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
