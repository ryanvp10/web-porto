import React from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import TechIcon from '../ui/techicon';

const ProjectDetail = ({ project, onBack }) => (
  <div className="py-12 animate-fade-in max-w-4xl mx-auto">
    <button 
      onClick={onBack} 
      className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-primary-400"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to Projects
    </button>

    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm">
        <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="h-48 sm:h-80 w-full object-cover border-b border-gray-800"
        />
        <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
                <div className="flex gap-4">
                    <button onClick={()=> window.open('https://drive.google.com/file/d/17AayKUaHQTomsnYww0jpH0Vw7iz0914E/view?usp=sharing','_blank')}  className="cursor-pointer flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-800">
                        <Github size={18}/> Repository
                    </button>
                    <button onClick={()=> window.open('https://drive.google.com/file/d/17AayKUaHQTomsnYww0jpH0Vw7iz0914E/view?usp=sharing','_blank')} className="cursor-pointer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-100 hover:bg-gray-200">
                            <span>Live Demo</span>
                            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300 ring-1 ring-inset ring-primary-500/20">
                        <TechIcon name={t} className="w-3.5 h-3.5" />
                        {t}
                    </span>
                ))}
            </div>

            <div className="prose prose-invert max-w-none text-gray-300">
                <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-primary-500 pl-4">Project Overview</h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-400">{project.description}</p>
                
                <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-primary-500 pl-4">Technical Details</h3>
                <div className="leading-relaxed whitespace-pre-line text-gray-400 space-y-4">
                    {project.longDescription}
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default ProjectDetail;