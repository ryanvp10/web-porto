import React from 'react';
import { FolderRoot, ArrowUpRight} from 'lucide-react';
import GlowCard from '../ui/glow-card.jsx';
import { PROJECTS } from '../../data/content';

const FeaturedProjects = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
        <FolderRoot className="text-primary-400" size={24}/>
        Featured Projects
      </h2>
      <a href="#" className="text-sm text-primary-400 hover:text-primary-300 hover:underline underline-offset-4">
        View all projects
      </a>
    </div>
    
    <div className="grid gap-4 sm:grid-cols-2">
      {PROJECTS.slice(0, 2).map((project, idx) => (
        <GlowCard key={idx} delay={project.delay} className="group flex h-full flex-col justify-between hover:border-gray-700 transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-100 group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight size={18} className="text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700/50 transition-colors hover:bg-gray-700 hover:text-white">
                {t}
              </span>
            ))}
          </div>
        </GlowCard>
      ))}
    </div>
  </div>
);

export default FeaturedProjects;