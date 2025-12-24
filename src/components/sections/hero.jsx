/* eslint-disable no-unused-vars */
import React from 'react';

import { ArrowUpRight} from 'lucide-react';
import { SOCIALS } from '../../data/content';

const Hero = () => (
  <div className="animate-fade-in min-h-[calc(100vh-100px)] justify-center items-center text-center flex flex-col">  
    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Hi, I'm  
      <span className="pl-2 animate-gradient-text bg-linear-to-r from-primary-300 via-cyan-500 to-primary-300 bg-clip-text text-transparent bg-size-[200%_auto]"
      > Ryan Sapta</span>
    </h1>
    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
      From automation machine maintenance to software development.<br></br>
      Now crafting accessible, pixel-perfect, and performant web experiences.
    </p>

    <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <button onClick={()=> window.open('https://drive.google.com/file/d/17AayKUaHQTomsnYww0jpH0Vw7iz0914E/view?usp=sharing','_blank')} className="cursor-pointer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-100 hover:bg-gray-200">
        <span>Download Resume</span>
        <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
      
      <div className="flex items-center gap-4 px-4">
        {SOCIALS.map(({label : Icon, url}, i) => (
          <a 
            key={i} 
            href={url}
            target='_blank'
            className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200">
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;