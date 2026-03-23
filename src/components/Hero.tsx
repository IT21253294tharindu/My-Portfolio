import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Download, MapPin, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Glow Effects */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-56 h-64 md:w-64 md:h-72 rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-2xl shadow-emerald-500/20"
            >
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-zinc-900 border-4 border-zinc-950">
                <img
                  src="/profile.jpg"
                  alt="Tharindu Naveen"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/tharindu/400/400";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-400 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          >
            Tharindu Naveen
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
          >
            Software Engineer
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-mono"
        >
          &gt; Backend Focus | Node.js | Python | System Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <MagneticButton
            href="https://drive.google.com/file/d/1Ju6kq3SakO8RxDGlEQ6GIDuYySzA8BtL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Download size={18} />
            Download CV
          </MagneticButton>
          <MagneticButton
            href="https://github.com/IT21253294tharindu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 transition-colors"
          >
            <Github size={18} />
            GitHub
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/tharindu-naveen-69a65724b/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-mono"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            Kurunegala, Sri Lanka
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            +94 760457872
          </div>
        </motion.div>
      </div>
    </section>
  );
}
