import React, { useState, useEffect } from 'react';
import { Menu, X, Code} from 'lucide-react';
import { NAV_LINKS } from '../../data/content';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? ' border-gray-800 bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div 
          className="group flex cursor-pointer items-center gap-1 text-lg font-bold text-gray-100"
          onClick={() => setActiveTab('home')}
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 transition-transform group-hover:scale-110">
             <Code size={18} />
          </div>
          <span>My<span className="pl-1 text-primary-400">Portfolio</span></span>
        </div>

        <div className="hidden md:flex space-x-1 rounded-full border border-gray-800 bg-gray-900/50 p-1 backdrop-blur-sm">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer ${
                activeTab === link.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeTab === link.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gray-800 shadow-inner" />
              )}
              {link.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="animate-slide-down border-b border-gray-800 bg-black md:hidden">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsOpen(false);
                }}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeTab === link.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;