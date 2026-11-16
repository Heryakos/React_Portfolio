import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { resume, hiryakosAvatar, githubAvatar, xokaExperience, github } from "../assets";
import CredentialsVault from "./CredentialsVault";
import { useGithubLive } from "../hooks/useGithubLive";

const UpworkSpotlight = () => {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const githubLive = useGithubLive();
  const upworkProfileUrl = "https://www.upwork.com/freelancers/~01d887f4b877df25ac";
  const linkedInProfileUrl = "https://www.linkedin.com/in/heryakos";
  const githubProfileUrl = "https://github.com/Heryakos";

  return (
    <>
      <span className="hash-span" id="profiles">&nbsp;</span>
      <span className="hash-span" id="linkedin">&nbsp;</span>
      
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={styles.sectionSubText}>Verified Professional Profiles</p>
        <h2 className={styles.sectionHeadText}>(02) PROFILES &amp; TRUST HUB.</h2>
        <p className="mt-3 text-slate-600 dark:text-secondary text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Cross-verified industry presence across enterprise engineering at Federal Housing Corporation, global freelancing on Upwork, and open-source systems on GitHub.
        </p>
      </motion.div>

      {/* Triad Profiles Grid: LinkedIn + Upwork + GitHub */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* ── CARD 1: LINKEDIN VERIFIED SENIOR ENGINEER ── */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="relative bg-white dark:bg-gradient-to-br dark:from-[#0c162d]/95 dark:via-[#080d1a]/95 dark:to-[#0b1325]/90 backdrop-blur-xl border border-slate-200 dark:border-blue-500/20 hover:border-blue-400/80 rounded-3xl p-6 sm:p-7 shadow-sm dark:shadow-card hover:shadow-[0_12px_36px_rgba(59,130,246,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
          
          <div>
            {/* Platform Badge Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#0077b5] text-white flex items-center justify-center font-black text-base shadow-sm">
                  in
                </span>
                <div>
                  <span className="text-slate-900 dark:text-white font-bold text-[13.5px] flex items-center gap-1.5">
                    LinkedIn Verified
                    <span className="text-blue-500 dark:text-blue-400" title="Verified Identity">●</span>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400/80 font-mono text-[11px] block truncate max-w-[140px]">
                    in/heryakos
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-[11px] font-mono font-semibold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                82+ Viewers
              </div>
            </div>

            {/* Profile Identity Row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-md ring-2 ring-blue-500/15 bg-slate-100 dark:bg-[#0d1527] flex items-center justify-center">
                  <img
                    src={hiryakosAvatar}
                    alt="Hiryakos Meles"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white dark:border-[#080d1a] text-white flex items-center justify-center text-[10px] font-bold shadow-sm" title="Verified Professional Identity">
                  ✓
                </div>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">
                  Hiryakos Meles
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-[13px] mt-0.5">
                  Senior Software Engineer
                </p>
                <p className="text-slate-500 dark:text-slate-300 text-[11.5px] flex items-center gap-1 mt-0.5">
                  <span>🏛️</span> Federal Housing Corp (FHC)
                </p>
              </div>
            </div>

            {/* Enterprise Scope Box */}
            <div className="bg-slate-50 dark:bg-black/40 rounded-2xl p-3.5 border border-slate-200 dark:border-white/5 space-y-2 mb-4">
              <p className="text-slate-500 dark:text-slate-400 text-[10.5px] font-mono uppercase tracking-wider font-bold">
                Enterprise Engineering Scope
              </p>
              <div className="space-y-1.5 text-[12px]">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 dark:text-blue-400">▹</span> FHC Clinic ERPNext Module
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 dark:text-blue-400">▹</span> Legal Case Tracker System
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 dark:text-blue-400">▹</span> Bulk SMS Messaging Gateway
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 dark:text-blue-400">▹</span> Linux Nginx &amp; MariaDB Tuning
                </div>
              </div>
            </div>

            {/* Academic Credentials Trigger */}
            <div className="mb-5">
              <button
                type="button"
                onClick={() => setIsVaultOpen(true)}
                className="w-full text-left p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-blue-400 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="space-y-1 text-[11.5px]">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">🎓 BSc:</span>
                    <span className="truncate">Computer Science (St. Mary's)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">📚 MPM:</span>
                    <span className="truncate">Master of Project Management</span>
                  </div>
                </div>
                <div className="shrink-0 ml-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all inline-flex items-center gap-1">
                    <span>Vault</span>
                    <span>↗</span>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
            <a
              href={linkedInProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[13px] transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>View LinkedIn</span>
              <span className="text-[11px]">↗</span>
            </a>

            <a
              href="https://t.me/Hiryakos_Meles"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 font-bold text-[12.5px] transition-all flex items-center gap-1 shrink-0"
              title="Message on Telegram"
            >
              <span>✈️</span> Telegram
            </a>
          </div>
        </motion.div>


        {/* ── CARD 2: UPWORK TOP-RATED TALENT PROFILE ── */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="relative bg-white dark:bg-gradient-to-br dark:from-[#0a2318]/95 dark:via-[#07130f]/95 dark:to-[#091f15]/90 backdrop-blur-xl border border-slate-200 dark:border-emerald-500/25 hover:border-emerald-400/80 rounded-3xl p-6 sm:p-7 shadow-sm dark:shadow-card hover:shadow-[0_12px_36px_rgba(16,185,129,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

          <div>
            {/* Platform Badge Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#14a800] text-white flex items-center justify-center font-black text-base shadow-sm">
                  Up
                </span>
                <div>
                  <span className="text-slate-900 dark:text-white font-bold text-[13.5px] flex items-center gap-1.5">
                    Upwork Verified
                    <span className="text-emerald-500 dark:text-emerald-400" title="Verified Freelancer">●</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400/80 font-mono text-[11px] block truncate max-w-[140px]">
                    upwork.com/freelancers
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-semibold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available Now
              </div>
            </div>

            {/* Profile Identity Row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-md ring-2 ring-emerald-500/15 bg-slate-100 dark:bg-[#091b13] flex items-center justify-center">
                  <img
                    src={hiryakosAvatar}
                    alt="Hiryakos M."
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 border-2 border-white dark:border-[#07130f] text-white flex items-center justify-center text-[10px] font-bold shadow-sm" title="Upwork Verified Identity">
                  ✓
                </div>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight flex items-center gap-1.5">
                  <span>Hiryakos M.</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-bold" title="Identity Verified">
                    ✓
                  </span>
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-[13px] mt-0.5">
                  Full Stack Developer
                </p>
                <p className="text-slate-500 dark:text-slate-300 text-[11.5px] flex items-center gap-1 mt-0.5">
                  <span>📍</span> Addis Ababa &bull; Verified Enterprise Talent
                </p>
              </div>
            </div>

            {/* Verified Metrics Grid (2x2) */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-emerald-600 dark:text-emerald-400 font-black text-base sm:text-lg">100%</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Job Success</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">5.0 ★</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Client Rating</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">Top</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Verified</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">Custom</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Enterprise</p>
              </div>
            </div>

            {/* Upwork Profile Statement */}
            <blockquote className="bg-slate-50 dark:bg-black/40 rounded-2xl p-3.5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed italic mb-5 line-clamp-4">
              &ldquo;I build web applications, business systems, and ERP solutions using Angular, .NET, React, Python, and Frappe/ERPNext. With 3+ years of experience, I help businesses build software, automate workflows, and solve technical problems.&rdquo;
            </blockquote>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
            <a
              href={upworkProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[13px] transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Hire on Upwork</span>
              <span className="text-[11px]">↗</span>
            </a>

            <a
              href={resume}
              download="Hiryakos_Meles_Resume.pdf"
              className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 font-bold text-[12.5px] transition-all flex items-center gap-1 shrink-0"
              title="Download Verified Resume PDF"
            >
              <span>📄</span> Resume
            </a>
          </div>
        </motion.div>


        {/* ── CARD 3: GITHUB VERIFIED ENGINEERING PROFILE ── */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="md:col-span-2 lg:col-span-1 relative bg-white dark:bg-gradient-to-br dark:from-[#180d2a]/95 dark:via-[#0c0817]/95 dark:to-[#140b22]/90 backdrop-blur-xl border border-slate-200 dark:border-purple-500/25 hover:border-purple-400/80 rounded-3xl p-6 sm:p-7 shadow-sm dark:shadow-card hover:shadow-[0_12px_36px_rgba(147,51,234,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

          <div>
            {/* Platform Badge Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center p-2 shadow-sm border border-slate-700">
                  <img src={github} alt="GitHub" className="w-full h-full object-contain filter invert-0" />
                </span>
                <div>
                  <span className="text-slate-900 dark:text-white font-bold text-[13.5px] flex items-center gap-1.5">
                    GitHub Verified
                    <span className="text-purple-500 dark:text-purple-400" title="Verified Engineering Profile">●</span>
                  </span>
                  <span className="text-purple-600 dark:text-purple-400/80 font-mono text-[11px] block truncate max-w-[140px]">
                    github.com/Heryakos
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-[11px] font-mono font-semibold shrink-0" title="Live Synced with GitHub REST API">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{githubLive.repos} Repos</span>
                <span className="text-[9px] px-1 py-0.5 rounded bg-purple-200/60 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 font-sans font-bold">LIVE</span>
              </div>
            </div>

            {/* Profile Identity Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-md ring-2 ring-purple-500/15 bg-slate-100 dark:bg-[#110a1d] flex items-center justify-center">
                  <img
                    src={githubLive.avatarUrl || githubAvatar}
                    onError={(e) => { e.currentTarget.src = githubAvatar; }}
                    alt="Hiryakos Meles"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-purple-600 border-2 border-white dark:border-[#0c0817] text-white flex items-center justify-center text-[10px] font-bold shadow-sm" title="GitHub Verified Developer">
                  ✓
                </div>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight flex items-center gap-1.5">
                  <span>{githubLive.name}</span>
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-[13px] mt-0.5">
                  @{githubLive.username}
                </p>
                <p className="text-slate-500 dark:text-slate-300 text-[11.5px] flex items-center gap-1 mt-0.5">
                  <span>💻</span> Full-Stack &amp; Project Manager
                </p>
              </div>
            </div>

            {/* Live Activity Pulse */}
            <div className="flex items-center justify-between text-[11px] font-mono text-purple-700 dark:text-purple-300/80 bg-purple-50/70 dark:bg-purple-950/30 px-3 py-1.5 rounded-xl border border-purple-100 dark:border-purple-900/30 mb-3">
              <span className="flex items-center gap-1.5 truncate">
                <span className="text-emerald-500">⚡</span>
                <span className="font-semibold text-slate-800 dark:text-purple-200 truncate">{githubLive.latestRepo}</span>
              </span>
              <span className="text-slate-500 dark:text-slate-400 shrink-0 text-[10.5px]">pushed {githubLive.latestPushRelative}</span>
            </div>

            {/* Verified Metrics Grid (2x2) */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">{githubLive.repos}</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Repos</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">{githubLive.stars}</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Stars</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">{githubLive.followers}</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Followers</p>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 rounded-xl p-2.5 border border-slate-200 dark:border-white/5 text-center">
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">{githubLive.profileViews}</p>
                <p className="text-slate-500 dark:text-slate-400 text-[9.5px] font-mono uppercase mt-0.5">Views</p>
              </div>
            </div>

            {/* GitHub Bio Statement */}
            <blockquote className="bg-slate-50 dark:bg-black/40 rounded-2xl p-3.5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed italic mb-5 line-clamp-4">
              &ldquo;{githubLive.bio}&rdquo;
            </blockquote>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-[13px] transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>View GitHub</span>
              <span className="text-[11px]">↗</span>
            </a>

            <a
              href="#projects"
              className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 font-bold text-[12.5px] transition-all flex items-center gap-1 shrink-0"
              title="Explore Repositories in Selected Work"
            >
              <span>📂</span> Repos
            </a>
          </div>
        </motion.div>

      </div>

      {/* Official Recommendation & Letter of Experience Banner */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-8 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-white/5 border border-amber-200 dark:border-white/10 flex items-center justify-center text-2xl shrink-0">
            📜
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-[15px]">
              Official Letter of Experience &bull; XOKA IT Solutions PLC
            </h4>
            <p className="text-slate-600 dark:text-secondary text-[12.5px] mt-0.5">
              Verified software engineering tenure (05/2023 &ndash; 2024), signed by Senior Software Engineer Binyam Getachew.
            </p>
          </div>
        </div>

        <a
          href={xokaExperience}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white font-bold text-[12.5px] border border-slate-800 dark:border-white/15 transition-all flex items-center gap-2 shrink-0 shadow-sm"
        >
          <span>View Verified Letter (PDF)</span>
          <span>↗</span>
        </a>
      </motion.div>

      {/* Verified Credentials Lightbox Modal */}
      <CredentialsVault
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </>
  );
};

export default SectionWrapper(UpworkSpotlight, "upwork");
