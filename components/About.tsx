"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-[#0C0C0C] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: headline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
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
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05] mb-10"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              We Don&apos;t Sell Tours.
              <br />
              <em className="not-italic text-[#C8903A]">We Build Journeys.</em>
            </h2>

            {/* Photo */}
            <div className="relative overflow-hidden">
              <Image
                src="https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg"
                alt="Aerial view of Gilgit-Baltistan"
                width={700}
                height={460}
                className="w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right: body */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Secondary photo */}
            <div className="relative overflow-hidden mb-10">
              <Image
                src="https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6385-768x1024.jpeg"
                alt="Mountain landscape Pakistan"
                width={560}
                height={740}
                className="w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 to-transparent" />
            </div>

            <p
              className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Every itinerary we craft is built from scratch — around who you
              are, how you travel, and what you want to feel. Not a template.
              Not a shortcut. A conversation.
            </p>

            <blockquote
              className="font-cormorant text-xl text-[#F5F0E8]/40 italic border-l-2 border-[#C8903A]/40 pl-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              &ldquo;Travel, at its highest form, is more than movement — it is
              emotion in motion.&rdquo;
            </blockquote>
          </motion.div>
        </div>

        {/* Stat row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 pt-12 border-t border-[#222222] flex flex-col sm:flex-row gap-10 sm:gap-0 sm:divide-x sm:divide-[#222222]"
        >
          {[
            { stat: "6", label: "Destinations" },
            { stat: "100%", label: "Fully Bespoke" },
            { stat: "Gilgit", label: "Based in Pakistan" },
          ].map((item) => (
            <div key={item.stat} className="sm:px-10 first:pl-0 last:pr-0">
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
        </motion.div>
      </div>
    </section>
  );
}
