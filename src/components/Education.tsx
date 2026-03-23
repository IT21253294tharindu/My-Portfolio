import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16" style={{ perspective: "1000px" }}>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="text-emerald-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
            </div>

            <TiltCard>
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden group hover:border-emerald-500/30 transition-colors shadow-lg hover:shadow-emerald-500/10">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-colors" />
                
                <div className="text-emerald-400 font-mono text-sm mb-2 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full w-max">
                  2021 – 2025
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                  BSc (Hons) in Information Technology
                </h3>
                <p className="text-lg text-zinc-300 mb-4">
                  Specializing in Software Engineering
                </p>
                <p className="text-zinc-400 font-medium">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <div className="mt-6 relative inline-flex items-center justify-center p-[1px] rounded-lg overflow-hidden">
                  <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3b82f6_50%,transparent_100%)]" />
                  <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-sm text-zinc-300 w-full h-full">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                    Second Class Upper Division
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="text-blue-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Research Publications</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-colors group">
                <div className="text-blue-400 font-mono text-xs mb-3 flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">ICICT 2024</span>
                  Conference
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  Cognitive Complexity Analysis & Optimization tool for java
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-colors group">
                <div className="text-blue-400 font-mono text-xs mb-3 flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">ICECET 2025</span>
                  Conference
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  Leveraging Multi Modal AI Capabilities to Enhance Vehicle Insurance Claiming Process
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
