"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Discover",
    body: "Align goals, market context, user needs, risks, and the sharpest path to launch.",
  },
  {
    title: "Design",
    body: "Shape product flows, visual systems, technical architecture, and delivery milestones.",
  },
  {
    title: "Build",
    body: "Ship production-grade features through focused sprints, demos, and QA loops.",
  },
  {
    title: "Scale",
    body: "Improve performance, analytics, automation, and infrastructure as traction compounds.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-apex-cyan">Process</p>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal sm:text-5xl">
            A clear path from concept to category-ready.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="glass premium-surface relative h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-apex-cyan/45">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-heading text-5xl font-bold text-white/14">
                    0{index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-6 animate-pulse-arrow text-apex-cyan lg:block"
                    />
                  )}
                </div>
                <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/66">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
