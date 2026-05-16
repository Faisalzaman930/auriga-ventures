import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Destinations />
      <Philosophy />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
