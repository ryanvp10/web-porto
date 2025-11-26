import React from 'react';
import { FolderRoot, ArrowUpRight} from 'lucide-react';
import GlowCard from '../ui/glow-card.jsx';
import { PROJECTS } from '../../data/content';
import TechBadge from '../ui/techbadge.jsx';
import FadeInWhenVisible from '../ui/fadein.jsx';
import SketchyUnderline from '../ui/sketcyunderline.jsx';

const FeaturedProjects = ({onProjectClick, onViewAllClick}) => (
  <div className="space-y-8">
    <FadeInWhenVisible>
    <div className="flex items-center justify-between">
      <h2 className="text-4xl font-bold text-gray-100 flex items-center gap-2">
        <FolderRoot className="text-primary-400" size={28}/>
        Recent
        <SketchyUnderline>
        <span className="text-primary-400">
          Projects
          </span>
          </SketchyUnderline>
      </h2>
      <button 
          onClick={onViewAllClick} 
          className="cursor-pointer text-sm text-primary-400 hover:text-primary-300 hover:underline underline-offset-4"
        >
          View all projects
        </button>
    </div>
    </FadeInWhenVisible>
    
   <div className="grid gap-4 sm:grid-cols-2 cursor-pointer">
      {PROJECTS.slice(0, 2).map((project, idx) => {
        return (
          <FadeInWhenVisible key={idx} delay={project.delay}>
          <GlowCard
            onClick={()=> onProjectClick && onProjectClick(project)}
            key={idx} 
            delay={project.delay} 
            className="group flex h-full flex-col justify-between hover:border-gray-700 transition-colors duration-300"
          >
            {/* Flex container for horizontal layout */}
            <div className="flex gap-4"> 
              {/* Image Placeholder on the Left */}
              <div className="shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} thumbnail`} 
                  className="h-20 w-20 rounded-lg object-cover border border-gray-700/50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content on the Right */}
              <div className="grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-sm leading-relaxed text-gray-400 mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech stack badges using the new TechBadge component */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-800/50">
              {project.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </GlowCard>
          </FadeInWhenVisible>
        );
      })}
    </div>
  </div>
);

export default FeaturedProjects;