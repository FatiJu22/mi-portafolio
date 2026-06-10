import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-[rgba(255,79,216,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleClick(e, "#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#ff4fd8] transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#ff4fd8] rounded-full blur-lg opacity-40" />
              </div>
              <span className="font-orbitron text-lg sm:text-xl font-bold gradient-text">
                FJRC
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff4fd8]/10 to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] group-hover:w-1/2 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 glass-strong border-l border-[rgba(255,79,216,0.15)] pt-24 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#ff4fd8]/10 hover:to-transparent transition-all duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
