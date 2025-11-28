import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

// Components
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Hero from './components/sections/hero';
import FeaturedProjects from './components/sections/featured-projects';
import GlowCard from './components/ui/glow-card';
import ProjectDetail from './components/layout/projectdetail';
import TechBadge from './components/ui/techbadge';
// Data
import { ABOUTBRIEF, PROJECTS, SKILLS } from './data/content';
import CustomCursor from './components/ui/custom-cursor';
import FadeInWhenVisible from './components/ui/fadein';
import Goals from './components/sections/goals';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

   const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveTab('project-detail'); // Switch to a specialized view state
    window.scrollTo(0, 0); // Scroll to top when navigating
  };
  
  const handleViewAllClick = () => {
    setActiveTab('projects');
    window.scrollTo(0, 0); // Scroll to top when navigating
  }

  return (
    <div className="min-h-screen bg-black font-sans text-gray-200 selection:bg-primary-500/30 selection:text-primary-200 overflow-x-hidden cursor-default">
      <CustomCursor />
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-black via-black/90 to-transparent"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="mx-auto max-w-4xl px-6 pb-20 min-h-[80vh]">
        
        {activeTab === 'home' && (
          <div key="home" className="flex flex-col gap-8">
            <Hero />
            <div className="border-t border-gray-800/50" />
            <FeaturedProjects 
            onProjectClick={handleProjectClick}
            onViewAllClick={handleViewAllClick}
            />
          </div>
        )}

        {activeTab === 'projects' && (
          <div key="projects" className="py-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-8">All Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2 cursor-pointer">
              {[...PROJECTS].map((project, idx) => (
                <FadeInWhenVisible key={idx} delay={`${idx * 100}ms`}>
                <GlowCard key={idx} delay={`${idx * 100}ms`} onClick={()=> handleProjectClick(project)}
                    className="flex h-full flex-col hover:border-primary-500/30">
                   <div className="mb-auto">
                     <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                     <p className="text-gray-400 text-sm">{project.description}</p>
                   </div>
                   <div className="mt-6 flex gap-3">
                       {project.tech.map((t) => (
                          <TechBadge key={t} name={t} />
                       ))}
                     </div>
                </GlowCard>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'project-detail' && selectedProject && (
            <ProjectDetail 
                project={selectedProject} 
                onBack={() => setActiveTab('projects')} 
            />
        )}

        {activeTab === 'about' && (
           <div key="about" className="py-12 max-w-2xl mx-auto animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>
            <div className="prose prose-invert prose-gray animate-fade-up text-gray-400">
              {ABOUTBRIEF.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 mb-6">
                {paragraph}
              </p>
              ))}
              <div className="my-8 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-white text-[20px] font-semibold mb-4 flex items-center gap-2"><Cpu size={18}/> Tech Stack</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                   <div className="flex gap-3">
                       {SKILLS[0].tech.map((t) => (
                          <TechBadge key={t} name={t} />
                       ))}
                     </div>
                </div>
              </div>
            </div>
           </div>
        )}

        {/* You can create a similar component for Guestbook.jsx and import it */}
        {activeTab === 'goals' && (
          <div key="goals" className="py-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700/50 pb-2">Bucket List</h1>
                <p className="text-lg text-gray-400 mb-8">
                    These are the list I want to achieve once in my life:
                </p>
                <Goals />
                </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default App;
