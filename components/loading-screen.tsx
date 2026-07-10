"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-apex-night"
          aria-label="Loading APEX Solutions"
          role="status"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.18),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(0,71,255,0.28),transparent_35%),linear-gradient(180deg,#050816,#06102e_55%,#050816)]" />

          <div className="relative flex flex-col items-center">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.8,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute top-0 h-40 w-40 rounded-full border border-apex-cyan/20 border-t-apex-cyan shadow-glow"
            />

            {/* Blue Glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-5 h-28 w-28 rounded-full bg-apex-blue/30 blur-3xl"
            />

            {/* Logo */}
            <motion.div
              animate={{
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full"
            >
              <Image
                src="/brand/apex-logo.png"
                alt="APEX Solutions"
                width={160}
                height={160}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="mt-7 text-center"
            >
              <h1 className="font-heading text-3xl font-bold tracking-[0.2em] text-white">
                APEX
              </h1>

              <p className="mt-1 text-sm uppercase tracking-[0.8em] text-white/70">
                SOLUTIONS
              </p>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="mt-8 h-px rounded-full bg-gradient-to-r from-transparent via-apex-cyan to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}