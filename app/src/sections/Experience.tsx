import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Rocket } from "lucide-react";

interface ExperienceItem {
  type: "work" | "education" | "project";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Desarrolladora Web – Backend y Bases de Datos",
    organization: "Biznaga Risk and Tech",
    location: "Pachuca de Soto, Hgo.",
    period: "Enero 2026 – Abril 2026",
    description: [
      "Desarrollo y mantenimiento de arquitectura backend en aplicaciones web empresariales",
      "Optimización de bases de datos relacionales y no relacionales para maximizar rendimiento",
      "Reestructuración de sistemas para mejorar eficiencia y estabilidad de plataformas",
      "Implementación de Sistema Integral Biznaga con Angular, Node.js y MariaDB",
    ],
    technologies: ["Angular 14", "Node.js 20", "Express 5", "MariaDB", "JWT", "Google APIs"],
  },
  {
    type: "work",
    title: "Desarrolladora de Prototipos Electrónicos",
    organization: "Software Hub Mexico",
    location: "Pachuca de Soto, Hgo.",
    period: "Marzo 2025 – Abril 2025",
    description: [
      "Diseño y ensamble de prototipos electrónicos con arquitectura Arduino",
      "Integración de sensores y control de motores para automatización de procesos",
      "Resolución de fallas técnicas y validación en entornos reales",
      "Desarrollo de prototipo de robot fertilizador con Arduino",
    ],
    technologies: ["Arduino", "C++", "Electrónica", "Sensores"],
  },
  {
    type: "education",
    title: "Ingeniería en Tecnologías de la Información",
    organization: "Universidad Politécnica Metropolitana de Hidalgo",
    location: "Pachuca, Hgo.",
    period: "Septiembre 2022 – Abril 2026",
    description: [
      "Formación integral en desarrollo de software, bases de datos y redes",
      "Especialización en desarrollo web y aplicaciones empresariales",
      "Proyectos integradores con metodologías ágiles (Scrum)",
      "Formación en seguridad informática y ethical hacking",
    ],
  },
  {
    type: "education",
    title: "Técnico en Programación",
    organization: "Colegio de Estudios Científicos y Tecnológicos de Hidalgo",
    location: "Hidalgo",
    period: "Agosto 2019 – Julio 2022",
    description: [
      "Fundamentos de programación en Java, Python y desarrollo web",
      "Bases de datos SQL y diseño de sistemas",
      "Prácticas profesionales en desarrollo de software",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "education":
        return GraduationCap;
      default:
        return Rocket;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return "#ff4fd8";
      case "education":
        return "#3b82f6";
      default:
        return "#a855f7";
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-4 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Trayectoria <span className="gradient-text">Profesional</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Mi recorrido académico y profesional en el mundo del desarrollo de
            software.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff4fd8] via-[#a855f7] to-[#3b82f6]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const iconColor = getIconColor(exp.type);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full border-4 border-[#0a0a0f] z-10"
                    style={{
                      backgroundColor: iconColor,
                      boxShadow: `0 0 15px ${iconColor}40`,
                    }}
                  />

                  {/* Card */}
                  <div className="glass rounded-2xl p-5 sm:p-6 border border-transparent hover:border-[rgba(255,79,216,0.15)] transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${iconColor}15` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: iconColor }}
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-base sm:text-lg">
                            {exp.title}
                          </h3>
                          <p
                            className="text-sm font-medium"
                            style={{ color: iconColor }}
                          >
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-xs sm:text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: iconColor }}
                          />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
