import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import {
  resume,
  hiryakosAvatar,
  pythonIcon,
  netIcon,
  typescript,
  Angular,
  reactjs,
  linux,
  docker,
  nginx,
  postgresql,
  mariadb,
  sqlServer,
  nodejs,
  tailwind,
  git,
  frappe,
} from "../assets";

const consoleTabs = [
  {
    id: "paytaxi",
    label: "PayTaxi FinTech",
    badge: "LIVE SOUNDBOX",
    badgeColor: "bg-sky-500/20 text-sky-600 dark:text-sky-400 border-sky-500/30",
    title: "Minibus Contactless Transit & Soundbox Simulator",
    tagline: "Sub-250ms Audio Broadcast over Server-Sent Events (SSE)",
    codeSnippet: `// Driver Audio Soundbox — Server-Sent Event Broadcast
router.post('/api/payments/confirm', async (req, res) => {
  const { taxi_id, amount_etb, ref_no } = req.body;
  const verified = await addisPayGateway.verify(ref_no);
  if (verified) {
    soundboxStream.emit(taxi_id, {
      audio: 'et_ET_amount_received',
      amount: amount_etb,
      timestamp: Date.now()
    });
    return res.json({ status: 'PROCESSED', soundbox: 'BROADCASTED' });
  }
});`,
    footerNote: "Next.js 16 • Express Microservice • Supabase PostgreSQL • SSE",
  },
  {
    id: "architecture",
    label: "FHC ERPNext",
    badge: "ENTERPRISE PROD",
    badgeColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    title: "Federal Housing Corporation Healthcare ERP",
    tagline: "Custom Frappe Doctypes, Automated Prescriptions & PDF Reports",
    codeSnippet: `// Federal Housing Corporation — Frappe ERP Hook
frappe.ui.form.on('FHC Clinic Visit', {
  refresh: function(frm) {
    if (!frm.is_new() && frm.doc.status === 'Consultation Done') {
      frm.add_custom_button(__('Dispense Pharmacy'), () => {
        frappe.call({
          method: 'fhc.clinic.doctype.dispense_medication',
          args: { visit_id: frm.doc.name }
        });
      });
    }
  }
});`,
    footerNote: "Frappe Framework v15 • MariaDB 10.6 • Linux Ubuntu 22.04 LTS",
  },
  {
    id: "devops",
    label: "Linux DevOps",
    badge: "SYS HARDENED",
    badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    title: "High-Concurrency Reverse Proxy & Database Cluster",
    tagline: "Ubuntu 22.04 LTS • TLS 1.3 • Connection Pooling",
    codeSnippet: `# Nginx High-Concurrency Upstream Load Balancer
upstream fhc_erp_backend {
    server 127.0.0.1:8000 fail_timeout=0;
    keepalive 32;
}
server {
    listen 443 ssl http2;
    server_name fhcerp.efhc.gov.et;
    ssl_certificate /etc/letsencrypt/live/efhc.gov.et/fullchain.pem;
    location / {
        proxy_pass http://fhc_erp_backend;
        proxy_set_header X-Forwarded-Proto https;
    }
}`,
    footerNote: "Hardened Firewalls • Automated SSL • MariaDB Query Tuning",
  },
];

const marqueeTech = [
  { name: "ERPNext & Frappe v15", icon: frappe },
  { name: "Python Backend", icon: pythonIcon },
  { name: "C# / .NET Core", icon: netIcon },
  { name: "Angular Enterprise", icon: Angular },
  { name: "React & Next.js", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MariaDB & MySQL", icon: mariadb },
  { name: "Microsoft SQL Server", icon: sqlServer },
  { name: "Linux Ubuntu Admin", icon: linux },
  { name: "Docker & Compose", icon: docker },
  { name: "Nginx Reverse Proxy", icon: nginx },
  { name: "Node.js & Express", icon: nodejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git & CI/CD", icon: git },
];

const Hero = () => {
  const [activeTabId, setActiveTabId] = useState("paytaxi");
  const [viewMode, setViewMode] = useState("sandbox"); // "sandbox" | "code"
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // PayTaxi Soundbox State
  const [soundboxStatus, setSoundboxStatus] = useState("IDLE"); // "IDLE" | "PLAYING" | "CONFIRMED"
  const [soundboxTxId, setSoundboxTxId] = useState("TX-1001");
  const [soundboxHash, setSoundboxHash] = useState("a89c42ef");

  // ERPNext Workflow State
  const [erpStep, setErpStep] = useState(2); // 1: Register, 2: Doctor Consult, 3: Pharmacy Dispense, 4: DB Commit
  const [isSimulatingErp, setIsSimulatingErp] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeTab =
    consoleTabs.find((t) => t.id === activeTabId) || consoleTabs[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTab.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Play Soundbox Demo (Audio Chime + Speech Synthesis)
  const triggerSoundboxSimulation = () => {
    if (soundboxStatus === "PLAYING") return;
    setSoundboxStatus("PLAYING");

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
          utter.onend = () => {
            setSoundboxStatus("CONFIRMED");
            setSoundboxHash(Math.random().toString(16).substring(2, 10));
          };
          utter.onerror = () => {
            setSoundboxStatus("CONFIRMED");
          };
          window.speechSynthesis.speak(utter);
        }, 300);
      } else {
        setTimeout(() => {
          setSoundboxStatus("CONFIRMED");
          setSoundboxHash(Math.random().toString(16).substring(2, 10));
        }, 1200);
      }
    } catch {
      setSoundboxStatus("CONFIRMED");
    }
  };

  // Run ERPNext Workflow Simulation
  const runErpWorkflow = () => {
    if (isSimulatingErp) return;
    setIsSimulatingErp(true);
    setErpStep(1);

    setTimeout(() => setErpStep(2), 700);
    setTimeout(() => setErpStep(3), 1500);
    setTimeout(() => {
      setErpStep(4);
      setIsSimulatingErp(false);
    }, 2300);
  };

  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center items-center overflow-hidden pt-28 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-12 bg-slate-50 dark:bg-[#070a11] transition-colors duration-300">
      
      {/* ── Monumental Watermark: HARRY ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden w-full text-center"
        aria-hidden="true"
      >
        <span className="block font-black text-[20vw] leading-none tracking-tighter text-slate-900/[0.035] dark:text-white/[0.035] font-mono whitespace-nowrap">
          HARRY
        </span>
      </div>

      {/* Dynamic Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric-blue/10 dark:bg-electric-blue/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cybernetic Grid Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_75%,transparent_100%)] pointer-events-none" />

      {/* ── Live Addis Ababa Telemetry HUD Strip ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-mono shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Addis Ababa, Ethiopia (UTC+3)
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-bold ml-1">
            {time || "11:30 AM"}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <span>
            <strong className="text-slate-900 dark:text-white">Active Post:</strong> Senior Software Engineer @ Federal Housing Corp
          </span>
          <span className="text-slate-400">•</span>
          <span>
            <strong className="text-emerald-600 dark:text-emerald-400">Latency:</strong> 24ms
          </span>
          <span className="text-slate-400">•</span>
          <span>
            <strong className="text-electric-blue">Uptime:</strong> 99.98%
          </span>
        </div>
      </div>

      {/* Main Container - Split Grid on Desktop, Stack on Mobile/Tablet */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Value Pitch & Identity (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Availability Status Pill with Real Avatar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 backdrop-blur-md mb-6 transition-colors shadow-sm max-w-full"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-emerald-500 shrink-0 shadow-sm">
              <img
                src={hiryakosAvatar}
                alt="Hiryakos Meles"
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-[12px] font-mono tracking-wide text-emerald-600 dark:text-emerald-400 font-bold uppercase truncate">
              Available for Enterprise Contracts &amp; Consulting
            </span>
          </motion.div>

          {/* Hero Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[34px] sm:text-5xl lg:text-[58px] xl:text-[64px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5 break-words w-full"
          >
            Architecting <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-electric-blue via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise ERPs,
            </span>{" "}
            Scalable APIs &amp; Mission-Critical Systems.
          </motion.h1>

          {/* Subtitle / Bio Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-[15px] sm:text-[17px] max-w-2xl leading-relaxed mb-7 font-normal"
          >
            I'm <strong className="text-slate-900 dark:text-white font-bold">Hiryakos (Harry) Meles</strong> — a Senior Software Engineer at <span className="text-slate-900 dark:text-white font-semibold">Federal Housing Corporation (FHC)</span> &amp; Top-Rated talent. Specializing in <span className="text-slate-900 dark:text-white font-semibold">Frappe / ERPNext enterprise architecture</span>, <span className="text-slate-900 dark:text-white font-semibold">Angular &amp; React full-stack ecosystems</span>, and <span className="text-slate-900 dark:text-white font-semibold">high-throughput Linux backend deployments</span>.
          </motion.p>

          {/* Streamlined Call to Actions (Interactive Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
          >
            {/* Primary High-Contrast Explore Work Button */}
            <a
              href="#projects"
              className="bg-electric-blue hover:bg-blue-600 text-white font-extrabold py-3.5 px-7 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.6)] transition-all duration-300 flex items-center gap-2 text-[14.5px] active:scale-95"
            >
              <span>Explore Enterprise Work</span>
              <span>↓</span>
            </a>

            {/* Upwork Direct Button */}
            <a
              href="https://www.upwork.com/freelancers/~01d887f4b877df25ac"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.45)] transition-all duration-300 flex items-center gap-2 text-[14.5px] active:scale-95"
            >
              <span>Hire on Upwork</span>
              <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/20 text-black">100% JSS</span>
              <span>↗</span>
            </a>

            {/* Download Resume Button */}
            <a
              href={resume}
              download="Hiryakos_Meles_Resume.pdf"
              className="bg-white/80 hover:bg-white text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-bold py-3.5 px-5 rounded-xl border border-slate-300 dark:border-white/15 transition-all text-[14px] flex items-center gap-2 active:scale-95 shadow-sm"
            >
              <span>📄 CV (PDF)</span>
            </a>
          </motion.div>

          {/* Integrated Social Channels Row (GitHub, LinkedIn, Telegram) */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 w-full text-xs font-mono text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com/Heryakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5"
            >
              <img src={git} alt="GitHub" className="w-3.5 h-3.5 object-contain" />
              <span>@Heryakos</span>
            </a>

            <a
              href="https://linkedin.com/in/heryakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://t.me/Hiryakos_Meles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5"
            >
              <span>✈️</span>
              <span>Telegram</span>
            </a>
          </div>

          {/* Real Credibility Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center lg:text-left w-full"
          >
            <div className="bg-white dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">3+ Years</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-medium tracking-wide uppercase mt-1">
                Enterprise Experience
              </div>
            </div>
            <div className="bg-white dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">FHC ERP</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-medium tracking-wide uppercase mt-1">
                Federal Housing Corp
              </div>
            </div>
            <div className="bg-white dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black font-mono text-electric-blue">BSc + MPM</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-medium tracking-wide uppercase mt-1">
                Computer Sci &amp; PM
              </div>
            </div>
            <div className="bg-white dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black font-mono text-purple-600 dark:text-purple-400">Full-Stack</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-medium tracking-wide uppercase mt-1">
                Angular, React, .NET
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Live Interactive Developer Sandbox (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 w-full flex flex-col"
        >
          {/* Glass Console Container */}
          <div className="w-full bg-[#0a0f1d] dark:bg-[#0d111c]/95 rounded-2xl border border-slate-800 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden flex flex-col">
            
            {/* Top Mac-Style Titlebar */}
            <div className="px-4 py-3 bg-black/50 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_6px_#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_6px_#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-[0_0_6px_#27c93f]" />
                <span className="ml-2 text-[12px] font-mono text-slate-400 font-medium hidden sm:inline">
                  hiryakos@production:~$
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Switch between Live Sandbox and Source Code */}
                <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10 text-[11px] font-mono">
                  <button
                    onClick={() => setViewMode("sandbox")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      viewMode === "sandbox"
                        ? "bg-electric-blue text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Interactive
                  </button>
                  <button
                    onClick={() => setViewMode("code")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      viewMode === "code"
                        ? "bg-electric-blue text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Code
                  </button>
                </div>

                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${activeTab.badgeColor}`}>
                  {activeTab.badge}
                </span>
              </div>
            </div>

            {/* Interactive Console Tabs */}
            <div className="flex border-b border-white/10 bg-black/30 overflow-x-auto no-scrollbar">
              {consoleTabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-4 py-2.5 text-[12px] sm:text-[13px] font-mono font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 ${
                      isActive
                        ? "text-white border-electric-blue bg-white/[0.08]"
                        : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab.id}-${viewMode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 flex flex-col gap-4 text-left"
              >
                {/* Header Information */}
                <div>
                  <h3 className="text-white text-[14px] sm:text-[15px] font-bold tracking-tight">
                    {activeTab.title}
                  </h3>
                  <p className="text-slate-400 text-[12px] mt-0.5 font-sans">
                    {activeTab.tagline}
                  </p>
                </div>

                {/* ── MODE 1: INTERACTIVE LIVE SANDBOX ── */}
                {viewMode === "sandbox" && (
                  <div className="space-y-4">
                    
                    {/* PayTaxi FinTech Simulator */}
                    {activeTab.id === "paytaxi" && (
                      <div className="bg-black/50 rounded-xl p-3.5 border border-white/10 space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">Minibus Terminal:</span>
                          <span className="text-emerald-400 font-bold">{soundboxTxId} &bull; Bole &rarr; Mexico</span>
                        </div>

                        {/* Interactive Soundbox Chime Trigger */}
                        <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[11px] text-sky-300 font-bold">Driver Mobility Soundbox</div>
                            <div className="text-[10px] text-slate-400">Web Audio API &bull; 587Hz &rarr; 880Hz Chime</div>
                          </div>
                          
                          <button
                            onClick={triggerSoundboxSimulation}
                            disabled={soundboxStatus === "PLAYING"}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
                              soundboxStatus === "PLAYING"
                                ? "bg-amber-500 text-black animate-pulse"
                                : "bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold"
                            }`}
                          >
                            <span>{soundboxStatus === "PLAYING" ? "🔊 Emitting Chime..." : "▶ Test 50 ETB Fare"}</span>
                          </button>
                        </div>

                        {/* Live Anti-Fraud Dynamic Receipt Card */}
                        <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300">Weyala Anti-Fraud Receipt:</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                              {soundboxStatus === "CONFIRMED" ? "PAID &bull; VERIFIED" : "WAITING FOR FARE"}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">License Plate:</span>
                            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">AA 3-B12345</span>
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">Rolling Crypto Hash:</span>
                            <span className="text-purple-400 font-mono text-[11px]">sha256:{soundboxHash}...</span>
                          </div>

                          <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                            <span className="text-slate-500 text-[10px]">Broadcast Latency:</span>
                            <span className="text-emerald-400 text-[10px]">38ms (Server-Sent Events)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FHC ERPNext Healthcare Pipeline */}
                    {activeTab.id === "architecture" && (
                      <div className="bg-black/50 rounded-xl p-3.5 border border-white/10 space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">Doctype: FHC Clinic Visit</span>
                          <span className="text-emerald-400 font-bold">Frappe v15 Hook</span>
                        </div>

                        {/* Workflow Stepper */}
                        <div className="grid grid-cols-4 gap-1.5 text-center">
                          {[
                            { step: 1, label: "Patient Reg" },
                            { step: 2, label: "Consultation" },
                            { step: 3, label: "Rx Dispense" },
                            { step: 4, label: "DB Commit" },
                          ].map((s) => (
                            <div
                              key={s.step}
                              className={`p-2 rounded-lg border text-[10.5px] transition-all ${
                                erpStep >= s.step
                                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold"
                                  : "bg-white/[0.02] border-white/10 text-slate-500"
                              }`}
                            >
                              <div className="text-[9px] text-slate-400">0{s.step}</div>
                              <div className="truncate">{s.label}</div>
                              <div className="text-[9px] mt-0.5">
                                {erpStep >= s.step ? "✓ Done" : "Pending"}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[11px] text-slate-300 font-bold">State Machine Pipeline</div>
                            <div className="text-[10px] text-slate-400">Step {erpStep} of 4: {erpStep === 4 ? "MariaDB Synced (18ms)" : "Executing Frappe Hook"}</div>
                          </div>

                          <button
                            onClick={runErpWorkflow}
                            disabled={isSimulatingErp}
                            className="px-3 py-1.5 rounded-lg bg-electric-blue hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md active:scale-95 shrink-0"
                          >
                            <span>{isSimulatingErp ? "Executing..." : "▶ Simulate Flow"}</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Linux DevOps Server Health */}
                    {activeTab.id === "devops" && (
                      <div className="bg-black/50 rounded-xl p-3.5 border border-white/10 space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">Nginx Reverse Proxy:</span>
                          <span className="text-emerald-400 font-bold">ACTIVE &bull; TLS 1.3 / HTTP2</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                            <span className="text-slate-400 text-[10px] block">MariaDB Queries:</span>
                            <span className="text-white font-bold text-sm">240,000 / day</span>
                            <span className="text-emerald-400 text-[10px] block mt-0.5">Cache Hit: 96.4%</span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                            <span className="text-slate-400 text-[10px] block">Active Connections:</span>
                            <span className="text-white font-bold text-sm">1,420 Active</span>
                            <span className="text-emerald-400 text-[10px] block mt-0.5">Zero Packet Loss</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20 text-[11px] text-slate-300 flex items-center justify-between">
                          <span>Gunicorn Cluster (Frappe Backend):</span>
                          <span className="text-emerald-400 font-bold">8 Workers Healthy</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── MODE 2: SOURCE CODE VIEW ── */}
                {viewMode === "code" && (
                  <div className="relative">
                    <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-slate-300 font-mono text-[11px] sm:text-[12px] leading-relaxed overflow-x-auto max-h-[220px]">
                      <code>{activeTab.codeSnippet}</code>
                    </pre>

                    <button
                      onClick={handleCopyCode}
                      className="absolute top-2 right-2 text-[10px] font-mono px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors"
                      title="Copy code snippet"
                    >
                      {copied ? "✓ Copied" : "📋 Copy"}
                    </button>
                  </div>
                )}

                {/* Footer Specification Note */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate">{activeTab.footerNote}</span>
                  <span className="text-emerald-400 text-xs shrink-0 ml-2">● 99.98% Prod</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Marquee Competency Ticker with Real Tech Logos */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-slate-200 dark:border-white/10 py-3.5 mt-16 backdrop-blur-md bg-white/60 dark:bg-black/40 group">
        <div 
          className="inline-flex items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '35s' }}
        >
          {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs shrink-0 hover:border-electric-blue/40 transition-colors"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain shrink-0"
                loading="lazy"
              />
              <span className="text-[12.5px] font-mono font-semibold tracking-wide text-slate-800 dark:text-slate-200 uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
