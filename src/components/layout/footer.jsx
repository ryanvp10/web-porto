import React from 'react';
import FadeInWhenVisible from '../ui/fadein';

const Footer = () => {
  return (
    <footer className="border-t mx-auto max-w-4xl  border-gray-900/50 bg-black pt-8 pb-5 flex flex-col md:flex-row justify-center items-center text-sm text-gray-600">
      <FadeInWhenVisible>``
                    <p className="text-sm text-gray-500 items-center text-center">
                      © 2025 Ryan. Built with React & Tailwind.
                    </p>
        </FadeInWhenVisible>
        </footer>
  )
};

export default Footer;