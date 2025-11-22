import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

// Components
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Hero from './components/sections/hero';
import FeaturedProjects from './components/sections/featured-projects';
import BlogSection from './components/sections/blog-section';
import GlowCard from './components/ui/glow-card';

// Data
import { PROJECTS } from './data/content';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-black font-sans text-gray-200 selection:bg-primary-500/30 selection:text-primary-200 overflow-x-hidden">
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-black via-black/90 to-transparent"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="mx-auto max-w-4xl px-6 pb-20 min-h-[80vh]">
        
        {activeTab === 'home' && (
          <div key="home" className="flex flex-col gap-20">
            <Hero />
            <div className="border-t border-gray-800/50" />
            <FeaturedProjects />
            <div className="border-t border-gray-800/50" />
            <BlogSection />
          </div>
        )}

        {activeTab === 'projects' && (
          <div key="projects" className="py-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-8">All Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2">
              {[...PROJECTS, ...PROJECTS].map((project, idx) => (
                <GlowCard key={idx} delay={`${idx * 100}ms`} className="flex h-full flex-col hover:border-primary-500/30">
                   <div className="mb-auto">
                     <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                     <p className="text-gray-400 text-sm">{project.description}</p>
                   </div>
                   <div className="mt-6 flex gap-2 text-xs text-primary-300/80 font-mono">
                     {project.tech.join(' • ')}
                   </div>
                </GlowCard>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
           <div key="about" className="py-12 max-w-2xl mx-auto animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>
            <div className="prose prose-invert prose-gray animate-fade-up text-gray-400">
              <p className="text-lg text-gray-300 mb-6">
                I'm Christopher, a developer who loves building things that live on the internet.
              </p>
              <div className="my-8 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Cpu size={18}/> Tech Stack</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                   <div>• JavaScript (ES6+)</div>
                   <div>• React & Next.js</div>
                   <div>• TypeScript</div>
                   <div>• Node.js</div>
                   <div>• PostgreSQL</div>
                   <div>• AWS</div>
                </div>
              </div>
            </div>
           </div>
        )}

        {/* You can create a similar component for Guestbook.jsx and import it */}
        {activeTab === 'guestbook' && (
          <div className="text-center text-gray-400 py-20">Guestbook Component Here</div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;
