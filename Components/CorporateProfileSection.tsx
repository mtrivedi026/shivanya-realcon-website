"use client";

import { motion, useInView } from "framer-motion";
import { Download, Eye, CheckCircle2, Award, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────── */



const STATS = [
  { end: 100, suffix: "+", label: "Projects" },
  { end: 300, suffix: "+", label: "Workforce" },
  { end: 10,  suffix: "+", label: "Clients" },
];

/* ─── Sub-components ────────────────────────────────────────── */

/** Left image panel */
function ImagePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full"
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-3xl border border-[#1A3560] shadow-2xl shadow-[#071A35]/80 group bg-[#071A35]">

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent z-10" />

        <img
          src="/images/portfolio-cover.png"
          alt="Shivaanya Realcon Corporate Profile"
          className="w-full object-contain min-h-[380px] md:min-h-[460px] transition-transform duration-700 ease-out group-hover:scale-[1.04] p-4"
        />



        {/* Bottom label */}
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#93C5FD] text-[11px] font-sans font-semibold tracking-[0.18em] uppercase">
              Shivaanya Realcon Pvt. Ltd.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative corner frame */}
      <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#3B82F6]/30 rounded-br-3xl pointer-events-none" />
    </motion.div>
  );
}

/** Stat item used in stats row */
function StatItem({
  item,
  inView,
  index,
}: {
  item: (typeof STATS)[number];
  inView: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1 }}
      className={`text-center px-4 ${
        index < STATS.length - 1 ? "border-r border-[#1A3560]" : ""
      }`}
    >
      <p className="text-2xl md:text-3xl font-bold text-[#3B82F6] font-sans leading-none">
        {inView && <CountUp start={0} end={item.end} duration={2.8} />}
        <span className="text-white/50 ml-0.5">{item.suffix}</span>
      </p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748B] mt-2 font-sans font-medium">
        {item.label}
      </p>
    </motion.div>
  );
}

/** Right content panel */
function ContentPanel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
      className="flex flex-col justify-center"
    >

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
        <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
          Company Profile
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
        Shivaanya{" "}
        <span className="text-[#3B82F6] italic font-light">Realcon</span>
      </h2>

      {/* Divider */}
      <div className="w-12 h-[3px] bg-[#0A3D91] rounded-full mb-6" />

      {/* Description */}
      <p className="text-[#94A3B8] text-[14.5px] leading-relaxed font-sans mb-8 max-w-md">
        View our complete corporate profile including projects, workforce capabilities,
        certifications and equipment information.
      </p>


      {/* Stats row */}
      <div className="flex items-center border-y border-[#1A3560] py-6 mb-8">
        {STATS.map((item, index) => (
          <StatItem key={item.label} item={item} inView={inView} index={index} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <motion.a
          whileHover={{ scale: 1.03, translateY: -2 }}
          whileTap={{ scale: 0.97 }}
          href="/files/company-portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs px-7 py-3.5 gap-2 shadow-lg shadow-[#0A3D91]/30"
        >
          <Eye size={15} />
          View Portfolio
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.03, translateY: -2 }}
          whileTap={{ scale: 0.97 }}
          href="/files/company-portfolio.pdf"
          download
          className="btn-outline text-xs px-7 py-3.5 gap-2"
        >
          <Download size={15} />
          Download PDF
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export default function CorporateProfileSection() {
  const countRef = useRef<HTMLDivElement>(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 overflow-hidden bg-[#071A35]"
    >

      {/* ── Background ambient glows ──────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0A3D91]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[110px] pointer-events-none" />

      <div className="container-width relative z-10">

        {/* ── Section header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Corporate Portfolio
            </span>
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Who We{" "}
            <span className="text-[#3B82F6] italic font-light">Are</span>
          </h2>

          <p className="text-[#64748B] max-w-lg mx-auto mt-5 text-[14px] leading-relaxed font-sans">
            Explore our comprehensive corporate profile detailing capabilities,
            milestones and achievements across diverse construction verticals.
          </p>
        </motion.div>

        {/* ── Main two-column card ──────────────────────────── */}
        <motion.div
          ref={countRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#0D2348]/80 backdrop-blur-sm border border-[#1A3560] rounded-3xl overflow-hidden shadow-2xl shadow-[#071A35]/60"
        >
          {/* Card top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

          {/* Grid layout */}
          <div className="grid lg:grid-cols-[45%_55%] gap-0">

            {/* Left — Image */}
            <div className="p-8 md:p-10 lg:p-12">
              <ImagePanel />
            </div>

            {/* Vertical divider (desktop only) */}
            <div className="hidden lg:block absolute left-[45%] top-12 bottom-12 w-[1px] bg-[#1A3560]" />

            {/* Right — Content */}
            <div className="px-8 py-8 md:px-10 lg:px-12 lg:py-12">
              <ContentPanel inView={inView} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
