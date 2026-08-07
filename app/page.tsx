"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dynamic from "next/dynamic";

const Background3D =
dynamic(()=>import("../Components/Background3D"));

const Navbar =
dynamic(()=>import("../Components/Navbar"));

const Hero3D =
dynamic(()=>import("../Components/Hero3D"));

const AboutSection =
dynamic(()=>import("../Components/AboutSection"));

const ServicesSection =
dynamic(()=>import("../Components/ServicesSection"));

const ProjectsGallery =
dynamic(()=>import("../Components/ProjectsGallery"));

const CorporateProfileSection =
dynamic(()=>import("../Components/CorporateProfileSection"));

const ClientsSection =
dynamic(()=>import("../Components/ClientsSection"));

const PartnersSection =
dynamic(()=>import("../Components/PartnersSection"));

const VendorsSection =
dynamic(()=>import("../Components/VendorsSection"));

const ManPowerSection =
dynamic(()=>import("../Components/ManPowerSection"));

const EquipmentsSection =
dynamic(()=>import("../Components/EquipmentsSection"));

const ContactSection =
dynamic(()=>import("../Components/ContactSection"));

const Footer =
dynamic(()=>import("../Components/Footer"));
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
            className="fixed inset-0 z-[9999] bg-[#071A35] flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative text-center"
            >
              {/* Logo */}
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-[0.2em] uppercase text-white">
                Shivaanya
              </h1>
              <p className="text-[#3B82F6] text-center tracking-[0.45em] text-xs mt-2 uppercase font-sans font-semibold">Realcon</p>
            </motion.div>

            {/* Loading Bar */}
            <div className="mt-12 relative w-[180px] h-[2px] bg-[#1A3560] overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut"
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[#475569] tracking-[0.3em] mt-7 text-[10px] font-sans uppercase"
            >
              Loading Experience
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
        <CorporateProfileSection />
        <ClientsSection />
        <PartnersSection />
        <VendorsSection />
        <ManPowerSection />
        <EquipmentsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}