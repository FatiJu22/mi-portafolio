import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fatimajulietr@gmail.com",
    href: "mailto:fatimajulietr@gmail.com",
    color: "#ff4fd8",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/FatiJu22",
    href: "https://github.com/FatiJu22",
    color: "#a855f7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Conectar en LinkedIn",
    href: "https://www.linkedin.com/in/fatima-juliet-rivero-827b11369/",
    color: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "779 111 1655",
    href: "tel:+527791111655",
    color: "#06b6d4",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6 border border-[#ff4fd8]/10">
              <h3 className="font-orbitron text-lg font-bold text-white mb-6">
                Información de <span className="text-[#ff4fd8]">Contacto</span>
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-gray-200 text-sm font-medium truncate group-hover:text-[#ff4fd8] transition-colors">
                        {item.value}
                      </p>
                    </div>
                    {(item.href.startsWith("http") || item.href.startsWith("mailto:")) && (
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#ff4fd8] transition-colors flex-shrink-0" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <div>
                  <p className="text-green-400 font-semibold text-sm">
                    Disponible para proyectos
                  </p>
                  <p className="text-gray-500 text-xs">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
