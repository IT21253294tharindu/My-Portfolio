import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-zinc-950 border-t border-white/5 pt-32 pb-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Big CTA Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-emerald-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 flex flex-col items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
              }}
              className="flex"
            >
              {"Let's work".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={char === " " ? "w-4 md:w-6 lg:w-8" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.6 },
                },
              }}
              className="flex text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 pb-2"
            >
              {"together.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MagneticButton
              href="https://wa.me/94760457872?text=Hello%2c%20I'm%20interested%20in%20discussing%20a%20project%20with%20you!"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in touch</span>
              <ArrowUpRight className="relative z-10 group-hover:text-white transition-colors duration-300" size={20} />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pt-16 border-t border-white/10">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6 group w-max">
              <span className="text-emerald-400 group-hover:text-cyan-400 transition-colors">T</span>
              <span className="group-hover:text-zinc-300 transition-colors">Rathnayaka</span>
            </a>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
              Software Engineer specializing in backend development, scalable APIs, and AI integration. Building robust solutions for modern problems.
            </p>
            <div className="flex items-center gap-4">
              <MagneticButton
                href="https://github.com/IT21253294tharindu"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <Github size={20} />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/tharindu-naveen-69a65724b/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <Linkedin size={20} />
              </MagneticButton>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:tharindunavi1@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  tharindunavi1@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/94760457872" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                    <Phone size={16} />
                  </div>
                  +94 760457872
                </a>
              </li>
              <li className="text-zinc-400 flex items-center gap-3 group cursor-default">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                  <MapPin size={16} />
                </div>
                Kurunegala, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Tharindu Naveen Rathnayaka. All rights reserved.
          </p>
          <div className="text-zinc-500 text-sm flex items-center gap-2">
            Designed & Built with <span className="text-emerald-500 animate-pulse">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
