import React from "react";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 py-8 border-t border-[#915eff]/20 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-white font-bold text-[18px]">Hiryakos Meles</h4>
          <p className="text-secondary text-[14px]">Full Stack & ERP Developer © {new Date().getFullYear()}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:heryakosmeles@gmail.com"
            className="text-secondary hover:text-[#915eff] transition-colors duration-300 text-[15px]"
          >
            heryakosmeles@gmail.com
          </a>
          <a
            href="https://t.me/Hiryakos_Meles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-[#915eff] transition-colors duration-300 text-[15px]"
          >
            Telegram
          </a>
          <a
            href="https://github.com/Heryakos/Hiryakos_PortFolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-[#915eff] transition-colors duration-300 text-[15px]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
