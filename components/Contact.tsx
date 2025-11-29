import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { PROFILE, SOCIALS } from '../constants.ts';

const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'twitter / x': return <Twitter size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'instagram': return <Instagram size={20} />;
      default: return <ArrowRight size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 italic">
            Let's create together.
          </h2>
          <p className="text-xl text-stone-600 font-light mb-12 max-w-lg mx-auto leading-relaxed">
             I am currently open to new opportunities and collaborations.
          </p>
          
          <a 
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center space-x-3 bg-stone-900 text-stone-50 px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-stone-900/10 relative overflow-hidden group"
          >
            {/* Gradient background on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            <span className="font-serif italic relative z-10 group-hover:text-white">Say Hello</span>
            <ArrowRight size={18} className="relative z-10 group-hover:text-white" />
          </a>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-stone-200/60">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex items-center space-x-2 text-stone-500 hover:text-indigo-600 transition-colors text-sm font-medium group"
              >
                <span className="group-hover:-translate-y-1 transition-transform duration-300 bg-indigo-50 p-2 rounded-full">{getIcon(social.icon)}</span>
                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <footer className="mt-24 text-stone-400 text-sm font-light">
          &copy; {new Date().getFullYear()} {PROFILE.name}. Crafted with <span className="text-rose-400">♥</span> & code.
        </footer>
      </div>
    </section>
  );
};

export default Contact;