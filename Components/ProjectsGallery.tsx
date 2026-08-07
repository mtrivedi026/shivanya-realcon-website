"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGallery() {
  const projectImages = Array.from({ length: 23 }, (_, i) => i + 15);

  const categories = [
    "Residential", "Commercial", "Industrial", "Infrastructure",
    "Residential", "Commercial", "Industrial", "Infrastructure",
    "Residential", "Commercial", "Industrial", "Infrastructure",
    "Residential", "Commercial", "Industrial", "Infrastructure",
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F8FAFC]"
    >

      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />

      {/* Background watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-serif font-black text-[#E2E8F0] whitespace-nowrap leading-none"
          aria-hidden
        >
          PROJECTS
        </span>
      </div>

      {/* HEADING */}
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#0A3D91]" />
            <p className="uppercase tracking-[0.22em] text-[#0A3D91] text-xs font-semibold font-sans">
              Our Work
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E293B]">
              Featured{" "}
              <span className="text-[#0A3D91] italic">Projects</span>
            </h2>
            <p className="text-[#475569] max-w-sm text-[14px] leading-relaxed font-sans md:text-right">
              A curated selection of our finest construction and infrastructure
              developments showcasing commitment to excellence.
            </p>
          </div>

          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mt-6" />
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projectImages.map((num, idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0A3D91]/10 hover:border-[#0A3D91]/25 transition-all duration-350 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[220px]">
                <img
                  src={`/images/project_page_${num}.jpg`}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.08]"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91]/70 via-[#0A3D91]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white text-sm font-semibold font-sans">View Project</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 py-4 border-t border-[#E2E8F0]">
                <span className="text-[#3B82F6] uppercase text-[10px] tracking-[0.18em] font-semibold font-sans block mb-1">
                  {categories[idx % 4]}
                </span>
                <h3 className="text-[#1E293B] font-semibold text-sm font-sans group-hover:text-[#0A3D91] transition-colors duration-200">
                  Project {idx + 1}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}