"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function ProjectsGallery() {
  const projectImages = Array.from({ length: 16 }, (_, i) => i + 15);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 overflow-hidden">
      
      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.01, 0.03, 0.01] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute right-0 top-1/4 text-[#00E5FF] pointer-events-none"
      >
        <Building2 size={700} strokeWidth={1} />
      </motion.div>
      
      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
              <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              Featured <span className="text-blue-gradient italic font-light drop-shadow-md">Projects</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-sm"
          >
            <p className="text-gray-400 font-light">
              A curated selection of our finest construction and infrastructure developments, showcasing our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectImages.map((num, idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden bg-[#0f172a] border border-[#1e293b] hover:border-[#00E5FF]/40 transition-colors duration-500"
            >
              <img
                src={`/images/project_page_${num}.jpg`}
                alt={`Project ${num}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Elegant overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-[#00E5FF] text-xs tracking-widest uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Commercial</p>
                <h3 className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Project Structure {idx + 1}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
