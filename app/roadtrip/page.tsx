"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/roadtrip/Hero";
import GrainOverlay from "@/components/roadtrip/GrainOverlay";

const CompassCursor = dynamic(() => import("@/components/roadtrip/CompassCursor"), { ssr: false });
const LoadingCurtain = dynamic(() => import("@/components/roadtrip/LoadingCurtain"), { ssr: false });

const DESTINATIONS = [
  {
    name: "Hunza",
    tagline: "Ancient forts, turquoise lakes, and a sky that never ends.",
    price: "$1,300",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    drive: "18 hrs from Islamabad",
  },
  {
    name: "Skardu Valley",
    tagline: "Where the Karakoram meets silence.",
    price: "$1,300",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
    drive: "22 hrs from Islamabad",
  },
  {
    name: "Ghizer Valley",
    tagline: "Pakistan's most unspoiled valley. Still yours to discover.",
    price: "$1,800",
    image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
    drive: "14 hrs from Islamabad",
  },
  {
    name: "Rakaposhi Basecamp",
    tagline: "A trek to the foot of one of Pakistan's great mountains.",
    price: "$1,350",
    image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
    drive: "16 hrs from Islamabad",
  },
  {
    name: "Chitral",
    tagline: "Ancient kingdoms, mountain passes, and the Hindu Kush.",
    price: "$1,900",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
    drive: "10 hrs from Islamabad",
  },
  {
    name: "Astore Valley",
    tagline: "Remote. Serene. The kind of place you don't forget.",
    price: "$1,400",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
    drive: "20 hrs from Islamabad",
  },
];

function DestCard({ dest, index }: { dest: typeof DESTINATIONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#e8a838]/0 group-hover:bg-[#e8a838]/8 transition-colors duration-500" />

        {/* Drive tag */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-[#e8a838]/70 border border-[#e8a838]/25 px-2.5 py-1"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {dest.drive}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8a838]/60 mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>
            From {dest.price} / person
          </p>
          <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            {dest.name}
          </h3>
          <p className="text-[#c8d8e8]/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-mono)" }}>
            {dest.tagline}
          </p>

          <motion.div
            className="mt-4 flex items-center gap-2 text-[#e8a838]"
            initial={{ x: -6, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Explore route
            </span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 4h14M10 1l4 3-4 3" stroke="#e8a838" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-36 px-6 overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Decorative topographic lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
        <defs>
          <pattern id="topo-intro" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60,60 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" stroke="#e8a838" strokeWidth="0.8" fill="none" />
            <path d="M60,60 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" stroke="#e8a838" strokeWidth="0.8" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-intro)" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-[#e8a838]/40" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/60" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Who we are
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-[#f5f0e8] mb-8 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Pakistan is not a
          <br />
          <span className="text-[#e8a838]">destination.</span>
          <br />
          It's a road trip.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#c8d8e8]/55 text-lg leading-relaxed max-w-2xl mb-6"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Auriga Ventures curates road journeys through Pakistan's northern mountains — Hunza, Skardu, Chitral, and beyond.
          We don't just book trips. We map the routes, time the light, and make sure the car doesn't break down on a pass at 4,700m.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[#c8d8e8]/40 text-base leading-relaxed max-w-xl"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Small groups. Real roads. No compromises.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-[#2a2a2a]"
        >
          {[
            { n: "12+", label: "Routes mapped" },
            { n: "6", label: "Destinations" },
            { n: "4,700m", label: "Highest pass" },
            { n: "2014", label: "On the road since" },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#e8a838]" style={{ fontFamily: "var(--font-playfair)" }}>{n}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#f5f0e8]/30 mt-1" style={{ fontFamily: "var(--font-dm-mono)" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#0d0d0d" }} className="pb-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-[#e8a838]/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/60" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Where the road leads
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Destinations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DESTINATIONS.map((dest, i) => (
            <DestCard key={dest.name} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 px-6 overflow-hidden" style={{ background: "#111" }}>
      <div className="absolute inset-0 bg-[#e8a838]/[0.03]" />
      {/* Horizontal rule lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8a838]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e8a838]/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#e8a838]/50 mb-8"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Ready to drive?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-[#f5f0e8] mb-8 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Your road is
          <br />
          <span className="text-[#e8a838]">waiting.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#c8d8e8]/45 text-base mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Plan your journey with Auriga Ventures. Explore every route, every stop, and every memory waiting to be made.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e8a838] text-[#0d0d0d] text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#f5c050] transition-colors duration-300"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Explore All Trips
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#e8a838]/30 text-[#f5f0e8]/70 text-sm tracking-[0.2em] uppercase hover:border-[#e8a838]/60 hover:text-[#f5f0e8] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Book a Route
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function RoadtripPage() {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <main className="bg-[#0d0d0d] min-h-screen cursor-none">
      <GrainOverlay />
      <CompassCursor />
      {!curtainDone && <LoadingCurtain onDone={() => setCurtainDone(true)} />}
      <Hero />
      <IntroSection />
      <DestinationsSection />
      <CTASection />
    </main>
  );
}
