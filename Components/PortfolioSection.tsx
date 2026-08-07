"use client";

import { motion, useInView } from "framer-motion";
import { Download, Eye, CheckCircle2, Award } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const highlights = [
  "ISO certified construction practices",
  "Government-registered contractor",
  "100+ successful project deliveries",
  "300+ skilled workforce deployment",
];

export default function PortfolioSection() {

  const countRef = useRef(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 overflow-hidden bg-[#071A35] bg-blueprint"
    >

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0A3D91]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div className="container-width relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Company Profile
            </span>
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Corporate{" "}
            <span className="text-[#3B82F6] italic font-light">Portfolio</span>
          </h2>

          <p className="text-[#94A3B8] max-w-xl mx-auto mt-5 text-[14px] leading-relaxed font-sans">
            Explore our comprehensive company profile detailing capabilities,
            milestones, and achievements across diverse construction verticals.
          </p>
        </motion.div>

        {/* Main Portfolio Card */}
        <motion.div
          ref={countRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="bg-[#0D2348] border border-[#1A3560] rounded-3xl overflow-hidden relative"
        >

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

          <div className="grid lg:grid-cols-2 gap-0 items-stretch">

            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden min-h-[380px] bg-[#081C3A] flex items-center justify-center"
            >
              <img
                src="/images/portfolio-cover.png"
                alt="Shivaanya Realcon Portfolio"
                className="w-full h-full object-contain p-6 transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Award badge */}
              <div className="absolute top-6 left-6 bg-[#0A3D91] rounded-xl px-4 py-2 flex items-center gap-2">
                <Award size={15} className="text-[#93C5FD]" />
                <span className="text-white text-xs font-semibold font-sans">Certified Contractor</span>
              </div>
            </motion.div>

            {/* CONTENT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="p-10 lg:p-14 flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Shivaanya Realcon
              </h3>
              <p className="text-[#94A3B8] leading-relaxed mb-8 text-[14px] font-sans">
                View our complete corporate profile including project milestones,
                certifications, workforce capabilities, and equipment fleet.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-10">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-[#CBD5E1] text-sm font-sans"
                  >
                    <CheckCircle2 size={16} className="text-[#3B82F6] flex-shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </ul>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-10 py-7 border-y border-[#1A3560]">
                {[
                  { num: 100, label: "Projects" },
                  { num: 300, label: "Workforce" },
                  { num: 10, label: "Clients" },
                ].map((item, index) => (
                  <div key={item.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#3B82F6] font-sans">
                      {inView && (
                        <CountUp start={0} end={item.num} duration={3} />
                      )}
                      <span className="text-white/60">+</span>
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#64748B] mt-1 font-sans">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/files/company-portfolio.pdf"
                  target="_blank"
                  className="btn-primary text-xs px-6 py-3.5 gap-2"
                >
                  <Eye size={15} />
                  View Portfolio
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/files/company-portfolio.pdf"
                  download
                  className="btn-outline text-xs px-6 py-3.5 gap-2"
                >
                  <Download size={15} />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}