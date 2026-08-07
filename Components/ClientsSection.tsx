"use client";

import { motion } from "framer-motion";
interface Client {
  id: number;
  name: string;
  logo: string;
  initials: string;
  sector: string;
}

const CLIENTS: Client[] = [
  { id: 1, name: "DCM Shriram Sugar",         logo: "/images/clients/dcm-shriram.jpeg",  initials: "DCM", sector: "Sugar"         },
  { id: 2, name: "Magadh Sugar & Energy Ltd.", logo: "/images/clients/magadh-sugar.jpeg", initials: "MSG", sector: "Sugar & Energy" },
  { id: 3, name: "Avadh Sugar & Energy Ltd.",  logo: "/images/clients/avadh-sugar.jpeg",  initials: "AVS", sector: "Sugar & Energy" },
  { id: 4, name: "KR Papers",                  logo: "/images/clients/kr-papers.jpeg",    initials: "KRP", sector: "Paper"         },
  { id: 5, name: "Tattvamasi",                 logo: "/images/clients/tattvamasi.jpeg",   initials: "TVM", sector: "Infrastructure" },
];

interface LogoCardProps {
  client: Client;
  index: number;
  isLast?: boolean;
}

function LogoCard({ client, index, isLast }: LogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(10,61,145,0.14)" }}
      className={`group relative bg-white rounded-2xl shadow-[0_2px_12px_rgba(10,61,145,0.07)] border border-[#E2E8F0] flex flex-col items-center justify-center gap-3 p-6 h-[160px] cursor-default transition-all duration-300 hover:border-[#0A3D91]/20${
        isLast ? " col-span-2 sm:col-span-1 max-w-[calc(50%-12px)] sm:max-w-none mx-auto w-full" : ""
      }`}
    >

      {/* Top accent line — appears on hover */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#0A3D91] to-[#3B82F6] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

      {/* Logo */}
      <img
        src={client.logo}
        alt={client.name}
        className="w-full h-32 object-contain p-2 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Client name */}
      <p className="text-[11px] font-sans font-semibold text-[#64748B] tracking-wide text-center leading-tight group-hover:text-[#0A3D91] transition-colors duration-200">
        {client.name}
      </p>

    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
   ───────────────────────────────────────────────────────────── */

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-24 md:py-28 overflow-hidden bg-[#F8FAFC]"
    >

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#EFF6FF] blur-[130px] opacity-70 pointer-events-none" />

      <div className="container-width relative z-10">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Eyebrow */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#0A3D91]" />
            <span className="text-[#0A3D91] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Clients
            </span>
            <div className="w-8 h-[1.5px] bg-[#0A3D91]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E293B]">
            Our{" "}
            <span className="text-[#0A3D91] italic">Clients</span>
          </h2>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mx-auto mt-5 mb-5" />

          {/* Subtitle */}
          <p className="text-[#475569] max-w-lg mx-auto text-[15px] leading-relaxed font-sans">
            Trusted by leading industrial and infrastructure organizations across India.
          </p>
        </motion.div>

        {/* ── Logo Grid ──────────────────────────────────── */}
        {/*
          Responsive columns:
          Mobile  → 2 cols (grid-cols-2)  — 5th card centered alone
          Tablet  → 3 cols (sm:grid-cols-3) — row 1: 3, row 2: 2
          Desktop → 5 cols (lg:grid-cols-5) — all 5 in one row
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {CLIENTS.map((client, index) => (
            <LogoCard
              key={client.id}
              client={client}
              index={index}
              isLast={index === CLIENTS.length - 1 && CLIENTS.length % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
