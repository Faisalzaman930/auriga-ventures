"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Auriga made our trip completely stress free. Everything was planned beautifully, and we could just relax and enjoy the journey.",
    name: "Grace A",
    title: "Entrepreneur",
  },
  {
    quote:
      "Auriga Ventures understands that luxury travel is emotional. Every moment felt intentional — serene, exclusive, and effortless. We've traveled extensively, but this was different.",
    name: "Sarah Ibrahim",
    title: "Developer",
  },
  {
    quote:
      "Auriga didn't just plan a trip, they curated an experience. Every detail, from our private stay to the seamless transfers, reflected precision and passion. This is luxury travel planning at its finest.",
    name: "Zerish Zahra",
    title: "Traveller",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#080808] py-32 lg:py-44">
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
              What Clients Say
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Journeys That Stay
            <br />
            <em className="not-italic text-[#C8903A]">With You.</em>
          </motion.h2>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex gap-5 overflow-x-auto md:grid md:grid-cols-3 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-start bg-[#0F0F0F] border border-[#1E1E1E] p-8 lg:p-10 flex flex-col justify-between"
            >
              {/* Gold quote mark */}
              <div>
                <span
                  className="font-cormorant text-6xl text-[#C8903A]/30 leading-none block mb-4 -mt-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#F5F0E8]/65 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#222222]">
                <p
                  className="font-cormorant text-lg text-[#F5F0E8] font-medium"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs tracking-[0.15em] uppercase text-[#C8903A]/70 mt-1"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
