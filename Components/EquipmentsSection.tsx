"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

export default function EquipmentsSection() {
  const equipments = [
    { name: "Mixer Lift Machine", qty: "03 Pcs.", img: "/images/Mixer Lift Machine.png" },
    { name: "Mixer Machine", qty: "04 Pcs.", img: "/images/Mixer Machine.png" },
    { name: "Lift Machine", qty: "05 Pcs.", img: "/images/Lift Machine.png" },
    { name: "Prop Jack", qty: "2000 Pcs.", img: "/images/Prop Jack.png" },
    { name: "Shuttering Ply Board", qty: "20000 Sq. Ft.", img: "/images/Shuttering Ply Board.png" },
    { name: "Scaffolding", qty: "15000 Sq. Ft.", img: "/images/Scaffolding.png" },
    { name: "Steel Cutter Machine", qty: "10 Pcs.", img: "/images/Steel cutter Machine.png" },
    { name: "Cutter Machine", qty: "15 Pcs.", img: "/images/Cutter Machine.png" },
    { name: "Surface Concrete Vibrator", qty: "05 Pcs.", img: "/images/surface concrete Vibrator machine.png" },
    { name: "Concrete Vibrator", qty: "10 Pcs.", img: "/images/concrete vibrator ma chine.png" },
    { name: "Construction Helmet", qty: "50 Pcs.", img: "/images/construction helmet.png" },
    { name: "Safety Harness", qty: "25 Pcs.", img: "/images/Safety Harness.png" },
    { name: "Safety Shoes", qty: "40 Pairs", img: "/images/Safety Shoes.png" },
    { name: "Industrial Radium Jacket", qty: "60 Pcs.", img: "/images/industrial radium jacket.png" },
    { name: "Boots", qty: "30 Pairs", img: "/images/Boots.png" }
  ];

  return (
    <section id="equipments" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 border-t border-[#1e293b] overflow-hidden bg-blueprint">
      
      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-10 top-20 text-[#00E5FF] opacity-[0.02] pointer-events-none"
      >
        <Hammer size={600} strokeWidth={1} />
      </motion.div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">Infrastructure</span>
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Equipment <span className="text-blue-gradient italic font-light drop-shadow-md">Fleet</span>
          </h2>
        </div>
        
        {/* EQUIPMENT CARDS - MASONRY/GRID MIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {equipments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className="group bg-[#0f172a] border border-[#1e293b] overflow-hidden hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden bg-[#1e293b]/30 p-6 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Hammer size={80} />
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition duration-700 relative z-10"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 border-t border-[#1e293b]">
                <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#00E5FF] transition-colors truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs tracking-wider uppercase">Quantity</span>
                  <span className="text-[#00E5FF] font-medium text-sm">{item.qty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
