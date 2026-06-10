import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import javascriptIcon from "../img/javascript.png";
import typescriptIcon from "../img/TypeScript.png";
import pythonIcon from "../img/python.png";
import javaIcon from "../img/java.png";
import htmlcssIcon from "../img/HTMLCSS.png";
import angularIcon from "../img/angular.gif";
import nodejsIcon from "../img/nodejs.png";
import expressIcon from "../img/express-js.png";
import bootstrapIcon from "../img/Bootstrap.png";
import pandasIcon from "../img/pandas.png";
import mysqlIcon from "../img/mysql.webp";
import mariadbIcon from "../img/mariadb.png";
import firebaseIcon from "../img/firebase.png";
import dockerIcon from "../img/Docker.png";
import gitIcon from "../img/git.png";
import godaddyIcon from "../img/godaddy.png";
import nmapIcon from "../img/nmap.png";
import wiresharkIcon from "../img/wireshark.png";
import deepseekIcon from "../img/deepseek.png";
import googleIcon from "../img/google.webp";
import firebaseAuthIcon from "../img/firebase-auth.png";
import arduinoIcon from "../img/arduino.webp";

const techCategories = [
  {
    title: "Lenguajes",
    color: "#ff4fd8",
    items: [
      { name: "JavaScript", icon: "⚡", iconSrc: javascriptIcon, level: "Avanzado" },
      { name: "TypeScript", icon: "📘", iconSrc: typescriptIcon, level: "Avanzado" },
      { name: "Python", icon: "🐍", iconSrc: pythonIcon, level: "Intermedio" },
      { name: "Java", icon: "☕", iconSrc: javaIcon, level: "Intermedio" },
      { name: "SQL", icon: "🗄️", level: "Avanzado" },
      { name: "HTML/CSS", iconSrc: htmlcssIcon, level: "Avanzado" },
    ],
  },
  {
    title: "Frameworks & Librerías",
    color: "#a855f7",
    items: [
      { name: "Angular 14-20", iconSrc: angularIcon, level: "Avanzado" },
      { name: "Node.js", iconSrc: nodejsIcon, level: "Avanzado" },
      { name: "Express.js", iconSrc: expressIcon, level: "Avanzado" },
      { name: "Bootstrap", iconSrc: bootstrapIcon, level: "Avanzado" },
      { name: "Angular Material", iconSrc: angularIcon, level: "Avanzado" },
      { name: "Pandas", iconSrc: pandasIcon, level: "Intermedio" },
    ],
  },
  {
    title: "Bases de Datos",
    color: "#3b82f6",
    items: [
      { name: "MySQL", iconSrc: mysqlIcon, level: "Avanzado" },
      { name: "MariaDB", iconSrc: mariadbIcon, level: "Avanzado" },
      { name: "Firebase", iconSrc: firebaseIcon, level: "Intermedio" },
    ],
  },
  {
    title: "DevOps & Herramientas",
    color: "#06b6d4",
    items: [
      { name: "Docker", iconSrc: dockerIcon, level: "Intermedio" },
      { name: "Git & GitHub", iconSrc: gitIcon, level: "Avanzado" },
      { name: "GoDaddy Deploy", iconSrc: godaddyIcon, level: "Intermedio" },
    ],
  },
  {
    title: "Seguridad",
    color: "#ff4fd8",
    items: [
      { name: "JWT / Bcrypt", icon: "🔐", level: "Avanzado" },
      { name: "Pentesting", icon: "🛡️", level: "Intermedio" },
      { name: "Nmap", iconSrc: nmapIcon, level: "Intermedio" },
      { name: "Wireshark", iconSrc: wiresharkIcon, level: "Intermedio" },
      { name: "Firewalls", icon: "🔥", level: "Intermedio" },
    ],
  },
  {
    title: "IA & Automatización",
    color: "#a855f7",
    items: [
      { name: "DeepSeek API", iconSrc: deepseekIcon, level: "Intermedio" },
      { name: "Google APIs", iconSrc: googleIcon, level: "Avanzado" },
      { name: "Firebase Auth", iconSrc: firebaseAuthIcon, level: "Intermedio" },
      { name: "Arduino", iconSrc: arduinoIcon, level: "Intermedio" },
    ],
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-4 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Stack <span className="gradient-text">Tecnológico</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo para construir soluciones
            empresariales robustas y escalables.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#ff4fd8] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              className="glass rounded-2xl p-6 border border-transparent hover:border-[rgba(255,79,216,0.15)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: category.color,
                    boxShadow: `0 0 10px ${category.color}`,
                  }}
                />
                <h3
                  className="font-orbitron text-lg font-bold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + catIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-[rgba(255,79,216,0.1)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {item.iconSrc ? (
                        <img
                          src={item.iconSrc}
                          alt={`${item.name} icon`}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-lg">{item.icon}</span>
                      )}
                      <span className="text-gray-200 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                    {/* level removed as per request */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
