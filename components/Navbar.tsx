import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <div 
          className={`
            flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
            ${isScrolled 
              ? 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/5 w-full max-w-2xl' 
              : 'bg-transparent w-full max-w-7xl'
            }
          `}
        >
          <a href="#" className="font-serif text-lg tracking-wide z-50 relative transition-colors text-stone-900 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-rose-600">
            {PROFILE.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-600 z-50 relative hover:text-stone-900 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 z-40 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/50 flex flex-col items-center justify-center space-y-8 md:hidden shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-rose-600 italic transition-all"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;