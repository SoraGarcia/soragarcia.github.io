import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Articles from './components/Articles.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
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

export default App;