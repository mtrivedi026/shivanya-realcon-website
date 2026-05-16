"use client";

import { motion } from "framer-motion";
import { Building2, Home, Package, PenTool, Trees, Wrench, Ruler } from "lucide-react";

const services = [
  { name: "Residential Construction", icon: Home },
  { name: "Commercial Projects", icon: Building2 },
  { name: "Warehousing", icon: Package },
  { name: "Interior Designing", icon: PenTool },
  { name: "Architecture", icon: Trees },
  { name: "Infrastructure Development", icon: Wrench },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 bg-blueprint">
      
      {/* BACKGROUND ACCENTS - CONSTRUCTION */}
      <div className="absolute inset-0 bg-[url('/images/services-bg.png')] bg-cover bg-center opacity-5 mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#020617] to-transparent"></div>
      
      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ x: [0, 30, 0], rotate: [-12, -8, -12] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -left-20 bottom-0 text-[#00E5FF] opacity-[0.02] pointer-events-none"
      >
        <Ruler size={500} strokeWidth={1} />
      </motion.div>

      {/* Animated Blueprint Scan Line */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent pointer-events-none z-0"
      ></motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">What We Do</span>
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white"
          >
            Our <span className="text-blue-gradient italic font-light drop-shadow-md">Services</span>
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#020617] border border-[#1e293b] p-10 overflow-hidden transition-colors hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/0 to-[#1e293b]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Construction grid pattern on card hover */}
                <div className="absolute inset-0 bg-blueprint opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0f172a] text-[#00E5FF] border border-[#1e293b] group-hover:bg-[#00E5FF] group-hover:text-[#020617] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300 relative z-10">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#00E5FF] transition-colors relative z-10">
                  {service.name}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-6 relative z-10">
                  High-quality premium construction services tailored to meet modern structural and aesthetic demands.
                </p>

                {/* Subtle read more link indicator */}
                <div className="w-8 h-[1px] bg-gray-600 group-hover:w-16 group-hover:bg-[#00E5FF] group-hover:shadow-[0_0_8px_rgba(0,229,255,1)] transition-all duration-500 relative z-10"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
