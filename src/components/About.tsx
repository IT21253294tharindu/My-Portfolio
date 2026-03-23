import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Engineering <span className="text-emerald-400">Scalable</span> Solutions
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="text-zinc-400 text-lg leading-relaxed mb-6"
            >
              I am a Software Engineer (Backend Focused) with 2+ years of combined industry and freelance experience building RESTful APIs and database-driven systems using Node.js and Python.
            </motion.p>
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="text-zinc-400 text-lg leading-relaxed mb-6"
            >
              Experienced in backend system design, business logic implementation, and AI service integration. I have a strong foundation in data structures, system debugging, and scalable API development.
            </motion.p>
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Passionate about writing clean, maintainable code and solving real-world problems through intelligent backend solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-2 flex items-center gap-2 text-zinc-500 font-mono text-sm">
                  <Terminal size={14} />
                  <span>tharindu_profile.json</span>
                </div>
              </div>
              <pre className="text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`{
  "name": "Tharindu Naveen Rathnayaka",
  "role": "Software Engineer",
  "focus": "Backend Development",
  "experience": "2+ Years",
  "location": "Kurunegala, Sri Lanka",
  "interests": [
    "System Design",
    "AI Integration",
    "Scalable APIs",
    "Clean Code"
  ]
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
