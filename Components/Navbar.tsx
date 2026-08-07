"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Portfolio", "#portfolio"],
    ["Manpower", "#manpower"],
    ["Equipments", "#equipments"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#071A35]/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(7,26,53,0.7)] border-b border-[#1A3560]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto flex items-center justify-between px-6 lg:px-10 py-3.5">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Shivaanya Realcon Logo"
            className="h-9 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-1 text-[13.5px] font-sans font-medium tracking-wide">
          {navLinks.map(([name, link]) => (
            <li key={name}>
              <a
                href={link}
                className="relative px-3 py-2 text-[#CBD5E1] hover:text-white transition-colors duration-200 group rounded-md hover:bg-white/5"
              >
                {name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3B82F6] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-primary text-xs px-5 py-2.5"
          >
            Get a Quote
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#071A35] border-t border-[#1A3560]/60 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map(([name, link], i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={link}
                    onClick={closeMenu}
                    className="block py-3 px-3 text-[#CBD5E1] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium border-b border-[#1A3560]/40 last:border-0"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-3"
              >
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Get a Quote
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
