import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import ModernTools from "./sections/ModernTools";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <ModernTools />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
