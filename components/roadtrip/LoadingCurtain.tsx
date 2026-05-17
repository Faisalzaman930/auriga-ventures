"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingCurtain({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"loading" | "lifting" | "done">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("lifting"), 2200);
    const t2 = setTimeout(() => { setPhase("done"); onDone(); }, 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="curtain"
          initial={{ y: 0 }}
          animate={phase === "lifting" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] bg-[#1a1a1a] flex flex-col items-center justify-center gap-8"
        >
          {/* Fuel gauge */}
          <svg viewBox="0 0 220 130" className="w-56 h-32">
            {/* Background arc */}
            <path d="M 20,110 A 90,90 0 0,1 200,110"
              stroke="#2a2a2a" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* Fill arc */}
            <motion.path d="M 20,110 A 90,90 0 0,1 200,110"
              stroke="#e8a838" strokeWidth="8" fill="none" strokeLinecap="round"
              strokeDasharray="220"
              initial={{ strokeDashoffset: 220 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            {/* E label */}
            <text x="8" y="128" fill="#4a4a4a" fontSize="13" fontFamily="monospace">E</text>
            {/* F label */}
            <text x="203" y="128" fill="#e8a838" fontSize="13" fontFamily="monospace">F</text>
            {/* Tick marks */}
            {[0, 0.25, 0.5, 0.75, 1].map((t) => {
              const angle = -180 + t * 180;
              const rad = (angle * Math.PI) / 180;
              const cx = 110, cy = 110, r = 88;
              return (
                <line key={t}
                  x1={cx + (r - 10) * Math.cos(rad)} y1={cy + (r - 10) * Math.sin(rad)}
                  x2={cx + r * Math.cos(rad)} y2={cy + r * Math.sin(rad)}
                  stroke="#3a3a3a" strokeWidth="2"
                />
              );
            })}
            {/* Gauge label */}
            <text x="86" y="90" fill="#e8a838" fontSize="11" fontFamily="monospace" opacity="0.7">FUEL</text>
          </svg>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] tracking-[0.45em] uppercase text-[#e8a838]/60"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Preparing your journey
          </motion.p>

          {/* Garage door slats */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 border-t border-[#2a2a2a]" />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
