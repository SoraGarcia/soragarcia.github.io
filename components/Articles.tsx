import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants.ts';

const Articles: React.FC = () => {
  return (
    <section id="writing" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 italic">
            Journal
          </h2>
        </motion.div>

        <div className="space-y-4">
          {ARTICLES.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link || '#'}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block group p-8 -mx-8 rounded-3xl transition-all duration-300 border border-transparent hover:border-white/40 hover:bg-white/40 hover:backdrop-blur-md hover:shadow-xl hover:shadow-indigo-900/5"
            >
              <div className="flex flex-col gap-2">
                 <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-medium">
                  <span className="text-stone-400 group-hover:text-indigo-400 transition-colors">{article.date}</span>
                </div>
                
                <h4 className="text-xl md:text-2xl text-stone-900 group-hover:text-indigo-900 transition-colors font-serif">
                  {article.title}
                </h4>
                
                <p className="text-stone-600 font-light group-hover:text-stone-700 transition-colors max-w-xl">
                    {article.excerpt}
                </p>
                
                <div className="mt-4 flex items-center text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Read Article <span className="ml-1 text-rose-500">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;