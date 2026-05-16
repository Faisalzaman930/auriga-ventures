"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Curtain reveal — content hidden behind a sliding mask
export function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={inView ? { y: "0%" } : { y: "100%" }}
        initial={{ y: "100%" }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Photo reveal — image slides up from behind a clipping mask
export function RevealPhoto({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        animate={inView ? { y: "0%", scale: 1 } : { y: "6%", scale: 1.06 }}
        initial={{ y: "6%", scale: 1.06 }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Fade + slide — generic section fade
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Gold line that draws itself
export function DrawLine({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`bg-[#C8903A] ${vertical ? "w-px" : "h-px"} overflow-hidden`}
    >
      <motion.div
        className={`bg-[#C8903A] ${vertical ? "w-full" : "h-full"}`}
        animate={
          inView
            ? vertical
              ? { height: "100%", width: "100%" }
              : { width: "100%", height: "100%" }
            : vertical
            ? { height: "0%", width: "100%" }
            : { width: "0%", height: "100%" }
        }
        initial={vertical ? { height: "0%" } : { width: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      />
    </div>
  );
}
