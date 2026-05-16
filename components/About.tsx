"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section id="about" ref={ref} className="bg-[#0C0C0C] py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: editorial photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            {/* Main large portrait photo */}
            <motion.div style={{ y: y1 }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: 580 }}>
                <Image
                  src="https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg"
                  alt="Pakistan mountain journey"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 to-transparent" />
              </div>
            </motion.div>

            {/* Smaller overlapping landscape photo — bottom right offset */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-8 w-52 lg:w-64 overflow-hidden border-4 border-[#0C0C0C] shadow-2xl"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg"
                  alt="Aerial Gilgit-Baltistan"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Gold accent line */}
            <div className="absolute top-8 -left-4 w-0.5 h-24 bg-gradient-to-b from-[#C8903A] to-transparent" />
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:pl-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#C8903A]" />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Our Mission
              </span>
            </div>
            <h2
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              We Don&apos;t Sell Tours.
              <br />
              <em className="not-italic text-[#C8903A]">We Build Journeys.</em>
            </h2>

            <p
              className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Every itinerary we craft is built from scratch — around who you
              are, how you travel, and what you want to feel. Not a template.
              Not a shortcut. A conversation.
            </p>

            <blockquote
              className="font-cormorant text-xl text-[#F5F0E8]/40 italic border-l-2 border-[#C8903A]/40 pl-6 mb-12"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              &ldquo;Travel, at its highest form, is more than movement — it is
              emotion in motion.&rdquo;
            </blockquote>

            {/* Stat row */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-[#222222] pt-10 border-t border-[#222222]">
              {[
                { stat: "6", label: "Destinations" },
                { stat: "100%", label: "Fully Bespoke" },
                { stat: "Gilgit", label: "Based in Pakistan" },
              ].map((item) => (
                <div key={item.stat} className="sm:px-8 first:pl-0 last:pr-0">
                  <p
                    className="font-cormorant text-4xl text-[#C8903A] font-light mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/40"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
