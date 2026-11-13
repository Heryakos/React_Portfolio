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
  Blog,
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

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
