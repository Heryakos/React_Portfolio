import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-2 sm:py-4 fixed top-2 sm:top-5 z-50 pointer-events-none px-3 sm:px-6">
      <div className="w-full flex justify-between items-center max-w-5xl mx-auto bg-white/90 dark:bg-[#070b14]/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-full px-3.5 sm:px-7 py-2 sm:py-2.5 pointer-events-auto shadow-lg dark:shadow-2xl transition-colors duration-300">
        
        {/* Brand Name & Logo - Strictly Single Line */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 whitespace-nowrap group select-none"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Hiryakos Meles"
            className="w-8 h-8 object-contain shrink-0 group-hover:scale-105 transition-transform dark:brightness-0 dark:invert"
          />
          <span className="text-slate-900 dark:text-white text-[15px] sm:text-[17px] font-extrabold tracking-tight whitespace-nowrap flex items-center gap-1.5">
            <span>Hiryakos</span>
            <span className="text-electric-blue font-light">|</span>
            <span>Meles</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-md bg-electric-blue/10 text-electric-blue text-[11px] font-mono font-bold tracking-normal ml-0.5 border border-electric-blue/20">
              Harry
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Single Row, No Wrapping */}
        <ul className="list-none hidden md:flex flex-row items-center gap-4 lg:gap-7 shrink-0">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-electric-blue font-bold"
                  : "text-slate-600 dark:text-secondary font-medium"
              } hover:text-slate-900 dark:hover:text-white text-[13.5px] lg:text-[14.5px] cursor-pointer transition-colors whitespace-nowrap`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="py-1 px-1">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <div className="hidden md:flex items-center ml-2 lg:ml-4 shrink-0">
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setToggle(!toggle)}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center p-2 text-slate-800 dark:text-white"
            aria-label="Toggle Navigation Menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain dark:invert-0 invert"
            />
          </button>

          {/* Mobile Dropdown Panel */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 absolute top-16 right-4 min-w-[200px] z-50 rounded-2xl shadow-2xl flex-col gap-4`}
          >
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-electric-blue font-bold"
                      : "text-slate-700 dark:text-secondary font-medium"
                  } hover:text-slate-900 dark:hover:text-white text-[15px] cursor-pointer transition-colors py-1`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="block w-full">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
