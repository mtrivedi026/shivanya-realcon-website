"use client";

import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#020617]/80 bg-blueprint">
      
      {/* DECORATIVE ELEMENTS - CONSTRUCTION THEME */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0f172a] blur-[150px] opacity-40 pointer-events-none"></div>
      
      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -right-20 top-20 text-[#00E5FF] opacity-[0.02] pointer-events-none"
      >
        <HardHat size={600} strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* IMAGE/VISUAL SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-lg mx-auto lg:mx-0">
            <img
              src="/images/about-site.jpg"
              alt="Construction Site"
              className="w-full h-auto object-cover rounded-[35px] border border-[#00E5FF]/30 shadow-[0_20px_80px_rgba(0,229,255,0.15)] hover:scale-105 transition-transform duration-700 relative z-10"
            />
            
            {/* Floating stat card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 md:-left-10 z-20 bg-[#0f172a]/90 backdrop-blur-md border border-[#00E5FF]/40 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <p className="text-4xl font-serif text-[#00E5FF] mb-1 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">9+</p>
              <p className="text-xs tracking-widest text-gray-300 uppercase font-medium">Years of Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">The Company</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-white leading-tight">
            Building the <span className="text-blue-gradient italic font-light drop-shadow-md">Future</span><br/>With Precision
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            SHIVAANYA REALCON PVT. LTD. delivers premium residential, commercial and infrastructure projects with unwavering precision, innovation, and trust.
          </p>
          
          <p className="text-gray-400 text-base leading-relaxed mb-10 font-light">
            Our approach blends world-class engineering with modern architectural principles, ensuring flawless project execution from foundation to finish.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Quality Construction", desc: "Premium standards" },
              { title: "Expert Engineering", desc: "Advanced solutions" },
              { title: "On-Time Delivery", desc: "Full commitment" },
              { title: "Trusted Partner", desc: "Transparent processes" }
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF] group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(0,229,255,1)] transition-all"></div>
                  <h4 className="text-white font-medium text-lg tracking-wide">{feature.title}</h4>
                </div>
                <p className="text-gray-500 text-sm ml-5">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
