"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Background3D from "../Components/Background3D";
import Navbar from "../Components/Navbar";
import Hero3D from "../Components/Hero3D";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import ProjectsGallery from "../Components/ProjectsGallery";
import PortfolioSection from "../Components/PortfolioSection";
import ManPowerSection from "../Components/ManPowerSection";
import EquipmentsSection from "../Components/EquipmentsSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Background3D />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Premium Preloader Typography */}
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-blue-gradient tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                Shivaanya
              </h1>
              <p className="text-[#00E5FF]/70 text-center tracking-[0.4em] text-xs mt-2 uppercase">Realcon</p>
            </motion.div>

            {/* Premium Loading Bar */}
            <div className="mt-12 relative w-[200px] h-[1px] bg-[#1e293b] overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_rgba(0,229,255,0.8)]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[#00E5FF]/50 tracking-[0.3em] mt-8 text-xs font-light"
            >
              INITIALIZING EXPERIENCE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full bg-transparent text-white relative z-10 overflow-x-clip">
        <Navbar />
        <Hero3D />
        <AboutSection />
        <ServicesSection />
        <ProjectsGallery />
        <PortfolioSection />
        <ManPowerSection />
        <EquipmentsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}