"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   PARTNER DATA
   ─────────────────────────────────────────────────────────────
   Replace `logo` with real image paths (e.g. "/images/partners/abc.png")
   once the partner logo files are added to public/images/partners/.
   The component will automatically pick them up — no JSX changes needed.
   ───────────────────────────────────────────────────────────── */

interface Partner {
  id: number;
  name: string;
  logo: string | null; // null = render initials fallback
  initials: string;    // shown when logo is null
  category: string;
}

const PARTNERS: Partner[] = [
  { id: 1, name: "Johnson Lifts & Escalators", logo: "/images/partners/johnson-lifts.jpeg",    initials: "JLT", category: "Elevators"    },
  { id: 2, name: "Lohaar",                       logo: "/images/partners/lghaar.jpeg",           initials: "LGH", category: "Hardware"     },
  { id: 3, name: "Fenesta",                      logo: "/images/partners/fenesta.jpeg",          initials: "FNS", category: "Windows"      },
  { id: 4, name: "Eternia by Hindalco",          logo: "/images/partners/eternia.jpeg",          initials: "ETR", category: "Aluminium"    },
  { id: 5, name: "Prominance UPVC",              logo: "/images/partners/prominance.jpeg",       initials: "PRM", category: "Windows"      },
  { id: 6, name: "SiNTA Astrix",                 logo: "/images/partners/sinta-astrix.jpeg",     initials: "SNT", category: "Doors"        },
  { id: 7, name: "Samar & Associates",           logo: "/images/partners/samar-associates.jpeg", initials: "S&A", category: "Consultancy"  },
  { id: 8, name: "Brick & Brain",                logo: "/images/partners/brick-brain.jpeg",      initials: "B&B", category: "Architecture" },
];

/* ─────────────────────────────────────────────────────────────
   PARTNER CARD
   — Mirrors LogoCard in ClientsSection exactly.
   — Cards stay white so they pop against the dark section bg.
   ───────────────────────────────────────────────────────────── */

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(10,61,145,0.22)" }}
      className="group relative bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-[#E2E8F0] flex flex-col items-center justify-center gap-3 p-6 h-[130px] cursor-default transition-all duration-300 hover:border-[#0A3D91]/25"
    >

      {/* Top accent line — appears on hover */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#0A3D91] to-[#3B82F6] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

      {/* Logo */}
      <img
        src={partner.logo!}
        alt={partner.name}
        className="w-full max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-[1.07]"
      />

      {/* Partner name */}
      <p className="text-[11px] font-sans font-semibold text-[#64748B] tracking-wide text-center leading-tight group-hover:text-[#0A3D91] transition-colors duration-200">
        {partner.name}
      </p>

    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
   ───────────────────────────────────────────────────────────── */

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative py-24 md:py-28 overflow-hidden bg-[#071A35] bg-blueprint"
    >

      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#0A3D91]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[#3B82F6]/5 blur-[110px] pointer-events-none" />

      <div className="container-width relative z-10">

        {/* ── Section Header ─────────────────────────────────
            Mirrors ClientsSection header 1:1.
            Only text content differs.
        ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Eyebrow */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Partners
            </span>
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Our{" "}
            <span className="text-[#3B82F6] italic">Partners</span>
          </h2>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mx-auto mt-5 mb-5" />

          {/* Subtitle */}
          <p className="text-[#94A3B8] max-w-lg mx-auto text-[15px] leading-relaxed font-sans">
            Strategic partnerships that help us deliver high-quality construction
            and infrastructure solutions across India.
          </p>
        </motion.div>

        {/* ── Partner Cards Grid ──────────────────────────────
            Responsive columns:
            Mobile  → 2 cols  (grid-cols-2)
            Tablet  → 3 cols  (sm:grid-cols-3)
            Desktop → 4 cols  (lg:grid-cols-4)
        ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>



      </div>
    </section>
  );
}
