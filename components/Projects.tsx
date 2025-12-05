import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Heart } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'plateshare',
    title: 'PlateShare',
    description: 'A food donation platform bridging the gap between surplus food and those in need. Features real-time donation tracking, volunteer coordination, and a warm community feed.',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    image: 'https://picsum.photos/id/42/800/600',
    link: '#',
    featured: true
  },
  {
    id: 'warmpaws',
    title: 'WarmPaws',
    description: 'Adoption agency management tool streamlining the process of finding forever homes for stray animals in Bangladesh.',
    tags: ['Tailwind', 'MERN Stack'],
    image: 'https://picsum.photos/id/237/800/600',
    link: '#'
  },
  // {
  //   id: 'eduvision',
  //   title: 'EduVision',
  //   description: 'An interactive learning management system designed for rural education centers.',
  //   tags: ['React', 'Firebase', 'Chart.js'],
  //   image: 'https://picsum.photos/id/20/800/600',
  //   link: '#'
  // }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-peach-100/30 dark:bg-black/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-deepTeal-900 dark:text-cream mb-4">Featured Projects</h2>
          <p className="text-deepTeal-600/70 dark:text-gray-400">Code crafted with purpose and care.</p>
        </div>

        {/* Featured Project: PlateShare */}
        <div className="mb-20">
          {projects.filter(p => p.featured).map((project) => (
            <motion.div 
              key={project.id}
              className="group relative bg-white dark:bg-deepTeal-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-peach-200 dark:border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                   <div className="absolute inset-0 bg-deepTeal-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                     <Heart size={200} />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-roseGold animate-pulse" />
                    <span className="text-roseGold font-semibold tracking-wider text-xs uppercase">Featured Project</span>
                  </div>
                  
                  <h3 className="font-serif text-4xl font-bold text-deepTeal-900 dark:text-white mb-4 group-hover:text-roseGold transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-sage-100 dark:bg-white/10 text-deepTeal-700 dark:text-sage-300 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 bg-deepTeal-500 hover:bg-deepTeal-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-deepTeal-500/20 flex items-center gap-2"
                    >
                      View Details <ExternalLink size={16} />
                    </button>
                    <a href="https://github.com/effataratauhida/PlateShare-Client-Side" className="px-6 py-3 border border-deepTeal-200 dark:border-white/20 hover:bg-deepTeal-50 dark:hover:bg-white/5 rounded-xl text-deepTeal-700 dark:text-white font-medium transition-colors">
                      Source Code
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                     <p className="font-serif italic text-deepTeal-400 dark:text-gray-500">"Donate. Connect. Care."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, idx) => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-deepTeal-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
               <div className="h-48 overflow-hidden relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button onClick={() => setSelectedProject(project)} className="p-2 bg-white rounded-full text-deepTeal-900 hover:text-roseGold"><ExternalLink size={20} /></button>
                   <a href="#" className="p-2 bg-white rounded-full text-deepTeal-900 hover:text-roseGold"><Github size={20} /></a>
                 </div>
               </div>
               <div className="p-6">
                 <h3 className="font-serif text-2xl font-bold text-deepTeal-900 dark:text-white mb-2">{project.title}</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-roseGold font-medium bg-roseGold/10 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
{/* 
        <div className="mt-12 text-center">
          <button className="text-deepTeal-600 dark:text-peach-200 font-medium hover:tracking-wide transition-all border-b border-roseGold pb-1">
            View All Projects in Archive
          </button>
        </div> */}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deepTeal-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white dark:bg-deepTeal-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-roseGold hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-3xl font-serif text-white font-bold">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-peach-100 dark:bg-white/10 text-deepTeal-800 dark:text-peach-200 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {selectedProject.description}
                  <br/><br/>
                  This project was built with a focus on user experience and scalability. The architecture ensures high performance even with poor internet connectivity, common in target deployment areas.
                </p>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-deepTeal-500 text-white rounded-xl font-medium hover:bg-deepTeal-600 transition-colors">
                    Live Demo
                  </button>
                  <button className="flex-1 py-3 border border-deepTeal-200 text-deepTeal-700 dark:text-white rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    GitHub Repo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;