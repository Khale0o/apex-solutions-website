"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";

const emailConfig = {
  publicKey: "xZ77FASx4p7NnVQLo",
  serviceId: "service_7avqs28",
  templateId: "template_kk25l6s",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        { publicKey: emailConfig.publicKey },
      );
      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div className="glass premium-surface rounded-lg p-8">
            <div className="grid size-12 place-items-center rounded-lg bg-apex-cyan/12 text-apex-cyan shadow-[0_0_32px_rgba(0,191,255,0.14)]">
              <Mail aria-hidden="true" className="size-6" />
            </div>
            <p className="mt-8 text-sm font-semibold uppercase text-apex-cyan">Contact</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal sm:text-5xl">
              Ready to build something exceptional?
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Tell us about the product, timeline, and outcome you want. APEX will respond
              with a focused path forward.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form ref={formRef} onSubmit={onSubmit} className="glass premium-surface rounded-lg p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-white/78">
                Name
                <input
                  required
                  name="from_name"
                  autoComplete="name"
                  className="focus-ring min-h-12 rounded-md border border-white/14 bg-white/7 px-4 text-white placeholder:text-white/38 transition duration-300 hover:border-white/24 focus:border-apex-cyan"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white/78">
                Email
                <input
                  required
                  type="email"
                  name="reply_to"
                  autoComplete="email"
                  className="focus-ring min-h-12 rounded-md border border-white/14 bg-white/7 px-4 text-white placeholder:text-white/38 transition duration-300 hover:border-white/24 focus:border-apex-cyan"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-white/78">
              Project type
              <input
                required
                name="project_type"
                className="focus-ring min-h-12 rounded-md border border-white/14 bg-white/7 px-4 text-white placeholder:text-white/38 transition duration-300 hover:border-white/24 focus:border-apex-cyan"
                placeholder="Web app, SaaS, mobile, AI system..."
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-medium text-white/78">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="focus-ring resize-none rounded-md border border-white/14 bg-white/7 px-4 py-3 text-white placeholder:text-white/38 transition duration-300 hover:border-white/24 focus:border-apex-cyan"
                placeholder="What are you building?"
              />
            </label>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <MagneticButton type="submit" disabled={status === "sending"}>
                <span className="inline-flex items-center gap-2">
                  <Send aria-hidden="true" className="size-4" />
                  {status === "sending" ? "Sending..." : "Send message"}
                </span>
              </MagneticButton>
              <p aria-live="polite" className="min-h-6 text-sm text-white/68">
                {status === "success" && "Message sent. We will be in touch soon."}
                {status === "error" && "Something went wrong. Please try again."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
