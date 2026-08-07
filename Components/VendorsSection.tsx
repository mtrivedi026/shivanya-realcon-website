"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   VENDOR DATA
   ─────────────────────────────────────────────────────────────
   Replace `logo` with real image paths (e.g. "/images/vendors/abc.png")
   once the vendor logo files are added to public/images/vendors/.
   Set logo: "/images/vendors/filename.png" — no JSX changes needed.
   ───────────────────────────────────────────────────────────── */

interface Vendor {
  id: number;
  name: string;
  logo: string | null; // null = render initials fallback
  initials: string;    // shown when logo is null
  supply: string;      // supply category
}

const VENDORS: Vendor[] = [
  // ── Paints ──────────────────────────────────────────────
  { id: 1,  name: "Asian Paints",                logo: "/images/vendors/asian-paints.jpeg",    initials: "AP",  supply: "Paints"     },
  { id: 2,  name: "Berger Paints",               logo: "/images/vendors/berger-paints.jpeg",   initials: "BRG", supply: "Paints"     },
  { id: 3,  name: "Nerolac Paints",              logo: "/images/vendors/nerolac.jpeg",          initials: "NRL", supply: "Paints"     },
  { id: 4,  name: "Birla Opus Paints",           logo: "/images/vendors/birla-opus.jpeg",       initials: "BOP", supply: "Paints"     },
  { id: 5,  name: "JSW Paints",                  logo: "/images/vendors/jsw-paints.jpeg",       initials: "JSP", supply: "Paints"     },
  { id: 6,  name: "Birla White",                 logo: "/images/vendors/birla-white.jpeg",      initials: "BW",  supply: "Paints"     },
  // ── Cement ──────────────────────────────────────────────
  { id: 7,  name: "Adani ACC Cement",            logo: "/images/vendors/adani-acc.jpeg",        initials: "ACC", supply: "Cement"     },
  { id: 8,  name: "Mangalam Cement",             logo: "/images/vendors/Mangalam.jpeg",          initials: "MCL", supply: "Cement"     },
  { id: 9,  name: "Wonder Cement",               logo: "/images/vendors/wonder-cement.jpeg",    initials: "WCL", supply: "Cement"     },
  // ── Steel & TMT ─────────────────────────────────────────
  { id: 10, name: "JSW Steel",                   logo: "/images/vendors/jsw-steel.jpeg",        initials: "JSW", supply: "Steel"      },
  { id: 11, name: "Captain 600 EQR TMT",         logo: "/images/vendors/captain-tmt.jpeg",      initials: "CAP", supply: "TMT Bars"   },
  { id: 12, name: "Gallantt TMT Bars",           logo: "/images/vendors/gallantt.jpeg",         initials: "GLT", supply: "TMT Bars"   },
  { id: 13, name: "Magadh TMT Bars",             logo: "/images/vendors/magadh-tmt.jpeg",       initials: "MGT", supply: "TMT Bars"   },
  { id: 14, name: "Elegant TMX",                 logo: "/images/vendors/Elegant.jpeg",           initials: "ELG", supply: "TMT Bars"   },
  { id: 15, name: "Rudraksha TMT & Steel",       logo: "/images/vendors/rudraksha.jpeg",        initials: "RDK", supply: "Steel"      },
  // ── Electricals ─────────────────────────────────────────
  { id: 16, name: "KEI Wires & Cables",          logo: "/images/vendors/kei-wires.jpeg",        initials: "KEI", supply: "Electrical" },
  { id: 17, name: "Bajaj Electricals",           logo: "/images/vendors/bajaj-electricals.jpeg",initials: "BJE", supply: "Electrical" },
  { id: 18, name: "Havells",                     logo: "/images/vendors/havells.jpeg",          initials: "HVL", supply: "Electrical" },
  { id: 19, name: "Anchor Electricals",          logo: "/images/vendors/anchor.jpeg",           initials: "ANC", supply: "Electrical" },
  { id: 20, name: "Polycab",                     logo: "/images/vendors/polycab.jpeg",          initials: "PCB", supply: "Electrical" },
  { id: 21, name: "Crompton Greaves",            logo: "/images/vendors/crompton-greaves.jpeg", initials: "CRG", supply: "Electrical" },
  // ── Tiles ───────────────────────────────────────────────
  { id: 22, name: "Kajaria Tiles",               logo: "/images/vendors/kajaria.jpeg",          initials: "KJR", supply: "Tiles"      },
  { id: 23, name: "Johnson Tiles",               logo: "/images/vendors/johnson-tiles.jpeg",    initials: "JHT", supply: "Tiles"      },
  { id: 24, name: "Orientbell Tiles",            logo: "/images/vendors/orientbell.jpeg",       initials: "OBT", supply: "Tiles"      },
  { id: 25, name: "Somany Tiles",                logo: "/images/vendors/somany.jpeg",           initials: "SMY", supply: "Tiles"      },
  { id: 26, name: "GC Cera Tiles",              logo: "/images/vendors/gc-cera.jpeg",          initials: "GCC", supply: "Tiles"      },
  // ── Others ──────────────────────────────────────────────
  { id: 27, name: "DCM Shriram Sugar",           logo: "/images/vendors/dcm-shriram.jpeg",      initials: "DCM", supply: "Industrial" },
  { id: 28, name: "Magadh Sugar & Energy",       logo: "/images/vendors/magadh-sugar.jpeg",     initials: "MSG", supply: "Industrial" },
  { id: 29, name: "Eternia by Hindalco",         logo: "/images/vendors/eternia.jpeg",          initials: "ETR", supply: "Aluminium"  },
  { id: 30, name: "Samar & Associates",          logo: "/images/vendors/samar-associates.jpeg", initials: "S&A", supply: "Consultancy"},
];

/* ─────────────────────────────────────────────────────────────
   VENDOR CARD
   — Pixel-identical to LogoCard (ClientsSection) and
     PartnerCard (PartnersSection).
   ───────────────────────────────────────────────────────────── */

interface VendorCardProps {
  vendor: Vendor;
  index: number;
}

function VendorCard({ vendor, index }: VendorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(10,61,145,0.14)" }}
      className="group relative bg-white rounded-2xl shadow-[0_2px_12px_rgba(10,61,145,0.07)] border border-[#E2E8F0] flex flex-col items-center justify-center gap-3 p-6 h-[130px] cursor-default transition-all duration-300 hover:border-[#0A3D91]/20"
    >

      {/* Top accent line — appears on hover */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#0A3D91] to-[#3B82F6] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

      {/* Logo or initials fallback */}
      {/* Logo */}
      {vendor.logo ? (
        <img
          src={vendor.logo}
          alt={vendor.name}
          className="w-full max-h-[56px] object-contain transition-transform duration-300 group-hover:scale-[1.07]"
        />
      ) : (
        <div className="flex flex-col items-center gap-1 transition-transform duration-300 group-hover:scale-[1.06]">
          <span className="text-xl md:text-2xl font-bold font-sans text-[#0A3D91] leading-none tracking-tight">
            {vendor.initials}
          </span>
          <div className="w-8 h-[1.5px] bg-[#3B82F6]/40 rounded-full" />
        </div>
      )}

      {/* Vendor name */}
      <p className="text-[11px] font-sans font-semibold text-[#64748B] tracking-wide text-center leading-tight group-hover:text-[#0A3D91] transition-colors duration-200">
        {vendor.name}
      </p>

    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
   ───────────────────────────────────────────────────────────── */

export default function VendorsSection() {
  return (
    <section
      id="vendors"
      className="relative py-24 md:py-28 overflow-hidden bg-[#F8FAFC]"
    >

      {/* Top accent line — matches ClientsSection exactly */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#EFF6FF] blur-[130px] opacity-70 pointer-events-none" />

      <div className="container-width relative z-10">

        {/* ── Section Header ─────────────────────────────────
            Structure mirrors ClientsSection and PartnersSection
            header 1:1. Only text content differs.
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
            <div className="w-8 h-[1.5px] bg-[#0A3D91]" />
            <span className="text-[#0A3D91] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Vendors
            </span>
            <div className="w-8 h-[1.5px] bg-[#0A3D91]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E293B]">
            Our{" "}
            <span className="text-[#0A3D91] italic">Vendors</span>
          </h2>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mx-auto mt-5 mb-5" />

          {/* Subtitle */}
          <p className="text-[#475569] max-w-lg mx-auto text-[15px] leading-relaxed font-sans">
            Partnering with India's leading manufacturers and suppliers to deliver
            quality construction projects.
          </p>
        </motion.div>

        {/* ── Vendor Cards Grid ───────────────────────────────
            Responsive columns:
            Mobile  → 2 cols  (grid-cols-2)
            Tablet  → 4 cols  (sm:grid-cols-4)
            Desktop → 6 cols  (lg:grid-cols-6)
        ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {VENDORS.map((vendor, index) => (
            <VendorCard key={vendor.id} vendor={vendor} index={index} />
          ))}
        </div>

        {/* ── Footnote ───────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#94A3B8] text-xs font-sans tracking-wide mt-10"
        >
          And many more trusted manufacturers and material suppliers across India.
        </motion.p>

      </div>
    </section>
  );
}
