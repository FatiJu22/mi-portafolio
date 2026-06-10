import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Workflow,
  GitBranch,
  Terminal,
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Brain,
  Blocks,
} from "lucide-react";

interface Tool {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
}

const tools: Tool[] = [
  {
    name: "GitHub Copilot",
    description:
      "Asistente de código con IA que acelera el desarrollo sugiriendo completado inteligente de código en tiempo real.",
    icon: Bot,
    color: "#ff4fd8",
    category: "Asistente IA",
  },
  {
    name: "Claude Code",
    description:
      "Agente de coding avanzado para refactorización, debugging y generación de código complejo con contexto extendido.",
    icon: Brain,
    color: "#a855f7",
    category: "Agente IA",
  },
  {
    name: "DeepSeek API",
    description:
      "Integración de modelos de lenguaje para generación de contenido, respuestas contextuales y procesamiento de IA.",
    icon: Sparkles,
    color: "#4ade80",
    category: "IA Generativa",
  },
  {
    name: "Git & GitHub",
    description:
      "Control de versiones distribuido con flujos de trabajo colaborativos, pull requests y CI/CD integrado.",
    icon: GitBranch,
    color: "#f97316",
    category: "Versionado",
  },
  {
    name: "Docker",
    description:
      "Contenerización de aplicaciones para despliegue consistente y entornos de desarrollo reproducibles.",
    icon: Blocks,
    color: "#2496ed",
    category: "DevOps",
  },
  {
    name: "Firebase Auth",
    description:
      "Autenticación segura con múltiples proveedores (email, Google, etc.) para aplicaciones web y móvil.",
    icon: Zap,
    color: "#ffca28",
    category: "Auth",
  },
  {
    name: "Google APIs",
    description:
      "Integración con Drive, Forms, Calendar y otros servicios de Google para automatización de flujos.",
    icon: Workflow,
    color: "#4285f4",
    category: "Integración",
  },
  {
    name: "n8n",
    description:
      "Diseño e implementación de flujos automatizados para integración de sistemas, procesamiento de datos, orquestación de APIs y agentes de IA mediante una plataforma low-code escalable.",
    icon: Workflow,
    color: "#06b6d4",
    category: "Automatización",
  },
  {
    name: "JWT / Bcrypt",
    description:
      "Autenticación segura basada en tokens y encriptación de contraseñas para aplicaciones empresariales.",
    icon: Terminal,
    color: "#06b6d4",
    category: "Seguridad",
  },
];

const ModernTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-4 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Toolkit <span className="gradient-text">de Desarrollo</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Herramientas de vanguardia que utilizo para acelerar el desarrollo,
            integrar IA y automatizar procesos.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group glass rounded-xl p-5 border border-transparent hover:border-[rgba(255,79,216,0.2)] card-hover cursor-default"
            >
              {/* Category badge */}
              <span
                className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider mb-3"
                style={{
                  color: tool.color,
                  backgroundColor: `${tool.color}15`,
                }}
              >
                {tool.category}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tool.color}15` }}
              >
                <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm mb-2">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4 border border-[#ff4fd8]/20">
            <Cpu className="w-6 h-6 text-[#ff4fd8]" />
            <p className="text-gray-300 text-sm">
              <span className="text-white font-semibold">
                Stack orientado al futuro:
              </span>{" "}
              Desarrollo asistido por IA, automatización inteligente y
              arquitecturas escalables
            </p>
            <Code2 className="w-6 h-6 text-[#a855f7]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTools;
