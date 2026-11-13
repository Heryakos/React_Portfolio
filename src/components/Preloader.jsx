import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "INITIALIZING HIRYAKOS_MELES.SYS [KERNEL v3.4]...",
  "CONNECTING FEDERAL HOUSING CORP ERP (FRAPPE v15)...",
  "CALIBRATING LINUX HIGH-CONCURRENCY SERVERS (NGINX/MARIADB)...",
  "ATTACHING PAYTAXI SOUNDBOX & SSE FINTECH ENGINE...",
  "SYSTEM STATUS: ONLINE ● 99.98% HEALTH",
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // If already shown in session, complete immediately
    if (sessionStorage.getItem("hiryakos_preloader_seen")) {
      setIsDone(true);
      onComplete();
      return;
    }

    // Fast numerical count from 0 to 100 in ~1.5s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("hiryakos_preloader_seen", "true");
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 250);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 10) + 6;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const idx = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    setLogIndex(idx);
  }, [progress]);

  const handleSkip = () => {
    sessionStorage.setItem("hiryakos_preloader_seen", "true");
    setIsDone(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#070b14] text-white flex flex-col justify-between p-6 sm:p-12 font-mono select-none overflow-hidden cursor-pointer"
          onClick={handleSkip}
        >
          {/* Subtle Cybernetic Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="tracking-widest font-bold uppercase text-slate-300">
                Hiryakos (Harry) Meles • Architecture Terminal
              </span>
            </div>
            <span className="hidden sm:inline text-slate-500">
              Addis Ababa (UTC+3) • Press anywhere to skip ↵
            </span>
          </div>

          {/* Center: Monumental Progress & Live Boot Log */}
          <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center text-center my-auto">
            {/* Giant Monospace Counter */}
            <div className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-mono">
              {progress}
              <span className="text-electric-blue text-4xl sm:text-6xl font-light ml-1">
                %
              </span>
            </div>

            {/* Glowing Progress Track */}
            <div className="w-full max-w-md h-1.5 bg-white/10 rounded-full overflow-hidden mt-6 mb-8 relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Active System Log Line */}
            <div className="h-8 flex items-center justify-center">
              <p className="text-xs sm:text-sm font-mono text-emerald-400 tracking-wider flex items-center gap-2">
                <span className="text-electric-blue">❯</span>
                <span>{bootLogs[logIndex]}</span>
                <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse" />
              </p>
            </div>
          </div>

          {/* Bottom Bar: Quick Credentials & Skip Hint */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-white/10 pt-4">
            <div className="flex items-center gap-3">
              <span className="text-slate-300 font-semibold">FHC Senior Software Engineer</span>
              <span>•</span>
              <span className="text-slate-400">BSc CS &amp; MPM Candidate</span>
            </div>
            <div className="text-slate-500 text-[11px]">
              Click anywhere to fast-forward [↵]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
