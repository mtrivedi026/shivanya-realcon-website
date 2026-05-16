"use client";

import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

export default function ManPowerSection() {
  const workforce = [
    { role:"Civil Engineers", qty:"12+" },
    { role:"Site Supervisors", qty:"20+" },
    { role:"Skilled Labour", qty:"150+" },
    { role:"Unskilled Labour", qty:"200+" },
    { role:"Electricians", qty:"25+" },
    { role:"Bar Benders", qty:"40+" },
    { role:"Masons", qty:"80+" },
    { role:"Carpenters", qty:"60+" }
  ];

  return (
    <section id="manpower" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 overflow-hidden bg-blueprint">
      
      {/* GEOMETRIC ACCENTS - Animated */}
      <motion.div 
        animate={{ height: ["0%", "50%", "0%"], top: ["25%", "25%", "75%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#00E5FF]/50 to-transparent shadow-[0_0_10px_rgba(0,229,255,0.8)]"
      ></motion.div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute right-10 top-20 w-40 h-40 border border-[#1e293b] pointer-events-none"
      ></motion.div>

      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [-12, -15, -12] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute right-20 bottom-0 text-[#00E5FF] opacity-[0.02] pointer-events-none"
      >
        <HardHat size={500} strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
              <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              Workforce <span className="text-blue-gradient italic font-light drop-shadow-md">Strength</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-sm"
          >
            <p className="text-gray-400 font-light">
              A highly skilled and dedicated workforce powering every successful project with expertise and precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {workforce.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group border-l border-[#1e293b] pl-6 hover:border-[#00E5FF] transition-colors duration-300 bg-[#020617]/50 backdrop-blur-sm p-4 -ml-4"
            >
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2 group-hover:text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all">
                {item.qty}
              </h3>
              <p className="text-gray-400 font-light tracking-wide uppercase text-xs">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
