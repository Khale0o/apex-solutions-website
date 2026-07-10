"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue("50%");
  const mouseY = useMotionValue("0%");
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mouseX} ${mouseY}, rgba(0, 191, 255, 0.22), transparent 54%)`;
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 220,
    damping: 18,
  });

  return (
    <motion.article
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const nextX = event.clientX - rect.left;
        const nextY = event.clientY - rect.top;
        x.set(nextX / rect.width - 0.5);
        y.set(nextY / rect.height - 0.5);
        mouseX.set(`${nextX}px`);
        mouseY.set(`${nextY}px`);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "glass premium-surface group relative overflow-hidden rounded-lg p-6 transition-colors duration-300 hover:border-apex-cyan/60 hover:shadow-[0_28px_90px_rgba(0,71,255,0.26)]",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-apex-cyan/14 via-transparent to-apex-blue/16 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div style={{ transform: "translateZ(28px)" }} className="relative">
        {children}
      </div>
    </motion.article>
  );
}
