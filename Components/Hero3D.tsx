"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-6xl mx-auto mt-20"
      >
        <div className="inline-block mb-6 px-6 py-2 border border-[#00E5FF]/40 bg-[#00E5FF]/5 backdrop-blur-md rounded-full text-[#80f2ff] text-sm tracking-widest font-sans uppercase shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          Premium Construction Company
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black leading-tight tracking-wider mb-6 font-serif"
        >
          <span className="text-blue-gradient drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            SHIVAANYA
          </span>
          <br />
          <span className="text-white drop-shadow-lg">REALCON</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto mb-10 bg-[#020617]/40 backdrop-blur-sm p-4 rounded-2xl"
        >
          Luxury Construction & Infrastructure Solutions with Modern Engineering Excellence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-[#00E5FF] text-[#020617] font-semibold text-lg overflow-hidden flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] rounded-full"
          >
            <span className="relative z-10">Get a Quote</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 h-full w-0 bg-[#80f2ff] transition-all duration-300 ease-out group-hover:w-full z-0"></div>
          </a>

          <a
            href="#projects"
            className="px-8 py-4 border border-[#00E5FF]/50 text-[#00E5FF] bg-[#020617]/50 font-semibold text-lg hover:bg-[#00E5FF]/20 transition-colors duration-300 backdrop-blur-sm rounded-full"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
