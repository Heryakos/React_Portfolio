import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { xokaExperience, resume } from "../assets";

const credentialsData = [
  {
    id: "fhc",
    title: "Senior Software Engineer Appointment",
    issuer: "Federal Housing Corporation (FHC)",
    location: "Addis Ababa, Ethiopia",
    period: "2023 – Present",
    type: "Government Enterprise Systems",
    icon: "🏛️",
    summary:
      "Full lifecycle architecture and deployment of enterprise ERPNext/Frappe modules, clinical management systems, legal case tracking workflows, and bulk SMS broadcasting for Federal Housing Corporation.",
    skills: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "Linux Server Admin"],
    docType: "Enterprise Appointment",
    linkText: "Download Full Resume PDF",
    fileUrl: resume,
  },
  {
    id: "xoka",
    title: "Full-Stack Software Engineer & DevOps",
    issuer: "XOKA IT Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Verified Experience",
    type: "Enterprise IT & Cloud Solutions",
    icon: "🏢",
    summary:
      "Engineered backend microservices, .NET Core APIs, Angular enterprise SPAs, and managed CI/CD deployments and Nginx reverse proxy routing across multi-tenant production systems.",
    skills: ["C# / .NET Core", "Angular", "SQL Server", "Docker", "DevOps"],
    docType: "Official Experience Letter",
    linkText: "View XOKA Experience Certificate",
    fileUrl: xokaExperience,
  },
  {
    id: "mpm",
    title: "Master of Project Management (MPM)",
    issuer: "Alpha University",
    location: "Addis Ababa, Ethiopia",
    period: "Candidate",
    type: "Postgraduate Academic Degree",
    icon: "📘",
    summary:
      "Advanced project management methodology, agile enterprise delivery, risk mitigation, software lifecycle orchestration, resource budgeting, and stakeholder alignment for large-scale engineering initiatives.",
    skills: ["Agile/Scrum", "Risk Management", "Budgeting", "Enterprise Delivery"],
    docType: "Postgraduate Degree Candidate",
    linkText: "Inquire Academic Records",
    fileUrl: resume,
  },
  {
    id: "bsc",
    title: "Bachelor of Science in Computer Science (BSc)",
    issuer: "St. Mary's University College",
    location: "Addis Ababa, Ethiopia",
    period: "Accredited Degree",
    type: "Undergraduate Academic Degree",
    icon: "🎓",
    summary:
      "Comprehensive computer science foundations: data structures, algorithm design, relational database architecture, distributed systems, operating system internals, and software engineering principles.",
    skills: ["Computer Science", "Algorithms", "Database Architecture", "System Design"],
    docType: "Accredited Bachelor Degree",
    linkText: "Verified Academic Record",
    fileUrl: resume,
  },
];

const CredentialsVault = ({ isOpen, onClose }) => {
  const [selectedCred, setSelectedCred] = useState(credentialsData[0]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-[#0c1222] w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-[#090d19]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-electric-blue/10 border border-electric-blue/30 text-electric-blue flex items-center justify-center text-lg">
                🛡️
              </span>
              <div>
                <h3 className="text-slate-900 dark:text-white font-black text-lg sm:text-xl tracking-tight">
                  Verified Academic &amp; Career Vault
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">
                  Cross-verified credentials, university degrees &amp; enterprise service letters
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-700 dark:text-white flex items-center justify-center transition-all text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Body: Split View (List on left, Detail on right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto flex-1">
            {/* Left Column: Credential Selector */}
            <div className="md:col-span-5 p-4 border-r border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/20 flex flex-col gap-2.5">
              {credentialsData.map((cred) => {
                const isSelected = selectedCred.id === cred.id;
                return (
                  <button
                    key={cred.id}
                    onClick={() => setSelectedCred(cred)}
                    className={`p-3.5 rounded-2xl text-left transition-all border flex items-start gap-3 ${
                      isSelected
                        ? "bg-white dark:bg-white/10 border-electric-blue shadow-md"
                        : "bg-white/60 dark:bg-white/[0.02] border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{cred.icon}</span>
                    <div className="min-w-0">
                      <h4 className={`text-xs font-bold truncate ${isSelected ? "text-electric-blue" : "text-slate-800 dark:text-slate-200"}`}>
                        {cred.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {cred.issuer}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                        {cred.period}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Full Verification Details */}
            <div className="md:col-span-7 p-6 flex flex-col justify-between gap-6 bg-white dark:bg-[#0c1222]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    ● {selectedCred.type}
                  </span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-mono">
                    📍 {selectedCred.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                  {selectedCred.title}
                </h3>
                <p className="text-sm font-semibold text-electric-blue mt-1">
                  {selectedCred.issuer}
                </p>

                <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {selectedCred.summary}
                </p>

                {/* Skills tags */}
                <div className="mt-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Competencies &amp; Domains:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCred.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link / Download */}
              <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Verification Status: <strong className="text-emerald-600 dark:text-emerald-400">Verified &amp; Active</strong>
                </span>
                <a
                  href={selectedCred.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-electric-blue hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-glow transition-all"
                >
                  <span>📄</span>
                  <span>{selectedCred.linkText} ↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CredentialsVault;

