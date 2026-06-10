import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[rgba(255,79,216,0.1)]">
      <div className="max-w-7xl mx-auto">
        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Fátima Juliet Rivero Cruz. Todos
            los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-xl glass border border-[#ff4fd8]/10 text-gray-400 hover:text-[#ff4fd8] hover:border-[#ff4fd8]/30 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
