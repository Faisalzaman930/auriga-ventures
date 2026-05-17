"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── DATA ─── */
const DESTINATIONS = [
  { name: "Hunza", region: "Gilgit-Baltistan", tag: "Most Popular", image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg", price: "From $1,300", duration: "7–10 days" },
  { name: "Skardu Valley", region: "Gilgit-Baltistan", tag: "Iconic", image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg", price: "From $1,300", duration: "8–12 days" },
  { name: "Chitral", region: "KPK", tag: "Off-the-beaten-path", image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg", price: "From $1,900", duration: "7–9 days" },
  { name: "Ghizer Valley", region: "Gilgit-Baltistan", tag: "Hidden Gem", image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg", price: "From $1,800", duration: "6–8 days" },
  { name: "Rakaposhi Basecamp", region: "Nagar Valley", tag: "Adventure", image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg", price: "From $1,350", duration: "5–7 days" },
  { name: "Astore Valley", region: "Gilgit-Baltistan", tag: "Serene", image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg", price: "From $1,400", duration: "6–9 days" },
  { name: "Deosai Plains", region: "Skardu", tag: "Extraordinary", image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg", price: "From $1,500", duration: "4–6 days" },
  { name: "Fairy Meadows", region: "Diamer", tag: "Bucket List", image: "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg", price: "From $1,200", duration: "3–5 days" },
];

const TABS = ["By Destination", "Adventure", "Luxury Stays", "Road Trips"];

const TESTIMONIALS = [
  { quote: "Auriga made our trip completely stress free. Everything was planned beautifully, and we could just relax and enjoy the journey.", name: "Grace A.", origin: "Lahore → Hunza" },
  { quote: "Auriga Ventures understands that luxury travel is emotional. Every moment felt intentional — serene, exclusive, and effortless.", name: "Sarah Ibrahim", origin: "Karachi → Skardu" },
  { quote: "Auriga didn't just plan a trip, they curated an experience. Every detail reflected precision and passion. This is luxury travel at its finest.", name: "Zerish Zahra", origin: "Dubai → Chitral" },
  { quote: "I've traveled all over the world, but nothing prepared me for the raw beauty of Pakistan's north. Auriga showed me why this place is special.", name: "James Whitfield", origin: "London → Gilgit-Baltistan" },
  { quote: "From our private glamping setup in Deosai to the sunrise over Nanga Parbat — every single moment was extraordinary.", name: "Amina Tariq", origin: "Islamabad → Astore Valley" },
  { quote: "The team's knowledge of the region is unmatched. We felt safe, looked after, and constantly amazed. We'll be back.", name: "Raza & Farah Khan", origin: "Karachi → Hunza" },
];

const WHY_US = [
  { icon: "◈", title: "Bespoke by design", body: "No templates. No group tours. Every itinerary starts with a blank page and your story." },
  { icon: "◎", title: "No planning fees", body: "Our expertise costs you nothing extra. You pay for the trip, not the planning." },
  { icon: "⬡", title: "24/7 on-ground support", body: "Our team is in the field, not a call centre. Reachable whenever you need us." },
  { icon: "◇", title: "Handpicked properties", body: "Every camp, lodge, and hotel is personally vetted. We stay there so you know it's right." },
  { icon: "○", title: "Expert local guides", body: "Born and raised in the north. They know the secret paths, the hidden viewpoints, the real stories." },
];

const PRESS = ["Forbes", "Travel + Leisure", "Condé Nast", "Vogue Pakistan", "Dawn"];

/* ─── COMPONENTS ─── */

function NewNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="text-2xl font-semibold tracking-wide text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Auriga</span>
          <span className="text-2xl font-light text-[#C8903A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Destinations", "Experiences", "About", "Inspiration"].map(l => (
            <a key={l} href="#" className="text-[11px] tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-[11px] tracking-[0.18em] uppercase text-white/40 hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>+92 300 0000000</a>
          <a href="#contact" className="px-5 py-2.5 bg-[#C8903A] text-[#0a0a0a] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#e0a84a] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Plan My Trip
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 pb-8 pt-6 flex flex-col gap-6"
          >
            {["Destinations", "Experiences", "About", "Inspiration", "Contact"].map(l => (
              <a key={l} href="#" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
            ))}
            <a href="#contact" className="mt-2 inline-block px-5 py-3 bg-[#C8903A] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-semibold text-center" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Plan My Trip</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const op = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Bg image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110 will-change-transform">
        <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg" alt="Pakistan mountains" fill className="object-cover" unoptimized priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: op }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#C8903A] mb-6"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Bespoke luxury travel · Pakistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-light text-white leading-[0.95] mb-8 max-w-5xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          The luxury travel experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.65, duration: 0.8 }}
          className="text-white/60 text-base md:text-lg mb-10 max-w-md"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Tailor-made journeys through Pakistan's north. Award-winning service. Est. 2014.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#destinations" className="px-8 py-4 bg-[#C8903A] text-[#0a0a0a] text-xs tracking-[0.22em] uppercase font-semibold hover:bg-[#e0a84a] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Explore Our Trips
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/30 text-white text-xs tracking-[0.22em] uppercase hover:border-white/60 hover:bg-white/5 transition-all duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Plan My Trip
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/25" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Scroll</span>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-44 overflow-hidden">
      {/* Subtle bg image */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-6%] pointer-events-none">
        <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg" alt="" fill className="object-cover opacity-[0.06]" unoptimized />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#C8903A]/50" />
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/70" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Our philosophy</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Every journey starts<br /><em>with a feeling.</em>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            We don't believe in itineraries built from templates. Pakistan's north is too singular, too alive, too full of moments that can't be scheduled. We start with you — your pace, your curiosity, what you want to feel on the other side of the journey.
          </p>
          <p className="text-white/35 text-base leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Over a decade of journeys through Hunza, Skardu, Chitral and beyond. No two alike. All extraordinary.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 text-[#C8903A] text-xs tracking-[0.25em] uppercase hover:gap-5 transition-all duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Get In Touch
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="#C8903A" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#080808] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <p className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/60 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>What our travellers say</p>
        <h2 className="text-3xl md:text-4xl font-light text-white" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Real journeys. Real stories.</h2>
      </div>
      {/* Scrolling strip */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-12 scrollbar-none" style={{ scrollSnapType: "x mandatory" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="shrink-0 w-[320px] md:w-[380px] border border-white/8 p-8 flex flex-col justify-between" style={{ scrollSnapAlign: "start" }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="mb-6 opacity-30">
                <path d="M0 20V12C0 5.4 3.8 1.4 11.4 0l1.4 2.4C9 3.4 7.2 5.6 6.8 9H12V20H0ZM16 20V12C16 5.4 19.8 1.4 27.4 0l1.4 2.4C25 3.4 23.2 5.6 22.8 9H28V20H16Z" fill="white"/>
              </svg>
              <p className="text-white/65 text-base leading-relaxed mb-8 italic flex-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>"{t.quote}"</p>
              <div>
                <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t.name}</p>
                <p className="text-[#C8903A]/60 text-xs tracking-wider mt-1" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{t.origin}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function DestinationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [shown, setShown] = useState(false);

  return (
    <section id="destinations" className="bg-[#0a0a0a] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/60 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Start your journey</p>
            <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Where do you want to go?</h2>
          </div>
          <a href="#contact" className="shrink-0 inline-flex items-center gap-2 text-white/40 text-xs tracking-[0.2em] uppercase hover:text-[#C8903A] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            View all destinations
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-10 border-b border-white/8 overflow-x-auto">
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)}
              className={`shrink-0 px-5 py-3 text-[11px] tracking-[0.18em] uppercase transition-all duration-300 border-b-2 -mb-px ${activeTab === i ? "border-[#C8903A] text-[#C8903A]" : "border-transparent text-white/35 hover:text-white/60"}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(shown ? DESTINATIONS : DESTINATIONS.slice(0, 8)).map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-108 will-change-transform" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[#C8903A]/0 group-hover:bg-[#C8903A]/10 transition-colors duration-500" />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.tag}</span>
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#C8903A]/70 mb-1" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.region}</p>
                  <h3 className="text-lg font-light text-white leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{d.name}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-white/40" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.duration}</span>
                <span className="text-[10px] text-[#C8903A]/70" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullBleedSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <Image src="https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg" alt="Aerial Pakistan" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C8903A]/80 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Their future is out there</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-10 leading-tight max-w-3xl mx-auto" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Find <em>it.</em>
        </h2>
        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs tracking-[0.25em] uppercase hover:border-[#C8903A] hover:text-[#C8903A] transition-all duration-400" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Start planning
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </a>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="bg-[#0a0a0a] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/60 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Why Auriga</p>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              What we do<br />and why we do it.
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We've spent over a decade in the mountains of Pakistan — not reading about them, but living them. Every camp we recommend, every guide we trust, every route we design is drawn from real experience in the field.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/6">
              {[{n:"12+",l:"Routes"},{n:"500+",l:"Journeys"},{n:"4,700m",l:"Highest camp"}].map(({n,l}) => (
                <div key={l}>
                  <p className="text-3xl font-light text-[#C8903A] mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{n}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/25" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature list */}
          <div className="flex flex-col divide-y divide-white/6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 py-7 group"
              >
                <span className="text-[#C8903A]/40 text-xl mt-0.5 group-hover:text-[#C8903A] transition-colors duration-300">{item.icon}</span>
                <div>
                  <p className="text-white text-base font-medium mb-1.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.title}</p>
                  <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="bg-[#080808] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%] will-change-transform">
              <Image src="https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg" alt="Pakistan journey" fill className="object-cover" unoptimized />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/60 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Our guide to luxury travel</p>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Luxury isn't a room.<br /><em>It's a feeling.</em>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Imagine waking to the sound of glacial rivers from a canvas tent perched above the Hunza Valley. Or hiking in peaceful solitude through a remote corner of Deosai — the world's second-highest plateau, where brown bears still roam and the horizon disappears into sky.
            </p>
            <p className="text-white/30 text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Luxury in Pakistan is not what you find at a five-star hotel in a city. It's privacy. It's access. It's a guide who has spent his life learning a place so that you can feel it fully in a week.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[#C8903A] text-xs tracking-[0.25em] uppercase hover:gap-5 transition-all duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Continue reading
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none"><path d="M0 4h18M14 1l4 3-4 3" stroke="#C8903A" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-center text-[10px] tracking-[0.45em] uppercase text-white/20 mb-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>As featured in</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {PRESS.map(p => (
            <span key={p} className="text-white/20 text-lg font-light tracking-widest hover:text-white/50 transition-colors duration-300 cursor-default" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d0d0d] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#C8903A]/60 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Ready to start?</p>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Tell us about<br /><em>your journey.</em>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              No obligation. No fees for planning. Just a conversation about where you want to go and how you want to feel when you get there.
            </p>
            <div className="flex flex-col gap-5">
              {[{icon:"✦",label:"Email",val:"hello@aurigaventure.com"},{icon:"◎",label:"Phone",val:"+92 300 0000000"},{icon:"◈",label:"Based in",val:"Islamabad, Pakistan"}].map(({icon,label,val}) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-[#C8903A]/50 mt-0.5 text-xs">{icon}</span>
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-0.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{label}</p>
                    <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              {["First name", "Last name"].map(p => (
                <div key={p}>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{p}</label>
                  <input type="text" className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C8903A]/50 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Email</label>
              <input type="email" className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C8903A]/50 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }} />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Where do you want to go?</label>
              <select className="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white/60 focus:outline-none focus:border-[#C8903A]/50 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <option value="">Select a destination</option>
                {DESTINATIONS.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                <option value="unsure">Not sure yet — help me decide</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Tell us more</label>
              <textarea rows={4} className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C8903A]/50 transition-colors duration-300 resize-none" style={{ fontFamily: "var(--font-inter), sans-serif" }} placeholder="Group size, dates, special requests..." />
            </div>
            <button type="submit" className="mt-2 w-full py-4 bg-[#C8903A] text-[#0a0a0a] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#e0a84a] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Start Planning →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function NewFooter() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-semibold text-[#F5F0E8]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Auriga</span>
              <span className="text-2xl font-light text-[#C8903A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Ventures</span>
            </div>
            <p className="text-white/25 text-sm italic mb-6 max-w-xs" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Beyond Travel. We Curate Dreams.</p>
            <p className="text-white/20 text-xs leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Bespoke luxury journeys through Pakistan's northern mountains. Est. 2014.</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Explore</p>
            <div className="flex flex-col gap-3">
              {["Destinations", "Experiences", "About Us", "Inspiration", "Contact"].map(l => (
                <a key={l} href="#" className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Info</p>
            <div className="flex flex-col gap-3">
              {["Privacy Policy", "Terms & Conditions", "FAQs", "Sustainability"].map(l => (
                <a key={l} href="#" className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-white/20 text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>© 2026 Auriga Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "YouTube", "LinkedIn"].map(s => (
              <a key={s} href="#" className="text-[11px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function NewHomePage() {
  return (
    <div className="bg-[#0a0a0a]">
      <NewNav />
      <Hero />
      <PhilosophySection />
      <TestimonialsSection />
      <DestinationsSection />
      <FullBleedSection />
      <WhyUsSection />
      <GuideSection />
      <PressSection />
      <ContactSection />
      <NewFooter />
    </div>
  );
}
