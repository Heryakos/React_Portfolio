import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import {
  pythonIcon,
  netIcon,
  javascript,
  typescript,
  sql,
  reactjs,
  Angular,
  nodejs,
  tailwind,
  docker,
  git,
  figma,
  html,
  css,
  mongodb,
  threejs,
  frappe,
  linux,
  nginx,
  postgresql,
  supabase,
  mariadb,
  sqlServer,
} from "../assets";

const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "erp", label: "Enterprise & ERP" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "database", label: "Databases & APIs" },
];

const skillsData = [
  {
    name: "Python",
    category: "erp",
    role: "Frappe & Server Backend",
    icon: pythonIcon,
    level: "Advanced",
  },
  {
    name: "ERPNext & Frappe",
    category: "erp",
    role: "Doctypes, Hooks & Reports",
    icon: frappe,
    level: "Specialist",
  },
  {
    name: "C# / .NET Core",
    category: "fullstack",
    role: "Enterprise REST APIs",
    icon: netIcon,
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "fullstack",
    role: "Type-Safe Full-Stack",
    icon: typescript,
    level: "Advanced",
  },
  {
    name: "Angular",
    category: "fullstack",
    role: "Enterprise SPA Architecture",
    icon: Angular,
    level: "Advanced",
  },
  {
    name: "React & Next.js",
    category: "fullstack",
    role: "Modern Interactive UI",
    icon: reactjs,
    level: "Advanced",
  },
  {
    name: "Linux (Ubuntu/Debian)",
    category: "devops",
    role: "Server Admin & Hardening",
    icon: linux,
    level: "Advanced",
  },
  {
    name: "Docker & Compose",
    category: "devops",
    role: "Containerized Services",
    icon: docker,
    level: "Proficient",
  },
  {
    name: "Nginx Reverse Proxy",
    category: "devops",
    role: "SSL, Gzip, Load Balancing",
    icon: nginx,
    level: "Advanced",
  },
  {
    name: "PostgreSQL",
    category: "database",
    role: "Relational Schema & Indexing",
    icon: postgresql,
    level: "Advanced",
  },
  {
    name: "Supabase",
    category: "database",
    role: "Realtime DB & Edge Auth",
    icon: supabase,
    level: "Advanced",
  },
  {
    name: "MariaDB & MySQL",
    category: "database",
    role: "ERPNext Database Engine",
    icon: mariadb,
    level: "Advanced",
  },
  {
    name: "SQL Server",
    category: "database",
    role: "Enterprise Stored Procedures",
    icon: sqlServer,
    level: "Advanced",
  },
  {
    name: "Node.js & Express",
    category: "fullstack",
    role: "Microservices & SSE Engine",
    icon: nodejs,
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "fullstack",
    role: "Responsive Design Systems",
    icon: tailwind,
    level: "Advanced",
  },
  {
    name: "Git & GitHub Actions",
    category: "devops",
    role: "Version Control & CI/CD",
    icon: git,
    level: "Advanced",
  },
  {
    name: "JavaScript (ES6+)",
    category: "fullstack",
    role: "Client & Server Execution",
    icon: javascript,
    level: "Advanced",
  },
];

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-8">
        <p className={styles.sectionSubText}>Verified Core Competencies</p>
        <h2 className={styles.sectionHeadText}>Technical Arsenal.</h2>
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Engineered across 3+ years of production deployments, enterprise workflows, and high-availability servers.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-electric-blue text-white shadow-glow"
                : "bg-slate-200/70 dark:bg-tertiary/60 text-slate-700 dark:text-secondary hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 border border-slate-300/80 dark:border-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-white dark:bg-tertiary/40 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-electric-blue/50 dark:hover:border-electric-blue/40 shadow-sm dark:shadow-none hover:shadow-glow transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-100 dark:bg-black-100/60 p-2.5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-slate-200/60 dark:border-transparent">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              <h4 className="text-slate-900 dark:text-white font-bold text-[15px] sm:text-[16px] mb-1">
                {skill.name}
              </h4>
              <p className="text-slate-600 dark:text-secondary text-[12px] leading-snug mb-3">
                {skill.role}
              </p>

              <span className="mt-auto px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
