"use client";

import { motion, useInView } from "framer-motion";
import { HardHat, Users } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const workforce = [
  { role: "Civil Engineers", qty: 12 },
  { role: "Site Supervisors", qty: 20 },
  { role: "Skilled Labour", qty: 150 },
  { role: "Unskilled Labour", qty: 200 },
  { role: "Electricians", qty: 25 },
  { role: "Bar Benders", qty: 40 },
  { role: "Masons", qty: 80 },
  { role: "Carpenters", qty: 60 },
];

export default function ManPowerSection() {

  const countRef = useRef(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.3,
  });

  const total = workforce.reduce((sum, w) => sum + w.qty, 0);

  return (
    <section
      id="manpower"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F8FAFC]"
    >

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#EFF6FF] blur-[120px] opacity-70 pointer-events-none" />

      <div className="container-width relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#0A3D91]" />
              <p className="uppercase tracking-[0.22em] text-[#0A3D91] text-xs font-semibold font-sans">
                Our Team
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-[#1E293B] leading-tight">
              Workforce{" "}
              <span className="text-[#0A3D91] italic">Strength</span>
            </h2>

            <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mt-5" />
          </div>

          <p className="text-[#475569] max-w-sm text-[14px] leading-relaxed font-sans lg:text-right">
            A highly skilled and dedicated workforce powering every successful project
            with expertise, precision and commitment to excellence.
          </p>
        </motion.div>

        {/* Summary badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 bg-[#0A3D91] rounded-2xl px-7 py-5 mb-10 w-fit"
        >
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
            <Users size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-2xl font-sans leading-none">{total}+</p>
            <p className="text-[#93C5FD] text-xs uppercase tracking-widest mt-1 font-sans">Total Workforce</p>
          </div>
        </motion.div>

        {/* CARDS GRID */}
        <div ref={countRef} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {workforce.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#0A3D91]/10 hover:border-[#0A3D91]/30 transition-all duration-350 relative overflow-hidden cursor-default"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0A3D91] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

              <h3 className="text-4xl md:text-5xl font-bold text-[#1E293B] group-hover:text-[#0A3D91] transition-colors duration-200 mb-3 font-sans leading-none">
                {inView && (
                  <CountUp start={0} end={item.qty} duration={2.5} />
                )}
                <span className="text-[#3B82F6] text-2xl">+</span>
              </h3>

              <p className="uppercase tracking-wider text-[#64748B] text-[11px] font-semibold font-sans group-hover:text-[#475569] transition-colors duration-200">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}