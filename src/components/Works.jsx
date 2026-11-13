import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  gallery,
  source_code_link,
  live_demo_link,
  client,
  caseStudy,
  onViewCaseStudy,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlayingSoundbox, setIsPlayingSoundbox] = useState(false);

  const playSoundboxDemo = (e) => {
    e.stopPropagation();
    if (isPlayingSoundbox) return;
    setIsPlayingSoundbox(true);

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }

      if ("speechSynthesis" in window) {
        setTimeout(() => {
          const text = "Payment confirmed. Fifty Birr received via AddisPay.";
          const utter = new SpeechSynthesisUtterance(text);
          utter.rate = 1.05;
          utter.pitch = 1.1;
          utter.onend = () => setIsPlayingSoundbox(false);
          utter.onerror = () => setIsPlayingSoundbox(false);
          window.speechSynthesis.speak(utter);
        }, 350);
      } else {
        setTimeout(() => setIsPlayingSoundbox(false), 2000);
      }
    } catch (err) {
      setTimeout(() => setIsPlayingSoundbox(false), 1500);
    }
  };

  const images = gallery && gallery.length > 0 ? [image, ...gallery] : [image];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImgSrc = String(images[currentImageIndex] || "");
  const isMobile = currentImgSrc.toLowerCase().includes("mobile");
  const isComposite =
    currentImgSrc.toLowerCase().includes("showcase") ||
    currentImgSrc.toLowerCase().includes("combined");

  // Derive a clean mock browser host from the demo link or project name
  const getHostLabel = () => {
    if (live_demo_link) {
      return live_demo_link
        .replace(/^https?:\/\//, "")
        .replace(/\/.*$/, "")
        .replace("fhcerp.efhc.gov.et", "fhcerp.efhc.gov.et (FHC ERP)")
        .replace("pay-taxi-ethiopia.vercel.app", "paytaxi.et (AddisPay)");
    }
    return "production.internal";
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="flex flex-col h-full bg-white dark:bg-[#0a0f1d]/90 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 hover:border-electric-blue/40 shadow-sm dark:shadow-card hover:shadow-[0_12px_36px_rgba(56,189,248,0.16)] transition-all duration-300 overflow-hidden group justify-between"
    >
      {/* ── Mockup Browser Window Header ── */}
      <div className="w-full bg-slate-100 dark:bg-[#0d1424] px-4 py-2.5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        <div className="px-2.5 py-0.5 rounded-md bg-white dark:bg-black/50 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate max-w-[190px]">
          {getHostLabel()}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10.5px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-black/60 text-electric-blue border border-electric-blue/20">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── High-Fidelity Image Showcase ── */}
      <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden select-none flex items-center justify-center group/img">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`transition-transform duration-500 group-hover/img:scale-105 ${
              isMobile
                ? "max-h-[200px] w-auto object-contain py-1 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                : isComposite
                ? "w-full h-full object-contain p-2"
                : "w-full h-full object-cover object-top"
            }`}
          />
        </AnimatePresence>

        {/* Top-Right Action Link Buttons */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          {live_demo_link && (
            <button
              onClick={() =>
                window.open(
                  live_demo_link.startsWith("http")
                    ? live_demo_link
                    : `https://${live_demo_link}`,
                  "_blank"
                )
              }
              className="w-7 h-7 rounded-full bg-black/80 hover:bg-electric-blue text-white flex items-center justify-center border border-white/20 transition-all shadow-md"
              title="Open Live Application"
            >
              <span className="text-[11px]">↗</span>
            </button>
          )}

          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-7 h-7 rounded-full bg-black/80 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all shadow-md"
              title="View Source on GitHub"
            >
              <img src={github} alt="github" className="w-3.5 h-3.5 object-contain" />
            </button>
          )}
        </div>

        {/* Gallery Image Counter & Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10 text-[13px] border border-white/10"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10 text-[13px] border border-white/10"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Pill Counter Badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 bg-black/75 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-300">
                📷 {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Card Body (Standardized Proportions) ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Client & Category Tag */}
          <div className="text-electric-blue font-mono text-[11.5px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 truncate">
            <span>●</span>
            <span className="truncate">{client || "Software Solution"}</span>
          </div>

          <h3 className="text-slate-900 dark:text-white font-bold text-[18px] sm:text-[19px] tracking-tight leading-snug line-clamp-2 min-h-[50px] flex items-center">
            {name}
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300 text-[13px] sm:text-[13.5px] leading-relaxed line-clamp-3 min-h-[58px]">
            {description}
          </p>

          {/* PayTaxi Real-Time Voice Soundbox Demo Button */}
          {name.toLowerCase().includes("paytaxi") && (
            <button
              onClick={playSoundboxDemo}
              className="w-full mt-3 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[11.5px] font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <span>{isPlayingSoundbox ? "🔊 Broadcasting Soundbox..." : "🔊 Test Driver Voice Soundbox"}</span>
              {isPlayingSoundbox && (
                <span className="flex gap-0.5 items-center">
                  <span className="w-1 h-3 bg-emerald-500 animate-pulse" />
                  <span className="w-1 h-4 bg-emerald-500 animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-emerald-500 animate-pulse delay-150" />
                </span>
              )}
            </button>
          )}
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[28px] items-center">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag.name}
                className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
            {caseStudy ? (
              <button
                onClick={onViewCaseStudy}
                className="text-[13px] font-bold text-electric-blue hover:text-blue-500 flex items-center gap-1.5 transition-colors"
              >
                <span>View Case Study</span>
                <span>→</span>
              </button>
            ) : (
              <span className="text-[12px] text-slate-500 dark:text-slate-400">Production Deployed</span>
            )}

            {live_demo_link && (
              <a
                href={
                  live_demo_link.startsWith("http")
                    ? live_demo_link
                    : `https://${live_demo_link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyModal = ({ project, onClose }) => {
  if (!project || !project.caseStudy) return null;

  const images =
    project.gallery && project.gallery.length > 0
      ? [project.image, ...project.gallery]
      : [project.image];

  const [activeModalImg, setActiveModalImg] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0b0f19] w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-start bg-[#0e1320]">
          <div>
            {project.client && (
              <span className="text-electric-blue font-mono text-[12px] uppercase font-bold tracking-wider block mb-1">
                Client / Organization: {project.client}
              </span>
            )}
            <h3 className="text-white text-xl sm:text-2xl font-black">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-secondary hover:text-white flex items-center justify-center text-lg font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Active Screenshot Display */}
          {images.length > 0 && (
            <div className="space-y-3">
              <div className="w-full h-[280px] sm:h-[360px] rounded-2xl bg-black/80 border border-white/10 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={images[activeModalImg]}
                  alt="Full preview"
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              {/* Thumbnails Strip */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveModalImg(i)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border flex-shrink-0 transition-all ${
                        activeModalImg === i
                          ? "border-electric-blue ring-2 ring-electric-blue/50 scale-105"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div>
            <h4 className="text-amber-400 text-[15px] font-bold mb-2 flex items-center gap-2">
              <span>⚠️</span> The Problem &amp; Operational Challenge
            </h4>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h4 className="text-electric-blue text-[15px] font-bold mb-2 flex items-center gap-2">
              <span>💡</span> Engineered Solution &amp; Technical Implementation
            </h4>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>

          <div>
            <h4 className="text-emerald-400 text-[15px] font-bold mb-2 flex items-center gap-2">
              <span>📈</span> Real-World Business Results &amp; Impact
            </h4>
            <p className="text-slate-300 text-[14px] leading-relaxed">
              {project.caseStudy.impact}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            {project.live_demo_link && (
              <a
                href={
                  project.live_demo_link.startsWith("http")
                    ? project.live_demo_link
                    : `https://${project.live_demo_link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-electric-blue hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full transition-all text-[13px] flex items-center gap-2"
              >
                <span>🔗</span> Open Live Application ↗
              </a>
            )}

            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-full border border-white/15 transition-all text-[13px] flex items-center gap-2"
              >
                <span>🐙</span> View Code Repository ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "erp", label: "Enterprise ERPNext" },
    { id: "fintech", label: "FinTech & Mobility" },
    { id: "web", label: "Web Applications" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "erp")
      return (
        p.name.includes("ERP") ||
        p.name.includes("FHC") ||
        p.tags.some((t) => t.name.toLowerCase().includes("frappe"))
      );
    if (activeFilter === "fintech")
      return (
        p.name.includes("PayTaxi") ||
        p.tags.some((t) => t.name.toLowerCase().includes("fintech"))
      );
    if (activeFilter === "web")
      return (
        p.name.includes("Game Hub") ||
        p.name.includes("Commerce") ||
        p.name.includes("Portfolio")
      );
    return true;
  });

  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-8 pt-6">
        <p className={styles.sectionSubText}>Verified Enterprise Case Studies</p>
        <h2 className={styles.sectionHeadText}>(03) SELECTED WORK.</h2>
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Production systems developed for the Federal Housing Corporation, urban transit mobility, and modern web platforms.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveFilter(c.id)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all ${
              activeFilter === c.id
                ? "bg-electric-blue text-white shadow-glow"
                : "bg-slate-200/70 dark:bg-tertiary/60 text-slate-700 dark:text-secondary hover:text-slate-900 dark:hover:text-white border border-slate-300/80 dark:border-white/5"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Completely Equal & Uniform Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onViewCaseStudy={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
