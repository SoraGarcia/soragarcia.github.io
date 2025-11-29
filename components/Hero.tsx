import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../constants.ts';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
             <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full"></div>
             <span className="text-stone-500 text-sm tracking-[0.2em] uppercase font-medium">
                Portfolio 2024
             </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-8 leading-[1.1] tracking-tight">
            {PROFILE.tagline.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3 md:mr-5">
                <span className={i === 1 || i === 4 ? "italic bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 animate-gradient-x" : "opacity-90"}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed font-light">
            I'm <span className="font-serif italic font-medium text-stone-900 relative inline-block">
                {PROFILE.name}
                <span className="absolute bottom-1 left-0 w-full h-2 bg-rose-200/50 -z-10 skew-x-12 transform"></span>
              </span>, a {PROFILE.role.toLowerCase()} creating digital warmth through 
              <span className="ml-2 inline-block px-2 py-0.5 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm text-indigo-900/80 text-base align-middle transform -rotate-2">
                glass & color
              </span>.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;