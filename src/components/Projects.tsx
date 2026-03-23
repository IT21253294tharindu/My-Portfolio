import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ExternalLink, Github, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: 'Fabric Management ERP System',
    type: 'Client Project',
    image: '/assets/projects/fabric/1.png',
    images: ['/assets/projects/fabric/1.png', '/assets/projects/fabric/new_2.png', '/assets/projects/fabric/3.png', '/assets/projects/fabric/4.png'],
    description: 'Designed backend services for inventory lifecycle management including stock intake, allocation, and sales deduction workflows.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    highlights: [
      'Developed modular RESTful APIs supporting transactional business processes.',
      'Modeled MongoDB collections for stock tracking and order lifecycle management, reducing unnecessary data duplication.',
      'Implemented business validation rules to prevent inconsistent stock updates and maintain accurate inventory levels.',
      'Structured backend logic with controller-service separation, improving maintainability and future scalability.',
      'Delivered a stable backend solution aligned with client operational requirements.',
    ],
  },
  {
    title: 'Quit Smoke – Mobile Application',
    type: 'Client Project',
    image: '/assets/projects/smoke/1.png',
    images: ['/assets/projects/smoke/1.png', '/assets/projects/smoke/2.png', '/assets/projects/smoke/3.png', '/assets/projects/smoke/4.png', '/assets/projects/smoke/5.png'],
    description: 'Developed cross-platform mobile application supporting user activity tracking and smoking reduction analytics.',
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'OAuth 2.0'],
    highlights: [
      'Designed structured Firestore data models for user progress tracking.',
      'Implemented secure authentication using Firebase Authentication with Google Sign-In (OAuth 2.0 flow).',
      'Managed real-time data updates and user-specific state management.',
      'Implemented backend-driven data validation and structured query handling within Firebase services.',
      'Delivered a fully functional backend-integrated mobile solution through direct client collaboration.',
    ],
  },
  {
    title: 'AI-Based Customer Sentiment Classification System',
    type: 'Academic & Personal Project',
    image: '/assets/projects/ai/1.png',
    images: ['/assets/projects/ai/1.png', '/assets/projects/ai/2.png', '/assets/projects/ai/3.png', '/assets/projects/ai/4.png'],
    description: 'Designed and trained supervised ML models including Multinomial Naïve Bayes, Random Forest, SVM, and Decision Tree for sentiment classification.',
    tech: ['Python', 'FastAPI', 'Node.js', 'Scikit-learn', 'Machine Learning'],
    highlights: [
      'Performed text preprocessing and TF-IDF feature extraction to improve model accuracy.',
      'Evaluated models using precision, recall, F1-score, and accuracy metrics and selected optimal model for deployment.',
      'Developed a FastAPI-based inference service to expose trained ML models via REST APIs.',
      'Integrated ML services with Node.js backend for real-time feedback processing.',
      'Implemented structured request validation and error handling for reliable API communication.',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 relative bg-zinc-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <FolderGit2 className="text-emerald-400" size={40} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div
                  onClick={() => handleOpenProject(project)}
                  className="group relative p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 transition-all overflow-hidden flex flex-col h-full shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-emerald-400 font-mono text-sm mb-2">{project.type}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 text-zinc-400">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProject(project);
                        }}
                        className="hover:text-emerald-400 transition-colors p-1"
                      >
                        <Eye size={20} />
                      </button>
                      <a href="#" onClick={(e) => e.stopPropagation()} className="hover:text-white transition-colors p-1"><Github size={20} /></a>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-zinc-500 flex items-start gap-2">
                        <span className="text-emerald-500/50 mt-1 shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-800/50 relative z-10">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/50 text-xs font-mono text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-zinc-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] w-full h-[90vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/50 text-white hover:bg-zinc-950 transition-colors border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 relative group overflow-hidden bg-zinc-950/50 flex items-center justify-center p-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      src={selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images[currentImageIndex] : selectedProject.image}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
                          }}
                          className="p-3 rounded-full bg-zinc-950/70 text-white hover:bg-zinc-900 transition-colors border border-white/10 backdrop-blur-sm"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
                          }}
                          className="p-3 rounded-full bg-zinc-950/70 text-white hover:bg-zinc-900 transition-colors border border-white/10 backdrop-blur-sm"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-zinc-950/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === i ? 'bg-emerald-400 w-6' : 'bg-white/50 hover:bg-white/80'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 p-8 flex flex-col overflow-y-auto bg-zinc-900/50 border-l border-white/5">
                  <div className="text-emerald-400 font-mono text-sm mb-2">{selectedProject.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors text-sm w-full"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

