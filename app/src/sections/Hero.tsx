import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import cvPdfUrl from "../assets/Fatima Juliet Rivero Cruz_CV .pdf?url";

const roles = [
  "Desarrolladora Full Stack",
  "Backend & Bases de Datos",
  "Angular & Node.js",
  "Automatización con IA",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#ff4fd8]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#ff4fd8]/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff4fd8] animate-pulse" />
          <span className="text-sm text-gray-300 font-mono">Disponible para oportunidades</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">FÁTIMA JULIET</span>
          <br />
          <span className="gradient-text">RIVERO CRUZ</span>
        </motion.h1>

        {/* Role typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-10 sm:h-12 mb-6"
        >
          <span className="font-mono text-lg sm:text-xl md:text-2xl text-[#ff4fd8] neon-text-pink">
            {displayText}
            <span className="animate-blink text-[#ff4fd8]">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ingeniera en Tecnologías de la Información especializada en desarrollo
          <span className="text-[#ff4fd8]"> Full Stack</span>, arquitectura
          <span className="text-[#a855f7]"> Backend</span> e integración de
          <span className="text-[#3b82f6]"> IA</span>. Construyo soluciones
          empresariales robustas con Angular, Node.js y bases de datos optimizadas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,79,216,0.4)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Proyectos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          <a
            href={cvPdfUrl}
            download="Fatima Juliet Rivero Cruz_CV .pdf"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl glass border border-[#ff4fd8]/30 text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:border-[#ff4fd8]/60 hover:bg-[#ff4fd8]/5"
          >
            <Download className="w-5 h-5" />
            Descargar CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/FatiJu22", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/fatima-juliet-rivero-827b11369/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:fatimajulietr@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative p-3 rounded-xl glass border border-[#ff4fd8]/20 text-gray-400 hover:text-[#ff4fd8] hover:border-[#ff4fd8]/50 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span className="absolute inset-0 rounded-xl bg-[#ff4fd8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={handleScrollToAbout}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff4fd8] transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
