"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── DATA ─── */
const DESTINATIONS = [
  { name: "Hunza",             region: "Gilgit-Baltistan", tag: "Most Popular",        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",      price: "From $1,300", duration: "7–10 days" },
  { name: "Skardu Valley",     region: "Gilgit-Baltistan", tag: "Iconic",              image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",                  price: "From $1,300", duration: "8–12 days" },
  { name: "Chitral",           region: "KPK",              tag: "Off the beaten path", image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",          price: "From $1,900", duration: "7–9 days"  },
  { name: "Ghizer Valley",     region: "Gilgit-Baltistan", tag: "Hidden Gem",          image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",     price: "From $1,800", duration: "6–8 days"  },
  { name: "Rakaposhi",         region: "Nagar Valley",     tag: "Adventure",           image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",                                       price: "From $1,350", duration: "5–7 days"  },
  { name: "Astore Valley",     region: "Gilgit-Baltistan", tag: "Serene",              image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",         price: "From $1,400", duration: "6–9 days"  },
  { name: "Deosai Plains",     region: "Skardu",           tag: "Extraordinary",       image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",               price: "From $1,500", duration: "4–6 days"  },
  { name: "Fairy Meadows",     region: "Diamer",           tag: "Bucket List",         image: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",                                        price: "From $1,200", duration: "3–5 days"  },
];

const TESTIMONIALS = [
  { quote: "Auriga made our trip completely stress free. Everything was planned beautifully — we could just relax and enjoy the journey.", name: "Grace A.", origin: "Lahore → Hunza" },
  { quote: "Auriga Ventures understands that luxury travel is emotional. Every moment felt intentional, serene, exclusive, and effortless.", name: "Sarah Ibrahim", origin: "Karachi → Skardu" },
  { quote: "Auriga didn't just plan a trip — they curated an experience. Every detail reflected precision and passion.", name: "Zerish Zahra", origin: "Dubai → Chitral" },
  { quote: "I've traveled all over the world but nothing prepared me for the raw beauty of Pakistan's north. Auriga showed me why.", name: "James Whitfield", origin: "London → Gilgit-Baltistan" },
  { quote: "From our private glamping in Deosai to the sunrise over Nanga Parbat — every single moment was extraordinary.", name: "Amina Tariq", origin: "Islamabad → Astore Valley" },
  { quote: "The team's knowledge of the region is unmatched. We felt safe, looked after, and constantly amazed. We'll be back.", name: "Raza & Farah Khan", origin: "Karachi → Hunza" },
];

const WHY_US = [
  { title: "Award-winning planners",    body: "Over a decade crafting journeys through Pakistan's north. Every itinerary is built from experience, not templates." },
  { title: "No planning fees",          body: "Our expertise costs you nothing extra. You pay for the trip, not the consultation." },
  { title: "No obligation quotes",      body: "Tell us your dream. We'll map it out. No pressure, no commitment until you're ready." },
  { title: "24/7 on-ground support",    body: "Our team is in the field, not a call centre. Reachable wherever you are, whenever you need." },
  { title: "Expert private guides",     body: "Born and raised in the north. They know the secret paths, hidden viewpoints, and real stories." },
];

const TABS = ["By Destination", "Adventure", "Luxury Stays", "Road Trips"];

/* ═══════════════════════════════════════════
   NAV
═══════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/0"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="/new-home" className="flex items-baseline gap-1 shrink-0">
          <span className="text-[22px] font-semibold tracking-wide text-[#111]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Auriga</span>
          <span className="text-[22px] font-light text-[#C8903A]"              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
        </a>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {["Destinations", "Experiences", "Inspiration", "About"].map(l => (
            <a key={l} href="#"
              className="text-[11px] tracking-[0.12em] uppercase text-[#222]/60 hover:text-[#111] transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >{l}</a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+923000000000" className="text-[11px] text-[#555] hover:text-[#111] transition-colors duration-200" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            +92 300 000 0000
          </a>
          <a href="#contact"
            className="px-5 py-2.5 bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Enquire Now
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block h-px w-5 bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}/>
          <span className={`block h-px w-5 bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block h-px w-5 bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#eee] px-6 pb-8 pt-6 flex flex-col gap-5"
          >
            {["Destinations", "Experiences", "Inspiration", "About", "Contact"].map(l => (
              <a key={l} href="#" onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-[#333] hover:text-[#C8903A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >{l}</a>
            ))}
            <a href="#contact"
              className="mt-2 inline-block text-center px-5 py-3 bg-[#111] text-white text-xs tracking-[0.12em] uppercase font-medium"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >Enquire Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ═══════════════════════════════════════════
   HERO  — White background, large text, photo beside/below
═══════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section ref={ref} className="bg-[#FAFAF8] pt-[72px] min-h-screen grid lg:grid-cols-2">

      {/* Left — text */}
      <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-20 lg:py-0 order-2 lg:order-1">
        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-7"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Bespoke luxury travel · Pakistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[52px] md:text-[64px] lg:text-[72px] font-light leading-[1.02] text-[#111] mb-7"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          The luxury<br />travel experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.7 }}
          className="text-[#444] text-base leading-relaxed mb-10 max-w-sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Tailor-made journeys through Pakistan's north. Award-winning service. Est.&nbsp;2014.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a href="#destinations"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#111] text-white text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >Explore Our Trips</a>
          <a href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-[#ccc] text-[#111] text-[11px] tracking-[0.16em] uppercase font-medium hover:border-[#C8903A] hover:text-[#C8903A] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >Plan My Trip</a>
        </motion.div>

        {/* Trustpilot-style row */}
        <motion.div
          initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-14 flex items-center gap-3"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C8903A"><path d="M7 0l1.76 4.27H13.5l-3.83 2.78 1.46 4.5L7 9.01l-4.13 2.54 1.46-4.5L.5 4.27h4.74L7 0z"/></svg>
            ))}
          </div>
          <span className="text-[11px] text-[#666]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Rated excellent by our travellers</span>
        </motion.div>
      </div>

      {/* Right — photo */}
      <div className="relative min-h-[55vw] lg:min-h-0 overflow-hidden order-1 lg:order-2">
        <motion.div style={{ y: imgY }} className="absolute inset-[-8%] will-change-transform">
          <Image
            src="https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg"
            alt="Pakistan mountains"
            fill className="object-cover" unoptimized priority
          />
        </motion.div>
        {/* Subtle left fade into white */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAFAF8] to-transparent lg:block hidden" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TAGLINE STRIP
═══════════════════════════════════════════ */
function TaglineStrip() {
  return (
    <div className="bg-[#111] py-5 px-6 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
        {[...Array(3)].map((_, rep) =>
          ["Hunza", "Skardu", "Chitral", "Deosai", "Rakaposhi", "Gilgit-Baltistan", "Fairy Meadows", "Astore"].map(n => (
            <span key={`${rep}-${n}`} className="text-[11px] tracking-[0.35em] uppercase text-white/40 inline-flex items-center gap-8" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              {n} <span className="text-[#C8903A]">·</span>
            </span>
          ))
        )}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }
        .animate-marquee { animation: marquee 24s linear infinite; }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PHILOSOPHY
═══════════════════════════════════════════ */
function Philosophy() {
  return (
    <section className="bg-white py-28 lg:py-36 px-6">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Our philosophy</p>
            <h2 className="text-[44px] md:text-[56px] font-light text-[#111] leading-[1.06] mb-7" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Every journey starts<br /><em>with a feeling.</em>
            </h2>
            <p className="text-[#555] text-[15px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We don't believe in itineraries built from templates. Pakistan's north is too singular, too alive — too full of moments that can't be scheduled. We start with you: your pace, your curiosity, what you want to feel on the other side of the journey.
            </p>
            <p className="text-[#888] text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Over a decade of journeys through Hunza, Skardu, Chitral and beyond. No two alike. All extraordinary.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-3 text-[#111] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#C8903A] hover:gap-5 transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Get In Touch
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </motion.div>

          {/* Right image grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg" alt="Journey" fill className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col gap-3 pt-10">
              <div className="relative overflow-hidden flex-1">
                <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg" alt="Glamping Deosai" fill className="object-cover" unoptimized />
              </div>
              <div className="bg-[#C8903A] p-6">
                <p className="text-white text-3xl font-light mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>2014</p>
                <p className="text-white/70 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Est. in Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="bg-[#F7F5F2] py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 mb-12">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>What our travellers say</p>
        <h2 className="text-[40px] md:text-[48px] font-light text-[#111]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Real journeys. Real stories.</h2>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-4 px-6 lg:px-10 [&::-webkit-scrollbar]:hidden">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="shrink-0 w-[300px] md:w-[340px] bg-white border border-[#e8e4de] p-7 flex flex-col">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-5 text-[#C8903A]">
              <path d="M0 18V11C0 4.8 3.4 1.2 10.2 0l1.2 2.2C8 3.1 6.5 5 6.1 8H11V18H0ZM13 18V11C13 4.8 16.4 1.2 23.2 0l1.2 2.2C21 3.1 19.5 5 19.1 8H24V18H13Z" fill="#C8903A" fillOpacity="0.25"/>
            </svg>
            <p className="text-[#444] text-[15px] leading-relaxed mb-6 italic flex-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>"{t.quote}"</p>
            <div className="pt-5 border-t border-[#eee]">
              <p className="text-[#111] text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t.name}</p>
              <p className="text-[#C8903A] text-[11px] tracking-wider mt-0.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t.origin}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DESTINATIONS
═══════════════════════════════════════════ */
function Destinations() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="destinations" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Start your journey</p>
            <h2 className="text-[44px] md:text-[54px] font-light text-[#111]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Where do you want to go?</h2>
          </div>
          <a href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-[#666] text-[11px] tracking-[0.18em] uppercase hover:text-[#C8903A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            View all
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-10 border-b border-[#e8e4de] overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)}
              className={`shrink-0 px-5 py-3 text-[11px] tracking-[0.15em] uppercase border-b-2 -mb-px transition-all duration-250 ${
                activeTab === i
                  ? "border-[#C8903A] text-[#C8903A]"
                  : "border-transparent text-[#888] hover:text-[#333]"
              }`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >{tab}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {DESTINATIONS.map((d, i) => (
            <motion.a
              key={d.name} href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer block"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06] will-change-transform" unoptimized />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#333]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.tag}</span>
                </div>
                {/* Arrow on hover */}
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M0 5h10M6 1l4 4-4 4" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8903A] mb-1" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.region}</p>
              <h3 className="text-[18px] font-light text-[#111] leading-snug mb-1 group-hover:text-[#C8903A] transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{d.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[11px] text-[#999]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.duration}</span>
                <span className="text-[11px] text-[#666]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.price}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FULL BLEED CTA
═══════════════════════════════════════════ */
function FullBleed() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[65vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <Image src="https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg" alt="Aerial" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <p className="text-[11px] tracking-[0.5em] uppercase text-white/60 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Their future is out there</p>
        <h2 className="text-[56px] md:text-[80px] lg:text-[96px] font-light text-white leading-[0.95] mb-10" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Find <em>it.</em>
        </h2>
        <a href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/50 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-[#111] transition-all duration-300"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Start planning
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHY US
═══════════════════════════════════════════ */
function WhyUs() {
  return (
    <section className="bg-[#F7F5F2] py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Why Auriga</p>
          <h2 className="text-[44px] md:text-[54px] font-light text-[#111] max-w-2xl mx-auto leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            What we do and why we do it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-full border border-[#C8903A]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8903A] text-lg">{["◈","○","◇","⬡","◎"][i]}</span>
              </div>
              <h3 className="text-[15px] font-medium text-[#111] mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-12 border-t border-[#e8e4de] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{n:"12+",l:"Routes mapped"},{n:"500+",l:"Journeys completed"},{n:"4,700m",l:"Highest camp"},{n:"2014",l:"Est. in Pakistan"}].map(({n,l})=>(
            <div key={l}>
              <p className="text-[42px] font-light text-[#111] leading-none mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{n}</p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#999]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   GUIDE SECTION (editorial split)
═══════════════════════════════════════════ */
function GuideSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}
          >
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%] will-change-transform">
              <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg" alt="Pakistan landscape" fill className="object-cover" unoptimized />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Our guide to luxury travel</p>
            <h2 className="text-[44px] md:text-[52px] font-light text-[#111] leading-[1.06] mb-7" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Luxury isn't a room.<br /><em>It's a feeling.</em>
            </h2>
            <p className="text-[#555] text-[15px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Imagine waking to the sound of glacial rivers from a canvas tent perched above the Hunza Valley — or hiking in peaceful solitude through Deosai, the world's second-highest plateau, where brown bears still roam and the horizon disappears into sky.
            </p>
            <p className="text-[#888] text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Luxury in Pakistan is not what you find at a five-star hotel in a city. It's privacy. It's access. It's a guide who has spent his life learning a place so that you can feel it fully in a week.
            </p>
            <a href="#"
              className="inline-flex items-center gap-3 text-[#111] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#C8903A] hover:gap-5 transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Continue reading
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PRESS STRIP
═══════════════════════════════════════════ */
function Press() {
  return (
    <div className="bg-[#F7F5F2] border-y border-[#e8e4de] py-14 px-6">
      <div className="max-w-[1320px] mx-auto">
        <p className="text-center text-[10px] tracking-[0.45em] uppercase text-[#aaa] mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>As featured in</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {["Forbes", "Travel + Leisure", "Condé Nast", "Vogue Pakistan", "Dawn"].map(p => (
            <span key={p} className="text-[#bbb] text-xl font-light tracking-widest hover:text-[#888] transition-colors duration-300 cursor-default" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="bg-white py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C8903A] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Ready to start?</p>
            <h2 className="text-[44px] md:text-[54px] font-light text-[#111] leading-[1.06] mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Tell us about<br /><em>your journey.</em>
            </h2>
            <p className="text-[#666] text-[15px] leading-relaxed mb-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              No obligation. No planning fees. Just a conversation about where you want to go and how you want to feel when you get there.
            </p>
            <div className="flex flex-col gap-6">
              {[
                {label:"Email",      val:"hello@aurigaventure.com"},
                {label:"Phone",      val:"+92 300 000 0000"},
                {label:"Based in",   val:"Islamabad, Pakistan"},
              ].map(({label,val}) => (
                <div key={label} className="flex items-start gap-4 pb-6 border-b border-[#f0ece6]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#aaa] w-16 shrink-0 mt-0.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{label}</p>
                  <p className="text-[#333] text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {["First name","Last name"].map(p => (
                <div key={p}>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{p}</label>
                  <input type="text" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#C8903A] transition-colors duration-300 bg-white" style={{ fontFamily: "var(--font-inter), sans-serif" }} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Email</label>
              <input type="email" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#C8903A] transition-colors duration-300 bg-white" style={{ fontFamily: "var(--font-inter), sans-serif" }} />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Where do you want to go?</label>
              <select className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#555] focus:outline-none focus:border-[#C8903A] transition-colors duration-300 bg-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <option value="">Select a destination</option>
                {DESTINATIONS.map(d => <option key={d.name}>{d.name}</option>)}
                <option value="unsure">Not sure yet — help me decide</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Tell us more</label>
              <textarea rows={4} placeholder="Group size, dates, special requests…" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] placeholder-[#ccc] focus:outline-none focus:border-[#C8903A] transition-colors duration-300 bg-white resize-none" style={{ fontFamily: "var(--font-inter), sans-serif" }} />
            </div>
            <button type="submit" className="mt-1 w-full py-4 bg-[#111] text-white text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#C8903A] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Start Planning →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#111] py-16 px-6">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[22px] font-semibold text-white" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Auriga</span>
              <span className="text-[22px] font-light text-[#C8903A]"  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
            </div>
            <p className="text-white/30 text-sm italic mb-4 max-w-xs" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Beyond Travel. We Curate Dreams.</p>
            <p className="text-white/20 text-xs leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Bespoke luxury journeys through Pakistan's northern mountains. Est. 2014.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Explore</p>
            {["Destinations","Experiences","About Us","Inspiration","Contact"].map(l => (
              <a key={l} href="#" className="block text-sm text-white/35 hover:text-white/70 mb-2.5 transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
            ))}
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Info</p>
            {["Privacy Policy","Terms & Conditions","FAQs","Sustainability"].map(l => (
              <a key={l} href="#" className="block text-sm text-white/35 hover:text-white/70 mb-2.5 transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8">
          <p className="text-white/20 text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>© 2026 Auriga Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram","YouTube","LinkedIn"].map(s => (
              <a key={s} href="#" className="text-[11px] tracking-[0.12em] uppercase text-white/20 hover:text-white/50 transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function NewHomePage() {
  return (
    <div className="bg-[#FAFAF8]">
      <Nav />
      <Hero />
      <TaglineStrip />
      <Philosophy />
      <Testimonials />
      <Destinations />
      <FullBleed />
      <WhyUs />
      <GuideSection />
      <Press />
      <Contact />
      <Footer />
    </div>
  );
}
