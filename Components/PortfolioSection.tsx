"use client";

import { motion } from "framer-motion";
import { Download, Eye, Compass } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 overflow-hidden bg-blueprint">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00E5FF]/5 to-transparent blur-[100px] pointer-events-none"></div>

      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ rotate: [45, 405] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute left-10 top-1/2 -translate-y-1/2 text-[#00E5FF] opacity-[0.02] pointer-events-none"
      >
        <Compass size={600} strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">Company Profile</span>
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Corporate <span className="text-blue-gradient italic font-light drop-shadow-md">Portfolio</span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Explore our comprehensive company profile detailing our history, capabilities, achievements, and structural expertise.
          </p>
        </div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f172a]/80 border border-[#1e293b] p-8 md:p-12 lg:p-16 relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle blue line accent */}
          <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* IMAGE */}
            <div className="relative group overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/portfolio-cover.png"
                  alt="Portfolio Cover"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 border border-[#00E5FF]/20 m-4 pointer-events-none group-hover:border-[#00E5FF]/40 transition-colors duration-500"></div>
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Shivaanya Realcon
              </h3>

              <p className="text-gray-300 leading-relaxed font-light mb-10">
                View our complete corporate profile including completed milestones, manpower strength, advanced construction equipment fleet, prestigious clients, and architectural achievements.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mb-12 border-y border-[#1e293b] py-8">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "300+", label: "Workforce" },
                  { value: "10+", label: "Clients" }
                ].map((stat, i) => (
                  <div key={i} className="text-center border-r border-[#1e293b] last:border-0">
                    <p className="text-3xl font-serif text-[#00E5FF] mb-2 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]">{stat.value}</p>
                    <p className="text-xs tracking-wider text-gray-500 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/files/company-portfolio.pdf"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#00E5FF] text-[#020617] px-8 py-4 font-medium hover:bg-[#80f2ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
                >
                  <Eye size={18} />
                  <span>View Portfolio</span>
                </a>
                <a
                  href="/files/company-portfolio.pdf"
                  download
                  className="flex items-center gap-2 border border-[#00E5FF] text-[#00E5FF] px-8 py-4 font-medium hover:bg-[#00E5FF]/10 transition-colors"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
