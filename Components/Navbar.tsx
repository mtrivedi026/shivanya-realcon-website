"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-[#00E5FF]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-4 cursor-pointer">
           <img
            src="/images/logo.png"
            alt="Shivaanya Realcon Logo"
          className="h-14 md:h-16 object-contain"
          />
         
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-[15px] font-sans font-medium tracking-wide">
          {navLinks.map(([name, link]) => (
            <li key={name} className="relative group">
              <a
                href={link}
                className="text-gray-300 hover:text-[#00E5FF] transition duration-300 ease-in-out"
              >
                {name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#00E5FF] hover:text-white transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#020617] border-b border-[#00E5FF]/20 px-6 py-8"
        >
          <ul className="flex flex-col gap-6 text-lg font-serif">
            {navLinks.map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-[#00E5FF] transition block"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
