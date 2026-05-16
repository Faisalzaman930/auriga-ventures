"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Handpicked Properties",
    body: "Every hotel, lodge, and camp in our network is chosen personally. No algorithms. No commissions driving the choice.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
  },
  {
    number: "02",
    title: "Fully Tailored",
    body: "We start with a blank page for every client. Your itinerary is built around your pace, your interests, and the experiences only you'll have.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
  },
  {
    number: "03",
    title: "Seamless from Start to End",
    body: "Transfers, permits, guides, meals — every detail is handled before you land. You travel. We handle the rest.",
    image: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-[#0C0C0C] py-32 lg:py-44 overflow-hidden">
      {/* Atmospheric full-bleed background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          unoptimized
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 lg:mb-28 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#C8903A]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#C8903A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              The Auriga Way
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Luxury Is a Feeling,
            <br />
            <em className="not-italic text-[#C8903A]">Not a Price Tag.</em>
          </motion.h2>
        </div>

        {/* Pillars — each with a photo thumbnail */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="group"
            >
              {/* Photo thumbnail */}
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0C0C0C]/40 group-hover:bg-[#0C0C0C]/20 transition-colors duration-500" />
                <span
                  className="absolute top-3 left-3 font-cormorant text-3xl text-[#C8903A]/50 font-light"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {pillar.number}
                </span>
              </div>

              <div className="border-t border-[#222222] pt-6 pb-10">
                <h3
                  className="font-cormorant text-2xl text-[#F5F0E8] font-light mb-4 leading-snug group-hover:text-[#C8903A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[#F5F0E8]/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand values strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-[#222222] flex flex-wrap gap-6"
        >
          {["Unique.", "Different.", "Daring."].map((word) => (
            <span
              key={word}
              className="font-cormorant text-3xl text-[#F5F0E8]/20 font-light hover:text-[#C8903A]/40 transition-colors duration-300 cursor-default"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
