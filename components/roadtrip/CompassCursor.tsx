"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CompassCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rot = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 600, damping: 45 });
  const py = useSpring(my, { stiffness: 600, damping: 45 });
  const pr = useSpring(rot, { stiffness: 180, damping: 22 });
  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const dx = e.clientX - prev.current.x;
      const dy = e.clientY - prev.current.y;
      mx.set(e.clientX - 14);
      my.set(e.clientY - 14);
      if (Math.hypot(dx, dy) > 2) {
        rot.set(Math.atan2(dy, dx) * (180 / Math.PI) + 90);
      }
      prev.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, rot]);

  return (
    <motion.div
      style={{ x: px, y: py, rotate: pr }}
      className="fixed top-0 left-0 z-[200] pointer-events-none w-7 h-7"
    >
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="13" stroke="#e8a838" strokeWidth="0.75" opacity="0.5" />
        <polygon points="14,2 16.5,14 14,11.5 11.5,14" fill="#e8a838" />
        <polygon points="14,26 16.5,14 14,16.5 11.5,14" fill="#f5f0e8" opacity="0.55" />
        <circle cx="14" cy="14" r="2.5" fill="#1a1a1a" stroke="#e8a838" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
