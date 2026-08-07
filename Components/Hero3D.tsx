"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero3D() {

  const statsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Delivering premium construction, infrastructure and manpower solutions."
      ],
      typeSpeed: 36,
      showCursor: false,
      loop: false
    });
    return () => typed.destroy();
  }, []);

  const isInView = useInView(statsRef, { once: false, amount: 0.4 });

  const stats = [
    { end: 100, suffix: "+", label: "Projects Delivered" },
    { end: 9, suffix: "+", label: "Years of Experience" },
    { end: 300, suffix: "+", label: "Skilled Workforce" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/construction.mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      </div>

      {/* SUBTLE BLUEPRINT GRID */}
      <div
        className="absolute inset-0 -z-5 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* HERO CONTENT */}
      <div className="container-width relative z-20 text-center pt-28 pb-16">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/8 border border-[#3B82F6]/30 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-[#93C5FD] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
            Premium Construction Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif font-black leading-[1.05] mb-6"
        >
          <span className="block text-white text-5xl md:text-7xl lg:text-[82px] tracking-tight">
            SHIVAANYA
          </span>
          <span
            className="block text-4xl md:text-5xl lg:text-6xl tracking-widest font-semibold mt-1"
            style={{ color: "#3B82F6" }}
          >
            REALCON
          </span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p
            ref={textRef}
            className="text-[#CBD5E1] text-base md:text-lg leading-relaxed font-sans"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-4 flex-wrap mb-20"
        >
          <a href="#contact" className="btn-primary group text-sm px-7 py-3.5">
            Get a Quote
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#projects" className="btn-outline text-sm px-7 py-3.5">
            View Projects
          </a>
        </motion.div>

        {/* Stats Row — Glass Divider */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex justify-center gap-0 flex-wrap divide-x divide-white/15 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-6 max-w-xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[100px] text-center px-6">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-1">
                {isInView && (
                  <CountUp start={0} end={stat.end} duration={3} />
                )}
                <span style={{ color: "#3B82F6" }}>{stat.suffix}</span>
              </h2>
              <p className="text-[#94A3B8] text-xs uppercase tracking-widest font-sans">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  );
}