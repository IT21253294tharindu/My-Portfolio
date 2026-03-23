import React from 'react';
import { motion } from 'motion/react';
import { Database, Layout, Server, Settings, Shield, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Server size={24} className="text-emerald-400" />,
    skills: ['JavaScript', 'Python', 'Java'],
  },
  {
    title: 'Backend',
    icon: <Settings size={24} className="text-blue-400" />,
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design'],
  },
  {
    title: 'Databases',
    icon: <Database size={24} className="text-yellow-400" />,
    skills: ['MongoDB', 'SQL', 'Schema Design'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={24} className="text-purple-400" />,
    skills: ['React.js', 'React Native', 'Flutter'],
  },
  {
    title: 'Tools & Auth',
    icon: <Shield size={24} className="text-red-400" />,
    skills: ['Git', 'Postman', 'Docker (Basics)', 'Agile/Scrum', 'Firebase Auth', 'OAuth 2.0'],
  },
  {
    title: 'ML Exposure',
    icon: <Cpu size={24} className="text-cyan-400" />,
    skills: ['Scikit-learn', 'Supervised Learning Models', 'TF-IDF'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-zinc-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Technical Skills</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and intelligent backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.li 
                      key={skill} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) + 0.2 }}
                      className="flex items-center gap-2 text-zinc-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
