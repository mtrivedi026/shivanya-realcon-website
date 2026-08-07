"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  HardHat,
  Building2,
  Clock3,
  Handshake,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "Quality Construction",
    desc: "Uncompromising standards at every stage",
    icon: <Building2 size={20} />,
  },
  {
    title: "Expert Engineering",
    desc: "Led by experienced civil engineers",
    icon: <HardHat size={20} />,
  },
  {
    title: "On-Time Delivery",
    desc: "Committed to project timelines",
    icon: <Clock3 size={20} />,
  },
  {
    title: "Trusted Partner",
    desc: "Long-term client relationships",
    icon: <Handshake size={20} />,
  },
];

export default function AboutSection() {
  const countRef = useRef(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.4,
  });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F8FAFC]"
    >

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#EFF6FF] blur-[140px] opacity-70 pointer-events-none" />

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT: IMAGE ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/about-site.jpg"
                alt="Shivaanya Realcon construction site"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Blue tint overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              ref={countRef}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-4 bg-[#0A3D91] px-6 py-5 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white font-sans leading-none">
                {inView && <CountUp start={0} end={9} duration={3} />}
                <span className="text-[#93C5FD]">+</span>
              </h2>
              <p className="text-[#93C5FD] tracking-[0.2em] text-[10px] mt-1.5 uppercase font-sans font-semibold">
                Years Experience
              </p>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#3B82F6]/40 rounded-tr-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* ── RIGHT: CONTENT ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#0A3D91]" />
            <p className="uppercase tracking-[0.22em] text-[#0A3D91] text-xs font-semibold font-sans">
              The Company
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold leading-[1.1] mb-6 text-[#1E293B]">
            Building the Future
            <br />
            <span className="text-[#0A3D91]">With Precision</span>
          </h2>

          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mb-7" />

          <p className="text-[#475569] leading-relaxed mb-4 text-[15px]">
            <strong className="text-[#1E293B]">SHIVAANYA REALCON</strong> delivers premium construction and infrastructure
            projects with precision, innovation and trust. We are a registered and certified
            construction company headquartered in Noida.
          </p>

          <p className="text-[#64748B] leading-relaxed mb-10 text-[15px]">
            We combine engineering excellence with modern construction practices
            to build durable infrastructure — on time, every time.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.08 }}
                className="card-light card-accent-top p-5 cursor-default"
              >
                <div className="icon-box-blue mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#1E293B] text-sm mb-1 font-sans">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] text-xs leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}