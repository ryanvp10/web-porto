import React from 'react';

const Footer = () => (
  <footer className="border-t border-gray-800 mt-auto">
    <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-500">
        © 2025 Christopher. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs text-gray-500 font-mono">SYSTEM ONLINE</span>
      </div>
    </div>
  </footer>
);
export default Footer;