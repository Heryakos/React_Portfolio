import React from "react";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black-100 py-8 border-t border-slate-200 dark:border-electric-blue/20 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold text-[18px]">Hiryakos (Harry) Meles</h4>
          <p className="text-slate-500 dark:text-slate-400 text-[14px]">Senior Software Engineer &amp; Enterprise Architect © {new Date().getFullYear()}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://www.upwork.com/freelancers/~01d887f4b877df25ac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-300 text-[14px]"
          >
            Upwork
          </a>
          <a
            href="https://linkedin.com/in/heryakos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-secondary hover:text-blue-600 dark:hover:text-electric-blue font-medium transition-colors duration-300 text-[14px]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Heryakos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-secondary hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300 text-[14px]"
          >
            GitHub
          </a>
          <a
            href="https://t.me/Hiryakos_Meles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-secondary hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors duration-300 text-[14px]"
          >
            Telegram
          </a>
          <a
            href="mailto:heryakosmeles@gmail.com"
            className="text-slate-600 dark:text-secondary hover:text-blue-600 dark:hover:text-electric-blue font-medium transition-colors duration-300 text-[14px]"
          >
            heryakosmeles@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
