import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Instagram } from 'lucide-react';

const Hero = () => (
  <div className="animate-fade-in min-h-[calc(100vh-100px)] justify-center items-center text-center flex flex-col">  
    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Hi, I'm  
      <span className="pl-2 animate-gradient-text bg-linear-to-r from-primary-300 via-blue-400 to-primary-300 bg-clip-text text-transparent bg-size-[200%_auto]"
      > Ryan Sapta</span>
    </h1>
    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
      Software engineer, interface designer, and open-source enthusiast. 
      I build accessible, pixel-perfect, and performant web experiences.
    </p>

    <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <button className="cursor-pointer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 hover:bg-gray-200">
        <span>Download Resume</span>
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
      
      <div className="flex items-center gap-4 px-4">
        {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
          <a 
            key={i} 
            href="#" 
            className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;