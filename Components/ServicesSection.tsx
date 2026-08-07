"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Package,
  PenTool,
  Trees,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    name: "Residential Construction",
    icon: Home,
    desc: "Premium residential buildings with world-class finishes and structural excellence.",
  },
  {
    name: "Commercial Projects",
    icon: Building2,
    desc: "Large-scale commercial developments designed for functionality and longevity.",
  },
  {
    name: "Warehousing",
    icon: Package,
    desc: "Industrial warehousing solutions built to the highest safety and engineering standards.",
  },
  {
    name: "Interior Designing",
    icon: PenTool,
    desc: "Modern interior spaces that blend aesthetics with practical engineering design.",
  },
  {
    name: "Architecture",
    icon: Trees,
    desc: "Innovative architectural planning aligned with structural integrity and vision.",
  },
  {
    name: "Infrastructure Development",
    icon: Wrench,
    desc: "End-to-end infrastructure solutions for civil and public sector projects.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-[#071A35] bg-blueprint"
    >

      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0A3D91]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div className="container-width relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              What We Do
            </span>
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Our{" "}
            <span className="text-[#3B82F6] italic">Services</span>
          </h2>

          <p className="text-[#94A3B8] max-w-xl mx-auto mt-5 text-[15px] leading-relaxed font-sans">
            A comprehensive range of construction and infrastructure services
            delivered with engineering precision and commitment to quality.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: index * 0.07, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#0D2348] border border-[#1A3560] rounded-2xl p-8 overflow-hidden transition-all duration-400 hover:border-[#3B82F6]/50 hover:shadow-[0_16px_48px_rgba(10,61,145,0.3)] cursor-default"
              >

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A3D91] to-[#3B82F6] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0A3D91]/30 border border-[#1A3560] flex items-center justify-center text-[#3B82F6] mb-6 group-hover:bg-[#0A3D91] group-hover:border-[#3B82F6]/50 transition-all duration-300">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#93C5FD] transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-[#64748B] leading-relaxed text-[14px] font-sans mb-6">
                  {service.desc}
                </p>

                {/* Bottom accent */}
                <div className="flex items-center gap-2 text-[#3B82F6]/60 group-hover:text-[#3B82F6] transition-colors duration-300">
                  <div className="w-6 h-[1.5px] bg-current rounded-full group-hover:w-10 transition-all duration-400" />
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}