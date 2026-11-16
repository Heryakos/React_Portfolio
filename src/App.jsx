import { BrowserRouter } from "react-router-dom";
import {
  BentoGrid,
  UpworkSpotlight,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Services,
  WhyChooseMe,
  GithubStats,
  Preloader,
} from "./components";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block transition-all duration-150 ${
        isPointer
          ? "w-10 h-10 border-2 border-electric-blue bg-electric-blue/15 shadow-[0_0_20px_#2563eb]"
          : "w-5 h-5 border border-electric-blue/80 bg-electric-blue/20 shadow-glow"
      }`}
      animate={{
        x: isPointer ? mousePosition.x - 20 : mousePosition.x - 10,
        y: isPointer ? mousePosition.y - 20 : mousePosition.y - 10,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
    />
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis Silky Smooth Scroll
  useEffect(() => {
    let lenis;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });
      window.__lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* ── Cinematic Boot Preloader (0% to 100%) ── */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <div className="relative z-0 bg-slate-50 dark:bg-primary text-slate-900 dark:text-white overflow-x-hidden cursor-none min-h-screen transition-colors duration-300">
        <CustomCursor />
        
        {/* Navigation & Modern Hero */}
        <div className="dark:bg-[#070a11] bg-slate-50 bg-cover bg-no-repeat bg-center transition-colors duration-300">
          <Navbar />
          <Hero />
        </div>

        {/* Upwork Verified Talent Spotlight (Inspired by Yeab) */}
        <UpworkSpotlight />

        {/* Modern Bento Grid: The Triple Threat (Code + Server DevOps + Project Management) */}
        <BentoGrid />

        {/* Featured Projects with PayTaxi & Enterprise Case Studies */}
        <Works />

        {/* Career Experience & Credentials */}
        <Experience />

        {/* Enterprise Services & Capabilities */}
        <Services />

        {/* Modern Categorized Tech Stack */}
        <Tech />

        {/* GitHub Stats & Code Verification */}
        <GithubStats />

        {/* Why Choose Me & Value Proposition */}
        <WhyChooseMe />

        {/* Contact & Ambient Canvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Floating Mobile Action Dock (Only on phones) */}
        <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-slate-900/95 dark:bg-black/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2 pointer-events-auto">
          <a
            href="https://www.upwork.com/freelancers/~01d887f4b877df25ac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-500 text-black font-extrabold text-[12px] text-center shadow-sm flex items-center justify-center gap-1 active:scale-95"
          >
            <span>Hire Me</span>
            <span className="text-[10px] font-mono px-1 rounded bg-black/20">100%</span>
            <span>↗</span>
          </a>

          <a
            href="#projects"
            className="flex-1 py-2 px-2.5 rounded-xl bg-electric-blue text-white font-bold text-[12px] text-center shadow-sm flex items-center justify-center gap-1 active:scale-95"
          >
            <span>Projects</span>
            <span>↓</span>
          </a>

          <a
            href="#contact"
            className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[12px] text-center border border-white/10 flex items-center justify-center active:scale-95"
            title="Jump to Contact"
          >
            <span>💬</span>
          </a>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
