"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-apex-night"
          aria-label="Loading APEX Solutions"
          role="status"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.22),transparent_34%),radial-gradient(circle_at_50%_62%,rgba(0,71,255,0.28),transparent_28%)]" />
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid place-items-center gap-5"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
              className="absolute size-28 rounded-full border border-apex-cyan/30 border-t-apex-cyan shadow-glow"
            />
            <div className="grid size-24 place-items-center rounded-full shadow-glow">
              <Image
                src="/brand/apex-logo.png"
                alt="APEX Solutions logo"
                width={120}
                height={120}
                priority
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 136 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="h-px rounded-full bg-gradient-to-r from-transparent via-apex-cyan to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
