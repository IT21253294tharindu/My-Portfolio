import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Freelance Software Engineer',
    company: 'Self-Employed',
    period: '02/2025 – Present',
    responsibilities: [
      'Developing and delivering full-stack web and mobile applications for various clients.',
      'Designing scalable backend architectures using Node.js, Express, and MongoDB.',
      'Collaborating directly with clients to gather requirements and provide technical solutions.',
      'Managing project lifecycles from conception to deployment and maintenance.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'CEEE Technologies',
    period: '09/2024 – 02/2025',
    responsibilities: [
      'Designed and implemented modular RESTful APIs using Node.js and Express.js supporting student management and CRM systems.',
      'Developed backend modules handling faculty management, payment tracking, finance workflows, and reporting features.',
      'Designed and optimized MongoDB schemas to improve data consistency and reduce redundant database queries.',
      'Implemented structured validation layers and service-level logic to maintain separation of concerns.',
      'Integrated frontend applications with backend APIs and performed endpoint validation using Postman.',
      'Diagnosed and resolved backend production issues, improving API stability and reducing recurring runtime errors.',
      'Collaborated in Agile sprint planning, task estimation, and peer code reviews.',
      'Mentored interns on backend architecture, API structuring, and coding best practices.',
    ],
  },
  {
    role: 'Intern Software Engineer',
    company: 'CEEE Technologies',
    period: '03/2024 – 09/2024',
    responsibilities: [
      'Contributed to backend API development for CRM systems using Node.js and MongoDB.',
      'Implemented CRUD operations and structured business logic modules.',
      'Assisted in schema updates and query implementation to support new feature requirements.',
      'Participated in debugging and deployment preparation processes.',
      'Gained hands-on exposure to production-level backend workflows.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <Briefcase className="text-emerald-400" size={40} />
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent -translate-x-1/2 z-0"
          />
          {/* Background subtle line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 w-0.5 h-full bg-zinc-800 -translate-x-1/2 z-[-1]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(24,24,27,1)] z-10">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-max">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-emerald-500/50 mt-1.5 shrink-0">▹</span>
                      <span>{resp}</span>
                    </li>
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
