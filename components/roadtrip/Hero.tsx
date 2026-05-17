"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";

const HEADLINE = "THE ROAD IS THE DESTINATION";

// Deterministic stars — no hydration mismatch
const STARS = [
  { x: 4,  y: 3,  s: 1.5, o: 0.8 }, { x: 11, y: 6,  s: 1,   o: 0.5 },
  { x: 19, y: 2,  s: 2,   o: 0.9 }, { x: 27, y: 9,  s: 1,   o: 0.4 },
  { x: 35, y: 5,  s: 1.5, o: 0.7 }, { x: 43, y: 2,  s: 1,   o: 0.6 },
  { x: 52, y: 7,  s: 2,   o: 0.8 }, { x: 60, y: 4,  s: 1,   o: 0.5 },
  { x: 68, y: 8,  s: 1.5, o: 0.7 }, { x: 76, y: 3,  s: 1,   o: 0.9 },
  { x: 83, y: 6,  s: 2,   o: 0.6 }, { x: 90, y: 2,  s: 1,   o: 0.4 },
  { x: 96, y: 7,  s: 1.5, o: 0.8 }, { x: 8,  y: 14, s: 1,   o: 0.4 },
  { x: 23, y: 17, s: 1.5, o: 0.6 }, { x: 38, y: 12, s: 1,   o: 0.5 },
  { x: 55, y: 15, s: 2,   o: 0.7 }, { x: 70, y: 11, s: 1,   o: 0.4 },
  { x: 85, y: 16, s: 1.5, o: 0.6 }, { x: 94, y: 13, s: 1,   o: 0.8 },
  { x: 16, y: 22, s: 1,   o: 0.3 }, { x: 46, y: 20, s: 1.5, o: 0.5 },
  { x: 63, y: 24, s: 1,   o: 0.4 }, { x: 78, y: 21, s: 2,   o: 0.6 },
  { x: 30, y: 28, s: 1,   o: 0.3 }, { x: 50, y: 30, s: 1.5, o: 0.4 },
  { x: 72, y: 27, s: 1,   o: 0.5 }, { x: 88, y: 25, s: 1,   o: 0.3 },
  { x: 7,  y: 32, s: 2,   o: 0.3 }, { x: 42, y: 35, s: 1,   o: 0.2 },
];

function Speedometer({ active }: { active: boolean }) {
  const angle = useMotionValue(-118);
  const spring = useSpring(angle, { stiffness: 55, damping: 18 });

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      animate(angle, 32, { duration: 3.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] });
    }, 1400);
    return () => clearTimeout(t);
  }, [active, angle]);

  return (
    <svg viewBox="0 0 150 90" className="w-40 h-24">
      <path d="M 15,78 A 65,65 0 0,1 135,78" stroke="#2a2a2a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <motion.path d="M 15,78 A 65,65 0 0,1 135,78"
        stroke="#e8a838" strokeWidth="5" fill="none" strokeLinecap="round"
        strokeDasharray="1" pathLength={1}
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 0.62 } : { pathLength: 0 }}
        transition={{ duration: 3.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      />
      {[0, 20, 40, 65, 90, 110, 130].map((mph, i) => {
        const t = i / 6;
        const a = (-150 + t * 180) * (Math.PI / 180);
        const cx = 75, cy = 78, r = 60;
        return (
          <g key={mph}>
            <line x1={cx + (r-8)*Math.cos(a)} y1={cy + (r-8)*Math.sin(a)} x2={cx + r*Math.cos(a)} y2={cy + r*Math.sin(a)} stroke="#e8a838" strokeWidth="1.5" opacity="0.4" />
            {[0, 65, 130].includes(mph) && (
              <text x={cx + (r-16)*Math.cos(a) - 4} y={cy + (r-16)*Math.sin(a) + 3} fill="#f5f0e8" fontSize="7" opacity="0.5" style={{ fontFamily: "monospace" }}>{mph}</text>
            )}
          </g>
        );
      })}
      <g transform="translate(75,78)">
        <motion.line x1="0" y1="0" x2="0" y2="-52"
          stroke="#e8a838" strokeWidth="2.5" strokeLinecap="round"
          style={{ rotate: spring, originX: "0px", originY: "0px" }}
        />
      </g>
      <circle cx="75" cy="78" r="5" fill="#e8a838" />
      <circle cx="75" cy="78" r="2.5" fill="#1a1a1a" />
      <text x="62" y="65" fill="#e8a838" fontSize="9" opacity="0.6" style={{ fontFamily: "monospace" }}>MPH</text>
    </svg>
  );
}

function Odometer({ active }: { active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      const c = animate(0, 142857, {
        duration: 3, delay: 1.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        onUpdate: (v) => setCount(Math.floor(v)),
      });
      return c.stop;
    }, 0);
    return () => clearTimeout(t);
  }, [active]);
  return (
    <div className="flex gap-0.5">
      {count.toString().padStart(6, "0").split("").map((d, i) => (
        <div key={i} className="w-6 h-8 bg-[#111] border border-[#2a2a2a] flex items-center justify-center">
          <span className="text-[#e8a838] text-sm font-bold" style={{ fontFamily: "monospace" }}>{d}</span>
        </div>
      ))}
      <span className="ml-1 text-[9px] text-[#f5f0e8]/30 self-end mb-1" style={{ fontFamily: "monospace" }}>MI</span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll-driven liftoff
  const skyY        = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const roadRotateX = useTransform(scrollYProgress, [0.2, 0.8], ["25deg", "88deg"]);
  const roadScale   = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.7]);
  const dashOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0]);
  const aerialOp    = useTransform(scrollYProgress, [0.35, 0.75], [0, 0.85]);
  const textY       = useTransform(scrollYProgress, [0, 0.4], ["0%", "-25%"]);
  const textOp      = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const blackOp     = useTransform(scrollYProgress, [0.7, 1], [0, 0.6]);

  useEffect(() => { const t = setTimeout(() => setActive(true), 400); return () => clearTimeout(t); }, []);

  return (
    <section ref={ref} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "#050a0f" }}>

        {/* ── SKY ── */}
        <motion.div style={{ y: skyY }} className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, #030608 0%, #0d1826 30%, #1a2a40 52%, #7a5028 68%, #e8a838 80%, #c87020 88%, #1a1a1a 100%)"
          }} />
          {STARS.map((s, i) => (
            <div key={i} style={{
              position: "absolute", left: s.x + "%", top: s.y + "%",
              width: s.s + "px", height: s.s + "px",
              background: "#f5f0e8", borderRadius: "50%", opacity: s.o,
            }} />
          ))}
        </motion.div>

        {/* ── ROAD IN PERSPECTIVE ── */}
        <motion.div
          style={{ rotateX: roadRotateX, scale: roadScale }}
          className="absolute bottom-0 left-0 right-0 will-change-transform"
        >
          <div style={{
            height: "55vh",
            perspective: "600px",
            perspectiveOrigin: "50% 0%",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: "-60%", right: "-60%", height: "250%",
              transformOrigin: "bottom center",
              backgroundImage: `
                repeating-linear-gradient(to bottom, transparent 0px, transparent 50px, rgba(232,168,56,0.85) 50px, rgba(232,168,56,0.85) 90px, transparent 90px, transparent 140px),
                linear-gradient(to right, transparent calc(25% - 1.5px), rgba(245,240,232,0.6) calc(25% - 1.5px), rgba(245,240,232,0.6) 25%, transparent 25%, transparent calc(75%), rgba(245,240,232,0.6) 75%, rgba(245,240,232,0.6) calc(75% + 1.5px), transparent calc(75% + 1.5px)),
                #1c1c1c`,
              backgroundSize: "4px 140px, 100% 100%, 100% 100%",
              animation: "roadApproach 1.3s linear infinite",
            }} />
          </div>
        </motion.div>

        {/* ── AERIAL TEXTURE (fades in on scroll) ── */}
        <motion.div style={{ opacity: aerialOp }} className="absolute inset-0 pointer-events-none">
          <div style={{
            background: `
              radial-gradient(ellipse 120% 100% at 50% 50%, #0d1a14 0%, #0a1a10 60%, #050a06 100%)`,
          }} className="absolute inset-0" />
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="topo-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40,40 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" stroke="#4a6741" strokeWidth="0.5" fill="none" opacity="0.6"/>
                <path d="M40,40 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0" stroke="#4a6741" strokeWidth="0.5" fill="none" opacity="0.4"/>
                <path d="M40,40 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0" stroke="#e8a838" strokeWidth="0.5" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-bg)" />
          </svg>
        </motion.div>

        {/* ── PROGRESSIVE BLACKOUT ── */}
        <motion.div style={{ opacity: blackOp }} className="absolute inset-0 bg-[#1a1a1a] pointer-events-none" />

        {/* ── CONTENT ── */}
        <motion.div style={{ y: textY, opacity: textOp }} className="absolute inset-0 flex flex-col items-center justify-center z-10 will-change-transform">
          {/* Headline — char by char */}
          <div className="flex flex-wrap justify-center max-w-4xl px-6 mb-3">
            {HEADLINE.split("").map((ch, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.038, duration: 0.45, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f0e8] tracking-widest"
                style={{ fontFamily: "var(--font-playfair)", lineHeight: 1.1 }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="text-[#c8d8e8]/70 text-sm tracking-[0.3em] uppercase mb-10"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Every mile a memory. Every horizon a promise.
          </motion.p>

          {/* Instruments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-end gap-10"
          >
            <Speedometer active={active} />
            <div className="flex flex-col items-center gap-2 pb-2">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#e8a838]/50" style={{ fontFamily: "var(--font-dm-mono)" }}>Odometer</span>
              <Odometer active={active} />
            </div>
          </motion.div>
        </motion.div>

        {/* ── DASHBOARD SILHOUETTE ── */}
        <motion.div style={{ opacity: dashOpacity }} className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none will-change-transform">
          <svg viewBox="0 0 1440 220" className="w-full" preserveAspectRatio="none">
            {/* Main dash curve */}
            <path d="M0,220 L0,130 Q120,60 280,80 Q500,100 580,75 Q680,55 720,55 Q760,55 860,75 Q940,100 1160,80 Q1320,60 1440,130 L1440,220 Z" fill="#111" />
            {/* Dashboard top edge highlight */}
            <path d="M0,130 Q120,60 280,80 Q500,100 580,75 Q680,55 720,55 Q760,55 860,75 Q940,100 1160,80 Q1320,60 1440,130" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
            {/* Steering wheel */}
            <circle cx="720" cy="195" r="50" stroke="#2a2a2a" strokeWidth="10" fill="none" />
            <circle cx="720" cy="195" r="38" stroke="#222" strokeWidth="2" fill="none" />
            <line x1="720" y1="145" x2="720" y2="245" stroke="#2a2a2a" strokeWidth="4" />
            <line x1="670" y1="195" x2="770" y2="195" stroke="#2a2a2a" strokeWidth="4" />
            <circle cx="720" cy="195" r="10" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
            {/* Rearview mirror */}
            <rect x="660" y="58" width="120" height="30" rx="6" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1.5" />
            <rect x="664" y="62" width="112" height="22" rx="4" fill="#0d1520" opacity="0.8" />
            {/* Vent slots left */}
            {[0,1,2,3,4].map(i => <rect key={i} x={240 + i*8} y="120" width="4" height="18" rx="2" fill="#2a2a2a" />)}
            {/* Vent slots right */}
            {[0,1,2,3,4].map(i => <rect key={i} x={1180 + i*8} y="120" width="4" height="18" rx="2" fill="#2a2a2a" />)}
            {/* Center console */}
            <rect x="660" y="155" width="160" height="40" rx="4" fill="#161616" stroke="#2a2a2a" strokeWidth="1" />
            {/* Indicator lights */}
            {[-3,-1,1,3].map((x,i) => (
              <circle key={i} cx={720+x*16} cy={175} r="3" fill={i===1 ? "#e8a838" : "#1e1e1e"} opacity={i===1 ? 0.9 : 1} />
            ))}
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ opacity: textOp }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-[#e8a838]/50 to-transparent" />
          <span className="text-[8px] tracking-[0.4em] text-[#f5f0e8]/20 uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>SCROLL TO LIFT OFF</span>
        </motion.div>
      </div>
    </section>
  );
}
