"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Hunza",
    price: "$1,300",
    description: "Ancient forts, turquoise lakes, and a sky that never ends.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
  },
  {
    name: "Skardu Valley",
    price: "$1,300",
    description: "Where the Karakoram meets silence.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
  },
  {
    name: "Ghizer Valley",
    price: "$1,800",
    description: "Pakistan's most unspoiled valley. Still yours to discover.",
    image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
  },
  {
    name: "Rakaposhi Basecamp",
    price: "$1,350",
    description: "A trek to the foot of one of Pakistan's great mountains.",
    image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
  },
  {
    name: "Chitral",
    price: "$1,900",
    description: "Ancient kingdoms, mountain passes, and the Hindu Kush.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
  },
  {
    name: "Astore Valley",
    price: "$1,400",
    description: "Remote. Serene. The kind of place you don't forget.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-[#080808] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
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
              Our Destinations
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
            Remarkable Places.
            <br />
            <em className="not-italic text-[#C8903A]">Even Better Stories.</em>
          </motion.h2>
        </div>

        {/* Grid — 3 cols on desktop, 2 on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Photo */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized
                loading="lazy"
              />

              {/* Permanent dark gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />

              {/* Gold shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8903A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Price badge — top right */}
              <div className="absolute top-5 right-5 px-3 py-1 bg-[#080808]/60 backdrop-blur-sm border border-[#C8903A]/30">
                <span
                  className="font-cormorant text-sm text-[#C8903A]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  from {dest.price}
                </span>
              </div>

              {/* Content — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <h3
                  className="font-cormorant text-3xl font-light text-[#F5F0E8] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {dest.name}
                </h3>

                {/* Description + CTA: hidden at rest, revealed on hover */}
                <div className="overflow-hidden">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p
                      className="text-[#F5F0E8]/65 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {dest.description}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8903A] border-b border-[#C8903A]/40 pb-0.5 hover:border-[#C8903A] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Enquire now
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Left gold accent bar */}
              <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#C8903A] group-hover:h-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
