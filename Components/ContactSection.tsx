"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";

const contactItems = [
  {
    icon: <MapPin size={20} />,
    title: "Registered Office",
    text: "136, 1st Floor, I-Thum Tower-B, Plot No. A - 40, Sector-62, Noida, Gautam Buddha Nagar - 201301 (U.P.)",
    href: "https://maps.google.com/?q=I-Thum+Tower+Noida",
  },
  {
    icon: <Mail size={20} />,
    title: "Email Us",
    text: "srpl.noida@gmail.com",
    href: "mailto:srpl.noida@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    title: "Call Us",
    text: "+91 99997 70910",
    href: "tel:+919999770910",
  },
  {
    icon: <Globe size={20} />,
    title: "Website",
    text: "www.shivaanyarealcon.in",
    href: "https://www.shivaanyarealcon.in",
  },
];

export default function ContactSection() {

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] via-[#3B82F6] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#EFF6FF] blur-[120px] opacity-80 pointer-events-none" />

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">

        {/* ── LEFT: INFO ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#0A3D91]" />
            <p className="uppercase tracking-[0.22em] text-[#0A3D91] text-xs font-semibold font-sans">
              Get In Touch
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-[#1E293B] leading-tight mb-3">
            Contact{" "}
            <span className="text-[#0A3D91] italic">Us</span>
          </h2>

          <div className="w-12 h-[3px] bg-[#3B82F6] rounded-full mb-7" />

          <p className="text-[#475569] text-[15px] leading-relaxed mb-12 font-sans max-w-sm">
            Whether you have a question about our services, projects, or would
            like to discuss a new opportunity — we'd love to hear from you.
          </p>

          {/* Contact Items */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-5 group cursor-pointer"
              >
                <div className="icon-box-blue flex-shrink-0 group-hover:bg-[#0A3D91] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest font-sans mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#1E293B] font-medium text-[15px] font-sans group-hover:text-[#0A3D91] transition-colors duration-200">
                    {item.text}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: FORM ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-lg shadow-[#0A3D91]/5 relative overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A3D91] to-[#3B82F6]" />

          <h3 className="text-2xl font-serif font-bold text-[#1E293B] mb-1">
            Send a Message
          </h3>
          <p className="text-[#94A3B8] text-sm font-sans mb-8">
            We'll get back to you within 24 hours.
          </p>

          <form className="space-y-5">
            {/* Name & Email row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider font-sans">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder=""
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider font-sans">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="form-input resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full justify-center text-sm py-4 gap-2 shadow-lg shadow-[#0A3D91]/20"
            >
              <Send size={15} />
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}