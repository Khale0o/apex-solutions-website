"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const MotionLink = motion.create(Link);

export function MagneticButton({
  href,
  children,
  className,
  type = "button",
  disabled,
  target,
  rel,
}: MagneticButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const sharedProps = {
    onMouseMove: (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
      y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
    },
    onMouseLeave: () => {
      x.set(0);
      y.set(0);
    },
    style: { x, y },
    className: cn(
      "focus-ring sheen group relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-apex-blue px-6 py-3 text-sm font-semibold text-white shadow-blue-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f5cff] hover:shadow-[0_0_56px_rgba(0,191,255,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60",
      className,
    ),
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowRight aria-hidden="true" className="relative z-10 size-4 animate-pulse-arrow transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <MotionLink href={href} target={target} rel={rel} whileTap={{ scale: 0.97 }} {...sharedProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} whileTap={{ scale: 0.97 }} {...sharedProps}>
      {content}
    </motion.button>
  );
}
