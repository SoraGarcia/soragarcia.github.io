import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 flex flex-col items-center text-center"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-4 italic">
          Selected Works
        </h2>
        <span className="w-16 h-1.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-rose-200 rounded-full mb-6 blur-[1px]"></span>
        <p className="text-stone-500 font-light">
          A collection of digital craftsmanship
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Glassmorphism Card Container */}
            <div className="relative overflow-hidden mb-6 rounded-2xl aspect-[4/3] transition-all duration-500 shadow-sm hover:shadow-2xl border border-white/50">
              
              {/* Image with subtle coloring */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 saturate-[0.85] contrast-[1.05]"
              />
              
              {/* Colored Overlay (Glass tint) */}
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Highlight Glare */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </div>
            
            <div className="flex justify-between items-baseline px-4 py-3 rounded-xl hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-300">
              <div>
                <h3 className="text-2xl font-serif text-stone-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-rose-700 transition-all italic">
                  {project.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                 <span className="text-xs font-bold text-indigo-400/80 uppercase tracking-widest bg-indigo-50/50 px-2 py-1 rounded-md backdrop-blur-sm">
                    {project.category}
                </span>
                <ArrowUpRight size={18} className="text-stone-400 group-hover:text-indigo-600 transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;