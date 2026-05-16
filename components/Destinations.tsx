"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Hunza",
    price: "$1,300",
    description: "Ancient forts, turquoise lakes, and a sky that never ends.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    gradient: "from-[#1A0F05] via-[#2A1A08] to-[#0F0A03]",
  },
  {
    name: "Skardu Valley",
    price: "$1,300",
    description: "Where the Karakoram meets silence.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
    gradient: "from-[#050D1A] via-[#081525] to-[#030810]",
  },
  {
    name: "Ghizer Valley",
    price: "$1,800",
    description: "Pakistan's most unspoiled valley. Still yours to discover.",
    image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
    gradient: "from-[#051A0F] via-[#082218] to-[#030F08]",
  },
  {
    name: "Rakaposhi Basecamp",
    price: "$1,350",
    description: "A trek to the foot of one of Pakistan's great mountains.",
    image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
    gradient: "from-[#1A1505] via-[#252008] to-[#0F0C03]",
  },
  {
    name: "Chitral",
    price: "$1,900",
    description: "Ancient kingdoms, mountain passes, and the Hindu Kush.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
    gradient: "from-[#1A050F] via-[#220818] to-[#0F0308]",
  },
  {
    name: "Astore Valley",
    price: "$1,400",
    description: "Remote. Serene. The kind of place you don't forget.",
    image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
    gradient: "from-[#0A051A] via-[#120820] to-[#05030F]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative border border-[#1E1E1E] hover:border-[#C8903A]/40 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Real photo */}
              <div className="absolute inset-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-75`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent" />
              </div>

              <div className="relative p-8 lg:p-10 min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="font-cormorant text-3xl lg:text-4xl font-light text-[#F5F0E8] leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {dest.name}
                    </h3>
                    <span
                      className="font-cormorant text-xl text-[#C8903A] ml-4 mt-1 whitespace-nowrap"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      from {dest.price}
                    </span>
                  </div>
                  <p
                    className="text-[#F5F0E8]/70 text-sm leading-relaxed max-w-sm"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {dest.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <a
                    href="#contact"
                    className="text-sm tracking-widest uppercase text-[#C8903A] transition-all duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Enquire
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#C8903A] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
