"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Map } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#020617]/80 overflow-hidden bg-blueprint">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-[#1e293b] to-transparent opacity-30 pointer-events-none"></div>

      {/* Huge Faint Icon Background - Animated */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.01, 0.03, 0.01] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 text-[#00E5FF] pointer-events-none"
      >
        <Map size={600} strokeWidth={1} />
      </motion.div>

      {/* Radar Pulse Rings */}
      <motion.div 
        animate={{ scale: [0.5, 2], opacity: [0.2, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
        className="absolute left-[10%] bottom-[10%] w-[400px] h-[400px] rounded-full border border-[#00E5FF]/30 pointer-events-none"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* INFO SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[#00E5FF] tracking-[0.2em] text-sm uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
            Contact <span className="text-blue-gradient italic font-light drop-shadow-md">Us</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-12 font-light">
            Whether you have a question about our services, projects, or anything else, our team is ready to answer all your inquiries.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#1e293b] flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#020617] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all shrink-0 bg-[#020617]">
                <MapPin size={20} />
              </div>
              <div className="bg-[#020617]/50 backdrop-blur-sm p-2 -m-2 rounded">
                <h4 className="text-white font-serif text-xl mb-2">Registered Office</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  136, 1st Floor, I-Thum Tower-B,<br />
                  Plot No. A-40, Sector-62, Noida<br />
                  Gautam Buddha Nagar – 201301, U.P.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#1e293b] flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#020617] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all shrink-0 bg-[#020617]">
                <Mail size={20} />
              </div>
              <div className="bg-[#020617]/50 backdrop-blur-sm p-2 -m-2 rounded">
                <h4 className="text-white font-serif text-xl mb-2">Email Us</h4>
                <a href="mailto:srpl.noida@gmail.com" className="text-gray-400 font-light hover:text-[#00E5FF] transition-colors">
                  srpl.noida@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#1e293b] flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#020617] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all shrink-0 bg-[#020617]">
                <Phone size={20} />
              </div>
              <div className="bg-[#020617]/50 backdrop-blur-sm p-2 -m-2 rounded">
                <h4 className="text-white font-serif text-xl mb-2">Call Us</h4>
                <a href="tel:+919999770910" className="text-gray-400 font-light hover:text-[#00E5FF] transition-colors">
                  +91 99997 70910
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f172a]/90 backdrop-blur-md border border-[#1e293b] p-8 md:p-12 relative"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#00E5FF] -m-[1px] shadow-[0_0_15px_rgba(0,229,255,0.3)]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#00E5FF] -m-[1px] shadow-[0_0_15px_rgba(0,229,255,0.3)]"></div>

          <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            {/* Replace YOUR_ACCESS_KEY_HERE with the key you get from web3forms.com */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Contact Request from Shivaanya Realcon Website" />
            
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-[#1e293b] py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-[#1e293b] py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-[#1e293b] py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#00E5FF] text-[#020617] font-medium py-4 mt-4 hover:bg-[#80f2ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
            >
              Submit Request
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
