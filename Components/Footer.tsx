"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Portfolio", "#portfolio"],
  ["Manpower", "#manpower"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#050E1F] border-t border-[#1A3560]/50">

        {/* Main footer content */}
        <div className="container-width pt-16 pb-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

            {/* ── BRAND ────────────────────────────── */}
            <div>
              <img
                src="/images/logo.png"
                className="h-12 mb-5 object-contain"
                alt="Shivaanya Realcon"
              />
              <p className="text-[#94A3B8] text-[14px] leading-7 max-w-xs font-sans">
                Shivaanya Realcon delivers premium construction, manpower and
                infrastructure solutions with quality and reliability.
              </p>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#0A3D91] mt-6 mb-5 rounded-full" />

              {/* Tagline */}
              <p className="text-[#3B82F6] text-[11px] tracking-[0.22em] uppercase font-semibold font-sans">
                Trusted for the Best
              </p>
            </div>

            {/* ── QUICK LINKS ──────────────────────── */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-[0.15em] font-sans">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {quickLinks.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="group flex items-center gap-1.5 py-1.5 text-[#64748B] hover:text-white text-sm font-sans transition-colors duration-200"
                  >
                    <span className="w-0 h-[1.5px] bg-[#3B82F6] group-hover:w-3 transition-all duration-300 rounded-full" />
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* ── CONTACT INFO ─────────────────────── */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-[0.15em] font-sans">
                Contact Info
              </h3>
              <div className="space-y-5">
                <a
                  href="https://maps.google.com/?q=I-Thum+Tower+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0A3D91]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A3D91] transition-colors duration-300">
                    <MapPin size={15} className="text-[#3B82F6]" />
                  </div>
                  <p className="text-[#64748B] text-sm font-sans group-hover:text-[#94A3B8] transition-colors duration-200 leading-relaxed">
                    136, I-Thum Tower-B,<br />Sector-62, Noida
                  </p>
                </a>

                <a
                  href="tel:+919999770910"
                  className="flex gap-4 items-center group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0A3D91]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A3D91] transition-colors duration-300">
                    <Phone size={15} className="text-[#3B82F6]" />
                  </div>
                  <p className="text-[#64748B] text-sm font-sans group-hover:text-[#94A3B8] transition-colors duration-200">
                    +91 99997 70910
                  </p>
                </a>

                <a
                  href="mailto:srpl.noida@gmail.com"
                  className="flex gap-4 items-center group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0A3D91]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A3D91] transition-colors duration-300">
                    <Mail size={15} className="text-[#3B82F6]" />
                  </div>
                  <p className="text-[#64748B] text-sm font-sans group-hover:text-[#94A3B8] transition-colors duration-200">
                    srpl.noida@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A3560]/40">
          <div className="container-width py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[#475569] text-xs font-sans">
              © {new Date().getFullYear()} Shivaanya Realcon Pvt Ltd. All Rights Reserved.
            </p>
            <p className="text-[#334155] text-xs font-sans">
              Designed &amp; Developed by SRPL
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919999770910"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 w-13 h-13 rounded-full bg-[#25D366] flex justify-center items-center text-white text-2xl shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 z-50 group"
        aria-label="Chat on WhatsApp"
        style={{ width: 52, height: 52 }}
      >
        <FaWhatsapp size={24} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40" />
      </a>
    </>
  );
}