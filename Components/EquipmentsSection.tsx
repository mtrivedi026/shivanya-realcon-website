"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const equipments = [
  { name: "Mixer Lift Machine",        qty: 3,     suffix: " Pcs.",    img: "/images/Mixer Lift Machine.png" },
  { name: "Mixer Machine",             qty: 4,     suffix: " Pcs.",    img: "/images/Mixer Machine.png" },
  { name: "Lift Machine",              qty: 5,     suffix: " Pcs.",    img: "/images/Lift Machine.png" },
  { name: "Prop Jack",                 qty: 2000,  suffix: " Pcs.",    img: "/images/Prop Jack.png" },
  { name: "Shuttering Ply Board",      qty: 20000, suffix: " Sq.Ft.",  img: "/images/Shuttering Ply Board.png" },
  { name: "Scaffolding",               qty: 15000, suffix: " Sq.Ft.",  img: "/images/Scaffolding.png" },
  { name: "Steel Cutter Machine",      qty: 10,    suffix: " Pcs.",    img: "/images/Steel cutter Machine.png" },
  { name: "Cutter Machine",            qty: 15,    suffix: " Pcs.",    img: "/images/Cutter Machine.png" },
  { name: "Surface Concrete Vibrator", qty: 5,     suffix: " Pcs.",    img: "/images/surface concrete Vibrator machine.png" },
  { name: "Concrete Vibrator",         qty: 10,    suffix: " Pcs.",    img: "/images/concrete vibrator ma chine.png" },
  { name: "Construction Helmet",       qty: 50,    suffix: " Pcs.",    img: "/images/construction helmet.png" },
  { name: "Safety Harness",            qty: 25,    suffix: " Pcs.",    img: "/images/Safety Harness.png" },
  { name: "Safety Shoes",              qty: 40,    suffix: " Pairs",   img: "/images/Safety Shoes.png" },
  { name: "Industrial Radium Jacket",  qty: 60,    suffix: " Pcs.",    img: "/images/industrial radium jacket.png" },
  { name: "Boots",                     qty: 30,    suffix: " Pairs",   img: "/images/Boots.png" },
];

export default function EquipmentsSection() {

  const countRef = useRef(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.15,
  });

  return (
    <section
      id="equipments"
      className="relative py-24 md:py-32 overflow-hidden bg-[#071A35] border-t border-[#1A3560]"
    >

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0A3D91]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div ref={countRef} className="container-width relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] tracking-[0.22em] uppercase text-[11px] font-semibold font-sans">
              Infrastructure
            </span>
            <div className="w-8 h-[1.5px] bg-[#3B82F6]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Equipment{" "}
            <span className="text-[#3B82F6] italic font-light">Fleet</span>
          </h2>

          <p className="text-[#94A3B8] max-w-lg mx-auto mt-5 text-[14px] leading-relaxed font-sans">
            A well-maintained fleet of construction equipment and safety gear enabling
            efficient project execution at scale.
          </p>
        </motion.div>

        {/* Equipment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {equipments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ delay: (index % 5) * 0.07 }}
              whileHover={{ y: -5 }}
              className="group bg-[#0D2348] border border-[#1A3560] rounded-2xl overflow-hidden hover:border-[#3B82F6]/40 hover:shadow-[0_12px_40px_rgba(10,61,145,0.3)] transition-all duration-350 cursor-default"
            >
              {/* Image area */}
              <div className="aspect-[4/3] bg-[#081C3A] flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D91]/10 to-transparent" />
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-400 group-hover:scale-[1.07]"
                />
              </div>

              {/* Info area */}
              <div className="p-4 border-t border-[#1A3560]">
                <h3 className="text-white text-sm font-semibold font-sans mb-3 truncate group-hover:text-[#93C5FD] transition-colors duration-200">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-[#475569] uppercase text-[10px] tracking-wider font-sans font-medium">
                    Qty.
                  </span>
                  <span className="text-[#3B82F6] font-semibold text-sm font-sans">
                    {inView && (
                      <CountUp start={0} end={item.qty} duration={2.5} />
                    )}
                    {item.suffix}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}