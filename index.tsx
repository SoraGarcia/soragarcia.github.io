import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowDown, ArrowUpRight, ArrowRight, 
  Github, Twitter, Linkedin, Instagram 
} from 'lucide-react';

// ==========================================
// 1. DATA & CONSTANTS (Easily Configurable)
// ==========================================

const PROFILE = {
  name: "Alex Chen",
  role: "Product Designer",
  tagline: "Crafting digital experiences where aesthetics meet function.",
  about: "I am a multidisciplinary creator based in San Francisco. With over 8 years of experience in the intersection of design and technology, I help brands tell their stories through immersive web experiences and intuitive interfaces. I believe in the power of minimalism—removing the unnecessary so the significant may speak.",
  email: "hello@example.com"
};

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    id: "p1",
    title: "Lumina Interface",
    category: "UI/UX Design",
    description: "A comprehensive design system for a fintech dashboard, focusing on data clarity.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: "p2",
    title: "Apex Architecture",
    category: "Web Development",
    description: "Minimalist portfolio website built for an award-winning architectural firm in Tokyo.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: "p3",
    title: "Mono Focus",
    category: "Mobile App",
    description: "A productivity application designed to reduce cognitive load through typographic hierarchy.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#"
  },
  {
    id: "p4",
    title: "Ethereal Sound",
    category: "Brand Identity",
    description: "Rebranding campaign for a high-end audio equipment manufacturer.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

const ARTICLES = [
  {
    id: "a1",
    title: "The Return of Skeuomorphism in Modern UI",
    date: "Oct 24, 2023",
    excerpt: "Exploring how depth and texture are making a subtle comeback in digital interfaces.",
    link: "#"
  },
  {
    id: "a2",
    title: "Designing for Accessibility First",
    date: "Sep 12, 2023",
    excerpt: "Why inclusive design leads to better products for everyone, not just those with disabilities.",
    link: "#"
  },
  {
    id: "a3",
    title: "The Psychology of Dark Mode",
    date: "Aug 05, 2023",
    excerpt: "Understanding user preference and the visual ergonomics of low-light interfaces.",
    link: "#"
  }
];

const SOCIALS = [
  { name: "Twitter / X", url: "#", icon: "twitter" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Instagram", url: "#", icon: "instagram" },
];

// ==========================================
// 2. COMPONENTS
// ==========================================

// --- Navbar Component ---
const Navbar = () => {
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
              ? 'bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/5 w-full max-w-2xl' 
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

// --- Hero Component ---
const Hero = () => {
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

// --- About Component ---
const About = () => {
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

// --- Projects Component ---
const Projects = () => {
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

// --- Articles Component ---
const Articles = () => {
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

// --- Contact Component ---
const Contact = () => {
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

// ==========================================
// 3. MAIN APP & RENDER
// ==========================================

const App = () => {
  return (
    <div className="bg-[#fcfaf9] text-stone-900 min-h-screen relative overflow-hidden selection:bg-fuchsia-200 selection:text-fuchsia-900">
      
      {/* Background Ambience - Vibrant Aurora / Glass Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] bg-rose-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
      
      {/* Subtle Noise Texture for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

// Mount the App
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);