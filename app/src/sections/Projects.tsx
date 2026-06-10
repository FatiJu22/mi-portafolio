import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Layers, Cpu, Database, Lock, Cloud, Bot } from "lucide-react";
import bizpanImage from "../img/BIZPAN.png";
import bizgesImage from "../img/BIZGES.png";
import bizproImage from "../img/BIZPRO.png";
import bizmeImage from "../img/BIZME.png";
import simlogImage from "../img/SIMLOG.png";
import simconfiImage from "../img/SIMCONFI.png";
import simpanelImage from "../img/SIMPANEL.png";
import simparaImage from "../img/SIMPARA.png";
import simchatImage from "../img/SIMCHAT.png";
import inlogImage from "../img/INLOG.png";
import indasImage from "../img/INDAS.png";

interface Project {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  problem: string;
  solution: string;
  uiShots: { title: string; caption?: string; accent?: string; image?: string }[];
  technologies: { name: string; icon: React.ElementType; color: string }[];
  features: string[];
  architecture: string;
  githubUrl: string;
  demoUrl?: string;
  gradient: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Sistema Integral Biznaga",
    shortDesc: "Sistema corporativo full stack para gestión integral de capacitaciones",
    description:
      "Sistema web full stack para la gestión integral de capacitaciones, expedientes médicos y protección civil. Centraliza el flujo operativo incluyendo cursos, evidencias, reportes, notificaciones y control de accesos.",
    problem:
      "La empresa necesitaba digitalizar y automatizar el ciclo completo de capacitaciones y documentos asociados, reduciendo tiempos operativos y aumentando trazabilidad y seguridad.",
    solution:
      "Se diseñó e implementó una arquitectura full stack con Angular en frontend, Node.js/Express en backend y MariaDB, integrando APIs de Google para automatizar flujos de trabajo.",
    uiShots: [
      {
        title: "Panel de control",
        image: bizpanImage,
      },
      {
        title: "Gestión de Capacitación Corporativa",
        image: bizgesImage,
      },
      {
        title: "Protección Civil",
        image: bizproImage,
      },
      {
        title: "Expedientes Médicos",
        image: bizmeImage,
      },
    ],
    technologies: [
      { name: "Angular 14", icon: Layers, color: "#dd0031" },
      { name: "TypeScript", icon: Cpu, color: "#3178c6" },
      { name: "Node.js 20", icon: Cpu, color: "#339933" },
      { name: "Express 5", icon: Layers, color: "#404040" },
      { name: "MariaDB", icon: Database, color: "#003545" },
      { name: "JWT", icon: Lock, color: "#ff4fd8" },
      { name: "Google APIs", icon: Cloud, color: "#4285f4" },
      { name: "Bootstrap 4.6", icon: Layers, color: "#7952b3" },
    ],
    features: [
      "Gestión de cursos, programaciones y participantes",
      "Expedientes médicos con carga y consulta de documentos",
      "Módulo de protección civil y control documental",
      "Generación de reportes, constancias y evidencias",
      "Integración con Google Drive, Forms y Calendar",
      "Autenticación JWT y control de roles por permisos",
    ],
    architecture:
      "SPA en Angular que consume API REST en Node.js. Autenticación JWT con roles validados en backend y guards del frontend. Múltiples bases MariaDB separadas por dominio funcional. Integraciones externas para automatizar evidencias, encuestas y calendario.",
    githubUrl: "https://github.com/FatiJu22",
    gradient: "from-[#ff4fd8] to-[#a855f7]",
    icon: Layers,
  },
  {
    id: 2,
    name: "Simulador de Entrevistas IA",
    shortDesc: "Plataforma con IA para practicar entrevistas técnicas",
    description:
      "Proyecto web full stack que simula entrevistas técnicas con ayuda de IA. El usuario inicia sesión, realiza un pretest, configura la sesión y conversa con un entrevistador virtual que genera preguntas y feedback en tiempo real.",
    problem:
      "Los desarrolladores necesitan una forma realista de practicar entrevistas técnicas, medir su desempeño y centralizar su historial de sesiones en una experiencia guiada y segura.",
    solution:
      "Se construyó una plataforma con Angular 20, Node.js/Express y DeepSeek API para generar preguntas personalizadas, con autenticación Firebase y persistencia de sesiones en MySQL mediante Docker.",
    uiShots: [
      {
        title: "Login",
        image: simlogImage,
      },
      {
        title: "Configuración del perfil del usuario",
        image: simconfiImage,
      },
      {
        title: "Dashboard",
        image: simpanelImage,
      },
      {
        title: "Parámetros de la entrevista",
        image: simparaImage,
      },
      {
        title: "Chat en tiempo real",
        image: simchatImage,
      },
    ],
    technologies: [
      { name: "Angular 20", icon: Layers, color: "#dd0031" },
      { name: "Node.js", icon: Cpu, color: "#339933" },
      { name: "Express", icon: Layers, color: "#404040" },
      { name: "MySQL 8", icon: Database, color: "#00758f" },
      { name: "Firebase Auth", icon: Lock, color: "#ffca28" },
      { name: "DeepSeek API", icon: Bot, color: "#4ade80" },
      { name: "Docker", icon: Cpu, color: "#2496ed" },
      { name: "Docker Compose", icon: Cpu, color: "#2496ed" },
    ],
    features: [
      "Autenticación con Firebase (email y Google)",
      "Pretest para perfilar conocimientos del usuario",
      "Configuración de sesión (área, dificultad, objetivos)",
      "Chat interactivo con entrevistador IA",
      "Persistencia de sesiones y mensajes",
      "Dashboard con historial y progreso",
      "Feedback detallado de cada simulación",
    ],
    architecture:
      "Frontend en Angular consume API REST con Express. Autenticación Firebase; el backend valida tokens y sincroniza usuarios en MySQL. Cada sesión guarda mensajes y tiempos, y el backend consulta DeepSeek API para generar preguntas, respuestas y feedback automatizado. Docker facilita levantar MySQL localmente.",
    githubUrl: "https://github.com/FatiJu22",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    icon: Bot,
  },
  {
    id: 3,
    name: "INBANK",
    shortDesc: "Simulación bancaria full stack con operaciones financieras y seguridad",
    description:
      "INBANK es un proyecto de banco ficticio desarrollado para simular operaciones bancarias como gestión de clientes, cuentas, transacciones y préstamos. Su objetivo fue aplicar conocimientos de desarrollo full-stack, bases de datos y seguridad mediante un entorno que replica procesos financieros reales.",
    problem:
      "Se necesitaba una plataforma de práctica que integrara autenticación, procesos bancarios, trazabilidad y automatización de documentos, manteniendo seguridad y control sobre cada operación.",
    solution:
      "Se diseñó una solución full stack con Angular 20 e Ionic 8 en frontend, Node.js y Express 5 en backend, MySQL como persistencia y servicios auxiliares para biometría, correos, generación de PDFs y tareas programadas.",
    uiShots: [
      {
        title: "Login",
        image: inlogImage,
      },
      {
        title: "Dashboard Ejecutivo",
        image: indasImage,
      },
    ],
    technologies: [
      { name: "Angular 20", icon: Layers, color: "#dd0031" },
      { name: "Ionic 8", icon: Cpu, color: "#4f8cff" },
      { name: "RxJS", icon: Cpu, color: "#b388ff" },
      { name: "TypeScript", icon: Cpu, color: "#3178c6" },
      { name: "Capacitor 7", icon: Cpu, color: "#3a7bd5" },
      { name: "Biometría nativa", icon: Lock, color: "#ffca28" },
      { name: "Node.js", icon: Cpu, color: "#339933" },
      { name: "Express 5", icon: Layers, color: "#404040" },
      { name: "MySQL", icon: Database, color: "#00758f" },
      { name: "JWT", icon: Lock, color: "#ff4fd8" },
      { name: "bcryptjs", icon: Lock, color: "#a855f7" },
      { name: "Axios", icon: Cloud, color: "#3b82f6" },
      { name: "nodemailer", icon: Cloud, color: "#06b6d4" },
      { name: "PDFKit", icon: Cloud, color: "#f97316" },
      { name: "node-cron", icon: Cloud, color: "#22c55e" },
    ],
    features: [
      "Autenticación con JWT, control de sesiones y rutas protegidas",
      "Autenticación biométrica por usuario y dispositivo con auditoría",
      "Gestión de usuarios y roles con alta, listado y cambio de contraseña",
      "Gestión de clientes con búsqueda avanzada, duplicados y edición segura",
      "Apertura y cancelación de cuentas con depósito inicial y transacción automática",
      "Depósitos, retiros y transferencias internas con trazabilidad completa",
      "Transferencias interbancarias con folio, integración API y registro de operaciones",
      "Comisiones por transferencia y administración de contactos frecuentes",
      "Préstamos y cobranzas con cálculos, vencimientos y notificaciones por correo",
      "Estado de cuenta y comprobantes en PDF con envío por email",
      "Endpoints de salud y métricas para monitoreo básico",
    ],
    architecture:
      "Frontend en Angular 20 con Ionic 8 y componentes standalone, integrado a un backend en Node.js/Express 5. La persistencia se maneja con MySQL y las operaciones sensibles incluyen JWT, bcryptjs y biometría nativa. Los servicios auxiliares cubren integraciones API, correos, PDFs y tareas programadas para simular procesos bancarios reales.",
    githubUrl: "https://github.com/FatiJu22",
    gradient: "from-[#22c55e] to-[#06b6d4]",
    icon: Database,
  },
];

type UISliderProps = {
  shots: { title: string; caption?: string; accent?: string; image?: string }[];
  onOpen: (shots: { title: string; caption?: string; accent?: string; image?: string }[], index: number) => void;
};

const UISlider = ({ shots, onOpen }: UISliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.75);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 px-1 scrollbar-hide">
        {shots.map((shot, i) => (
          <div
            key={shot.title}
            className={`min-w-[240px] sm:min-w-[280px] lg:min-w-[340px] snap-center rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden`}
          >
            <button
              type="button"
              onClick={() => shot.image && onOpen(shots, i)}
              className={`w-full h-full text-left ${shot.image ? "cursor-pointer" : "cursor-default"}`}
            >
              {shot.image ? (
                <div className="relative overflow-hidden">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                ) : (
                <div className={`h-40 bg-gradient-to-br ${shot.accent} p-4 flex items-center justify-between`}>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80">
                    Captura {i + 1}
                  </span>
                </div>
              )}
              <div className="p-4">
                <h5 className="text-white font-semibold text-sm mb-1">{shot.title}</h5>
                {shot.caption && <p className="text-gray-400 text-xs leading-relaxed">{shot.caption}</p>}
              </div>
            </button>
          </div>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => scrollByAmount("left")}
        className="hidden md:flex items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
      >
        ‹
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => scrollByAmount("right")}
        className="hidden md:flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
      >
        ›
      </button>
    </div>
  );
};


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [uiOpenId, setUiOpenId] = useState<number | null>(null);
  const [previewShots, setPreviewShots] = useState<{ title: string; caption?: string; accent?: string; image?: string }[] | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const previewTrackRef = useRef<HTMLDivElement | null>(null);
  const previewCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const openPreview = (shots: { title: string; caption?: string; accent?: string; image?: string }[], index: number) => {
    setPreviewShots(shots);
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewShots(null);
    setPreviewIndex(0);
  };

  const scrollPreviewByAmount = (dir: "left" | "right") => {
    const el = previewTrackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handlePreviewScroll = () => {
    const el = previewTrackRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    previewCardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setPreviewIndex(closestIndex);
  };

  const jumpToPreviewIndex = (index: number) => {
    const card = previewCardRefs.current[index];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setPreviewIndex(index);
  };

  const previewShotsCount = previewShots?.length ?? 0;

  useEffect(() => {
    if (!previewShots) return;
    const frame = window.requestAnimationFrame(() => {
      jumpToPreviewIndex(previewIndex);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [previewShots, previewIndex]);

  useEffect(() => {
    if (!previewShots) return;

    const closeOpenPanels = () => {
      setPreviewShots(null);
      setPreviewIndex(0);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        closeOpenPanels();
      }
    };

    window.addEventListener("scroll", closeOpenPanels, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", closeOpenPanels);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [previewShots]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-4 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Soluciones empresariales reales construidas con tecnologías modernas
            e integración de inteligencia artificial.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass rounded-2xl border border-[rgba(255,79,216,0.1)] overflow-hidden card-hover"
            >
              {/* Project Header */}
              <div
                className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} bg-opacity-5`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        {project.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Problem */}
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <h4 className="text-red-400 font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      Problema
                    </h4>
                    <p className="text-gray-400 text-sm">{project.problem}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        <tech.icon
                          className="w-3.5 h-3.5"
                          style={{ color: tech.color }}
                        />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Features & Architecture */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                  className="text-[#ff4fd8] text-sm font-medium hover:underline flex items-center gap-1"
                >
                  {expandedId === project.id
                    ? "Ver menos"
                    : "Ver funcionalidades y arquitectura"}
                </button>

                {project.uiShots.length > 0 && (
                  <button
                    onClick={() =>
                      setUiOpenId(uiOpenId === project.id ? null : project.id)
                    }
                    className="mt-3 text-[#3b82f6] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    {uiOpenId === project.id
                      ? "Ocultar capturas UI"
                      : "Ver capturas UI"}
                  </button>
                )}

                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2">
                        Funcionalidades Principales
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <span className="text-[#ff4fd8] mt-0.5">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-[#a855f7]/5 border border-[#a855f7]/10">
                      <h4 className="text-[#a855f7] font-semibold text-sm mb-2">
                        Arquitectura
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>
                  </motion.div>
                )}

                {uiOpenId === project.id && project.uiShots.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h4 className="text-white font-semibold text-sm">
                        Capturas UI
                      </h4>
                      <span className="text-xs font-mono px-2 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                        UI / Interfaz de Usuario
                      </span>
                    </div>

                    <div className="mt-2">
                      <UISlider shots={project.uiShots} onOpen={openPreview} />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {previewShots && previewShotsCount > 0 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
          onClick={closePreview}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f16] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur hover:bg-black/70"
            >
              Cerrar
            </button>

            <div className="relative px-4 pt-14 pb-6 sm:px-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-semibold text-lg">Capturas UI</p>
                  <p className="text-gray-400 text-sm">
                    Desliza o usa las flechas para ver las demás capturas.
                  </p>
                </div>
                <div className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                  {previewIndex + 1} / {previewShotsCount}
                </div>
              </div>

              <div className="relative">
                <div
                  ref={previewTrackRef}
                  onScroll={handlePreviewScroll}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
                >
                  {previewShots.map((shot, index) => (
                    <div
                      key={shot.title}
                      ref={(node) => {
                        previewCardRefs.current[index] = node;
                      }}
                      className="min-w-full snap-center"
                    >
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                        <img
                          src={shot.image}
                          alt={shot.title}
                          className="max-h-[70vh] w-full object-contain bg-black"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3 px-1">
                        <p className="text-white font-semibold">{shot.title}</p>
                        <span className="text-xs text-gray-400">
                          {index + 1} de {previewShotsCount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {previewShotsCount > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => scrollPreviewByAmount("left")}
                      className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/75"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollPreviewByAmount("right")}
                      className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/75"
                    >
                      ›
                    </button>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {previewShots.map((shot, index) => (
                        <button
                          key={shot.title}
                          type="button"
                          onClick={() => jumpToPreviewIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === previewIndex ? "w-8 bg-[#ff4fd8]" : "w-2 bg-white/30"
                          }`}
                          aria-label={`Ir a ${shot.title}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
