import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  // Read the class set by index.html synchronously to prevent icon jumping
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Listen for system theme changes if the user hasn't explicitly set a preference
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const systemIsDark = e.matches;
        setIsDark(systemIsDark);
        if (systemIsDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-electric-blue/15 hover:border-electric-blue/50 transition-all overflow-hidden group shadow-sm"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 0 : -40,
          opacity: isDark ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center text-[18px]"
      >
        🌙
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 40 : 0,
          opacity: isDark ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center text-[18px]"
      >
        ☀️
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
