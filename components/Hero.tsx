"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A05] via-[#080808] to-[#050810] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,144,58,0.08),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8903A]/20 to-transparent" />

      {/* Decorative corner lines */}
      <div className="absolute top-32 left-10 w-16 h-16 border-l border-t border-[#C8903A]/20 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-r border-b border-[#C8903A]/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-[#C8903A]" />
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Gilgit, Pakistan
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-cormorant text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-light leading-[0.95] tracking-tight text-[#F5F0E8] mb-8 max-w-4xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Curated
          <br />
          <em className="not-italic text-[#C8903A]">Around</em>
          <br />
          Your Curiosity
        </motion.h1>

        {/* Subline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-xl text-base lg:text-lg text-[#F5F0E8]/55 leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Bespoke luxury travel experiences in Pakistan — designed around
          emotion, intention, and the places that stay with you forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#destinations"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C8903A] text-[#080808] text-sm tracking-widest uppercase font-medium hover:bg-[#D4A855] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Explore Our Journeys
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F0E8]/25 text-[#F5F0E8]/70 text-sm tracking-widest uppercase hover:border-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Our Philosophy
          </a>
        </motion.div>

        {/* Tagline at bottom */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 pt-8 border-t border-[#222222]"
        >
          <p
            className="font-cormorant text-lg text-[#F5F0E8]/30 italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            "Beyond Travel. We Curate Dreams."
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/25"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#C8903A]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
