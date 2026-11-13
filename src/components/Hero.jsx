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
    id: "architecture",
    label: "Enterprise Arch",
    badge: "LIVE PROD",
    badgeColor: "bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 border-emerald-500/30",
    title: "Federal Housing Corp & Enterprise Systems",
    metrics: [
      { label: "Production Uptime", value: "99.98%", status: "optimal" },
      { label: "Active Enterprise Users", value: "5,000+", status: "active" },
      { label: "Daily DB Queries", value: "240k+", status: "optimal" },
      { label: "API Response Time", value: "< 42ms", status: "optimal" },
    ],
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
    id: "paytaxi",
    label: "PayTaxi FinTech",
    badge: "SSE SOUNDBOX",
    badgeColor: "bg-sky-500/20 text-sky-500 dark:text-sky-400 border-sky-500/30",
    title: "Minibus Contactless Mobility & Soundbox",
    metrics: [
      { label: "Passenger Checkout", value: "Zero-Install", status: "active" },
      { label: "Soundbox Latency", value: "< 250ms", status: "optimal" },
      { label: "Auth Methods", value: "AddisPay + QR", status: "active" },
      { label: "Fleet Capacity", value: "12-15 Seats", status: "optimal" },
    ],
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
    id: "devops",
    label: "Linux DevOps",
    badge: "SYS HARDENED",
    badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    title: "Production Infrastructure & Database Engine",
    metrics: [
      { label: "OS Environment", value: "Ubuntu 22.04 LTS", status: "optimal" },
      { label: "Reverse Proxy", value: "Nginx TLS 1.3", status: "optimal" },
      { label: "Database Cluster", value: "MariaDB + PgSQL", status: "optimal" },
      { label: "CI/CD Pipeline", value: "GitHub Actions", status: "optimal" },
    ],
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
  const [activeTabId, setActiveTabId] = useState("architecture");
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Addis Ababa time (UTC+3)
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
            className="text-[32px] sm:text-5xl lg:text-6xl xl:text-[64px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-5 break-words w-full"
          >
            Architecting <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-electric-blue via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Enterprise ERPs,
            </span>{" "}
            Scalable APIs &amp; Mission-Critical Systems.
          </motion.h1>

          {/* Subtitle / Bio Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-[15px] sm:text-[18px] max-w-2xl leading-relaxed mb-8 font-normal"
          >
            I'm <strong className="text-slate-900 dark:text-white font-bold">Hiryakos (Harry) Meles</strong> — a Senior Software Engineer at <span className="text-slate-900 dark:text-white font-semibold">Federal Housing Corporation (FHC)</span> &amp; Top-Rated talent. Specializing in <span className="text-slate-900 dark:text-white font-semibold">ERPNext / Frappe enterprise architecture</span>, <span className="text-slate-900 dark:text-white font-semibold">Angular &amp; React full-stack ecosystems</span>, and <span className="text-slate-900 dark:text-white font-semibold">high-throughput Linux backend deployments</span>.
          </motion.p>

          {/* Call to Actions (Interactive Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
          >
            {/* Upwork Direct Button */}
            <a
              href="https://www.upwork.com/freelancers/~01d887f4b877df25ac"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3 px-6 sm:py-3.5 sm:px-7 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-2 text-[14px] sm:text-[15px] active:scale-95"
            >
              <span>Hire on Upwork</span>
              <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-black/20 text-black">100% JSS</span>
              <span>↗</span>
            </a>

            {/* Explore Projects */}
            <a
              href="#projects"
              className="bg-electric-blue hover:bg-blue-600 text-white font-bold py-3 px-6 sm:py-3.5 sm:px-7 rounded-xl shadow-glow transition-all duration-300 flex items-center gap-2 text-[14px] sm:text-[15px] active:scale-95"
            >
              <span>Explore Projects</span>
              <span>↓</span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://linkedin.com/in/heryakos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white font-bold py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl border border-slate-300 dark:border-white/15 transition-all duration-300 text-[14px] sm:text-[15px] flex items-center gap-2 active:scale-95 shadow-sm"
            >
              <span>LinkedIn Profile ↗</span>
            </a>

            {/* Download Resume */}
            <a
              href={resume}
              download="Hiryakos_Meles_Resume.pdf"
              className="bg-transparent hover:bg-slate-200/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold py-3 px-4 sm:py-3.5 sm:px-5 rounded-xl border border-slate-300 dark:border-white/10 transition-all text-[14px] sm:text-[15px] flex items-center gap-2 active:scale-95"
            >
              <span>📄 Resume</span>
            </a>
          </motion.div>

          {/* Real Credibility Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center lg:text-left w-full"
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

        {/* Right Column: Interactive Live Architecture Console (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 w-full flex flex-col"
        >
          {/* Glass Console Container - Adapted to both Dark and Light Themes */}
          <div className="w-full bg-[#0a0f1d] dark:bg-[#0d111c]/95 rounded-2xl border border-slate-800 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden flex flex-col">
            
            {/* Top Mac-Style Titlebar */}
            <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_6px_#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_6px_#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-[0_0_6px_#27c93f]" />
                <span className="ml-2 text-[12px] font-mono text-slate-400 font-medium hidden sm:inline">
                  hiryakos@fhc-master:~/production$
                </span>
              </div>
              <div className="flex items-center gap-2">
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

            {/* Active Tab Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-4 sm:p-5 flex flex-col gap-4 text-left"
              >
                {/* Tab Title & Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-[14px] sm:text-[15px] font-bold tracking-tight">
                    {activeTab.title}
                  </h3>
                  <button
                    onClick={handleCopyCode}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors flex items-center gap-1"
                    title="Copy code snippet"
                  >
                    <span>{copied ? "✓ Copied" : "📋 Copy"}</span>
                  </button>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {activeTab.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex flex-col"
                    >
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="text-[14px] font-mono font-bold text-white mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Syntax Code Preview */}
                <div className="relative rounded-lg bg-[#050811] border border-white/10 p-3 overflow-x-auto text-[11px] sm:text-[12px] font-mono leading-relaxed text-slate-300">
                  <pre className="whitespace-pre font-mono">
                    <code>{activeTab.codeSnippet}</code>
                  </pre>
                </div>

                {/* Terminal Footer Info */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate">{activeTab.footerNote}</span>
                  <span className="text-emerald-400 font-bold shrink-0 ml-2">● Active</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Sub-Console Feature Badges */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="p-2 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">DB Architecture</span>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white">MariaDB &amp; SQL</span>
            </div>
            <div className="p-2 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Framework</span>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white">Frappe / ERPNext</span>
            </div>
            <div className="p-2 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">DevOps</span>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white">Linux &amp; Nginx</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Competency Ticker with Real Brand Logos */}
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
