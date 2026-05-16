"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#020617]/90 border-t border-[#1e293b] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <img
              src="/images/logo.png"
              alt="Shivaanya Realcon Logo"
      className="h-12 object-contain"
            />
            <p className="text-gray-500 text-sm tracking-wide">
              © {new Date().getFullYear()} Shivaanya Realcon Pvt. Ltd.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919999770910"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 group"
      >
        <FaWhatsapp />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#0f172a] text-white text-xs py-2 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#1e293b]">
          Chat with us
        </span>
      </a>
    </>
  );
}
