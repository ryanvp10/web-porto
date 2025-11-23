import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { FOOTER_LINKS } from '../../data/content';
import FadeInWhenVisible from '../ui/fadein';

const FooterIcons = () => (
    <div className="flex gap-4 text-gray-500 text-2xl">
        <a href="#" className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200" aria-label="Github"><Github size={22} /></a>
        <a href="#" className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200" aria-label="LinkedIn"><Linkedin size={22} /></a>
        <a href="#" className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200" aria-label="Instagram"><Instagram size={22} /></a>
        <a href="#" className="text-gray-400 transition-colors hover:text-primary-400 hover:scale-110 transform duration-200" aria-label="Email"><Mail size={22}/></a>
    </div>
);

const LinkColumn = ({ title, links }) => (
    <div className="space-y-4 md:space-y-6">
        <h4 className="text-base font-semibold text-gray-200">{title}</h4>
        <ul className="space-y-3 text-sm">
            {links.map((link, index) => (
                <li key={index}>
                    <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-primary-400 transition-colors hover:underline underline-offset-4"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
  return (
    <footer className="border-t mx-auto max-w-4xl  border-gray-800 bg-black pt-12 pb-8">
      <FadeInWhenVisible>
            <div className="px-6 md:px-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-16">
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <h3 className="text-xl font-bold text-white">Ryan Sapta</h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Help you rebuild and redefine fundamental concepts through mental models.
                        </p>
                        <FooterIcons />
                    </div>
                    <LinkColumn title="General" links={FOOTER_LINKS.general} />
                    <LinkColumn title="Links" links={FOOTER_LINKS.website} />
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p className="text-sm text-gray-500 items-center text-center">
                      © 2025 Ryan. Built with React & Tailwind.
                    </p>
                </div>
        </FadeInWhenVisible>
        </footer>
  )
};

export default Footer;