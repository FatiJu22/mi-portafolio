import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Zap, Target, Lightbulb, Clock } from "lucide-react";

const strengths = [
  {
    icon: Zap,
    title: "Adaptabilidad Tecnológica",
    color: "#a855f7",
  },
  {
    icon: Brain,
    title: "Pensamiento Analítico",
    color: "#ff4fd8",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    color: "#3b82f6",
  },
  {
    icon: Target,
    title: "Orientación a Resultados",
    color: "#06b6d4",
  },
  {
    icon: Lightbulb,
    title: "Autodidacta",
    color: "#ff4fd8",
  },
  {
    icon: Clock,
    title: "Gestión del Tiempo",
    color: "#a855f7",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-4 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Perfil <span className="gradient-text">Profesional</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 border border-[#ff4fd8]/10">
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-6">
                Resumen <span className="text-[#ff4fd8]">Ejecutivo</span>
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Egresada de Ingeniería en Tecnologías de la Información por la
                  Universidad Politécnica Metropolitana de Hidalgo, con formación
                  técnica en Programación. Experiencia en desarrollo Full Stack,
                  diseño y gestión de bases de datos, desarrollo de interfaces
                  con Angular e integración de APIs. He participado en proyectos
                  de software enfocados en la digitalización y optimización de
                  procesos empresariales.
                </p>
                <p>
                  Actualmente me interesa el desarrollo de soluciones con
                  inteligencia artificial, automatización de procesos y trabajo
                  bajo metodologías ágiles (Scrum). Complemento mi perfil con
                  conocimientos en seguridad informática, análisis de datos y
                  resolución de problemas, lo que me permite adaptarme a
                  distintos entornos tecnológicos y aportar soluciones
                  eficientes.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Full Stack", "Backend", "Angular", "Node.js", "MySQL", "IA", "Scrum"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#ff4fd8]/10 border border-[#ff4fd8]/20 text-[#ff4fd8]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {strengths.map((strength, i) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group glass rounded-xl p-5 border border-transparent hover:border-[rgba(255,79,216,0.2)] card-hover cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${strength.color}15` }}
                >
                  <strength.icon
                    className="w-5 h-5"
                    style={{ color: strength.color }}
                  />
                </div>
                <h4 className="text-white font-semibold text-sm">
                  {strength.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
