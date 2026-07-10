"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "OrbitOps",
    category: "SaaS Platform",
    description: "A real-time operating system for distributed teams and customer success leaders.",
    metric: "31% retention lift",
  },
  {
    name: "NeuralDesk",
    category: "AI System",
    description: "An AI support layer that triages, drafts, and escalates complex customer issues.",
    metric: "62% faster response",
  },
  {
    name: "PulsePay",
    category: "Mobile Application",
    description: "A secure finance app with instant onboarding, rich analytics, and biometric flows.",
    metric: "4.8 app rating",
  },
];

export function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-apex-cyan">Featured projects</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal sm:text-5xl">
              Digital products with a premium launch posture.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => move(-1)}
              className="focus-ring grid size-12 place-items-center rounded-full border border-white/15 transition hover:border-apex-cyan hover:text-apex-cyan"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => move(1)}
              className="focus-ring grid size-12 place-items-center rounded-full border border-white/15 transition hover:border-apex-cyan hover:text-apex-cyan"
            >
              <ArrowRight className="size-5 animate-pulse-arrow" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="glass overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid min-h-[420px] gap-8 p-6 md:grid-cols-[0.92fr_1.08fr] md:p-10"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase text-apex-cyan">
                      {project.category}
                    </p>
                    <h3 className="mt-4 font-heading text-5xl font-bold">{project.name}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-10 inline-flex w-fit rounded-full border border-apex-cyan/35 bg-apex-cyan/10 px-5 py-3 font-heading text-xl font-bold text-white">
                    {project.metric}
                  </div>
                </div>

                <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/12 bg-[#07102d]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,71,255,0.34),transparent_48%),radial-gradient(circle_at_70%_24%,rgba(0,191,255,0.32),transparent_28%)]" />
                  <div className="absolute left-8 right-8 top-8 h-16 rounded-lg border border-white/12 bg-white/10 backdrop-blur" />
                  <div className="absolute bottom-8 left-8 grid w-[46%] gap-3">
                    <span className="h-4 rounded-full bg-white/20" />
                    <span className="h-4 w-2/3 rounded-full bg-apex-cyan/40" />
                    <span className="h-20 rounded-lg bg-white/10" />
                  </div>
                  <div className="absolute bottom-8 right-8 top-32 w-[38%] rounded-lg border border-apex-cyan/25 bg-apex-blue/20 shadow-glow" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
