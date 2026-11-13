import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { resume, xokaExperience } from "../assets";

const BentoGrid = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={styles.sectionSubText}>Verified Professional Background</p>
        <h2 className={styles.sectionHeadText}>(01) EXECUTIVE OVERVIEW.</h2>
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Over 3 years of enterprise software engineering, Frappe/ERPNext systems development, and postgraduate project management leadership.
        </p>
      </motion.div>

      {/* 100% Real Bento Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Card 1: Enterprise Track Record (Col 7) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="lg:col-span-7 bg-white dark:bg-tertiary/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-electric-blue/40 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-card flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 text-electric-blue font-mono text-[12px] uppercase tracking-wider mb-2">
              <span>●</span> Enterprise Systems Experience
            </div>
            <h3 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-black tracking-tight mb-4">
              Federal Housing Corporation &amp; Enterprise Solutions
            </h3>
            <p className="text-slate-600 dark:text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-6">
              Currently serving as Senior Software Engineer at the <strong className="text-slate-900 dark:text-white">Federal Housing Corporation</strong> in Addis Ababa. I architect and maintain mission-critical corporate modules on the Frappe/ERPNext framework, alongside full-stack Angular and Python web applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5 space-y-1.5">
                <span className="text-electric-blue font-mono font-bold text-[12px] block">
                  HEALTHCARE ERP
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-[14px]">Clinic Operations</h4>
                <p className="text-slate-600 dark:text-secondary text-[12px] leading-snug">
                  Patient registry, digital doctor logs &amp; automated PDF reporting.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5 space-y-1.5">
                <span className="text-purple-600 dark:text-purple-400 font-mono font-bold text-[12px] block">
                  LEGAL ERP
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-[14px]">Case Management</h4>
                <p className="text-slate-600 dark:text-secondary text-[12px] leading-snug">
                  Court hearing reminders, document archival &amp; lawyer role access.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5 space-y-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[12px] block">
                  COMMUNICATIONS
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-[14px]">SMS Platform</h4>
                <p className="text-slate-600 dark:text-secondary text-[12px] leading-snug">
                  Targeted mass broadcasts, message templates &amp; delivery tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-[13px] text-slate-600 dark:text-secondary">
            <span>Verified Production Deployments (Addis Ababa, Ethiopia)</span>
            <a
              href="#projects"
              className="text-slate-900 dark:text-white hover:text-electric-blue font-bold flex items-center gap-1 transition-colors"
            >
              Inspect Case Studies →
            </a>
          </div>
        </motion.div>

        {/* Card 2: Academic Degrees & Credentials (Col 5) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="lg:col-span-5 bg-white dark:bg-tertiary/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-card flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-[12px] uppercase tracking-wider mb-2">
              <span>🎓</span> Formal Degrees &amp; Certifications
            </div>
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-2xl font-black tracking-tight mb-4">
              Computer Science &amp; Management
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5">
                <span className="text-purple-600 dark:text-purple-400 font-mono text-[11px] font-bold block mb-1">
                  POSTGRADUATE DEGREE
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-[15px]">
                  Master of Project Management (MPM)
                </h4>
                <p className="text-slate-600 dark:text-secondary text-[13px]">Alpha University • MPM Candidate</p>
                <p className="text-slate-500 dark:text-slate-400 text-[12px] mt-1 leading-relaxed">
                  Project procurement, Agile/Scrum sprint frameworks, risk management, and stakeholder leadership.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-[11px] font-bold block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h4 className="text-slate-900 dark:text-white font-bold text-[15px]">BSc in Computer Science</h4>
                <p className="text-slate-600 dark:text-secondary text-[13px]">St. Mary's University College</p>
                <p className="text-slate-500 dark:text-slate-400 text-[12px] mt-1 leading-relaxed">
                  Software engineering, database architecture, algorithms, and distributed systems.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
            <a
              href={resume}
              download="Hiryakos_Meles_Resume.pdf"
              className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-bold text-[13px] flex items-center gap-1.5 transition-colors"
            >
              <span>📄</span> Download CV &amp; Resume
            </a>

            <a
              href={xokaExperience}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-white text-[12px] underline transition-colors"
            >
              XOKA Experience Letter
            </a>
          </div>
        </motion.div>

        {/* Card 3: Prior Experience & Verified Letter (Col 6) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="lg:col-span-6 bg-white dark:bg-tertiary/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-card flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-[12px] uppercase tracking-wider mb-2">
              <span>🏢</span> Verified Employment History
            </div>
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-2xl font-black tracking-tight mb-2">
              XOKA IT Solution PLC
            </h3>
            <span className="text-slate-500 dark:text-secondary text-[13px] font-mono block mb-4">
              Software Engineer • Addis Ababa (05/2023 – 2024)
            </span>

            <p className="text-slate-600 dark:text-secondary text-[14px] leading-relaxed mb-4">
              Successfully contributed to enterprise software projects, client-server application architecture, and database optimization. Verified by official corporate experience certification.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-slate-900 dark:text-white font-bold text-[13px] block">
                Colleague Endorsement:
              </span>
              <p className="text-slate-700 dark:text-slate-300 italic text-[13px] leading-relaxed">
                "His deep understanding of database structures and Frappe framework helped us optimize ERP operations significantly."
              </p>
              <span className="text-slate-500 dark:text-secondary text-[11px] block text-right">
                — Binyam Getachew, Senior Software Engineer, XOKA IT Solutions
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-slate-500 dark:text-secondary text-[12px]">Officially Certified</span>
            <a
              href={xokaExperience}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 text-[13px] font-bold flex items-center gap-1"
            >
              Open Certificate (PDF) ↗
            </a>
          </div>
        </motion.div>

        {/* Card 4: Location, Communication & Direct Contacts (Col 6) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="lg:col-span-6 bg-white dark:bg-tertiary/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-card flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-[12px] uppercase tracking-wider mb-2">
              <span>📍</span> Location &amp; Communication
            </div>
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-2xl font-black tracking-tight mb-2">
              Addis Ababa, Ethiopia
            </h3>
            <span className="text-slate-500 dark:text-secondary text-[13px] block mb-4">
              Available for On-Site Enterprise Contracts &amp; Remote Engagements
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-secondary text-[11px] font-mono block">LANGUAGES</span>
                <span className="text-slate-900 dark:text-white font-bold text-[14px] block mt-1">Amharic</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">Native Proficiency</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-secondary text-[11px] font-mono block">LANGUAGES</span>
                <span className="text-slate-900 dark:text-white font-bold text-[14px] block mt-1">English</span>
                <span className="text-blue-600 dark:text-blue-400 text-[11px] font-semibold">Professional Working</span>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-slate-100 dark:bg-black-100/60 border border-slate-200 dark:border-white/5 space-y-1.5 text-[13px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-secondary">Email:</span>
                <a href="mailto:heryakosmeles@gmail.com" className="text-slate-900 dark:text-white hover:text-electric-blue font-mono font-semibold">
                  heryakosmeles@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-secondary">Telegram:</span>
                <a href="https://t.me/Hiryakos_Meles" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-electric-blue font-mono font-semibold">
                  @Hiryakos_Meles
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-secondary">LinkedIn:</span>
                <a href="https://linkedin.com/in/heryakos" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-electric-blue font-mono font-semibold">
                  linkedin.com/in/heryakos
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-slate-500 dark:text-secondary text-[12px]">GMT+3 Timezone</span>
            <a href="#contact" className="text-electric-blue hover:text-blue-600 dark:hover:text-blue-400 text-[13px] font-bold">
              Send Direct Message →
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(BentoGrid, "about");
