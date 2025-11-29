import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants.ts';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
             <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 italic">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-br first-letter:from-indigo-600 first-letter:to-rose-500">
                {PROFILE.about}
              </p>
              <p>
                My approach combines technical precision with artistic intuition. I strive to build products that not only work flawlessly but also evoke a sense of calm and clarity.
              </p>
            </div>
            
            <div className="mt-10">
               <a href="#contact" className="group inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors">
                 <span className="border-b-2 border-transparent bg-gradient-to-r from-indigo-200 to-rose-200 bg-[length:0%_100%] bg-no-repeat group-hover:bg-[length:100%_100%] transition-all duration-500 ease-out pb-1">Get in touch</span>
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 md:order-2 relative h-[500px] w-full"
          >
            {/* Glass Backdrop */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-[2rem] transform translate-x-6 translate-y-6 border border-white/40 shadow-xl"></div>
            
            {/* Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-lg border border-white/20">
                <img 
                src="https://picsum.photos/800/1000?random=10" 
                alt="Profile abstract" 
                className="w-full h-full object-cover saturate-[0.7] contrast-[0.9] hover:saturate-100 hover:contrast-100 transition-all duration-700"
                />
                {/* Subtle colorful overlay that disappears on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-rose-500/20 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;