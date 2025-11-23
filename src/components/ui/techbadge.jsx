import React, { useState } from 'react';
import TechIcon from './techicon.jsx';

const TechBadge = ({ name }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Container size increased to w-8 h-8 (32px)
  const containerClasses = "inline-flex items-center justify-center rounded-md w-8 h-8 bg-gray-800 ring-1 ring-inset ring-gray-700/50 transition-all duration-300 hover:bg-primary-500/20 hover:ring-primary-400";

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
      <span className={containerClasses}>
        {/* TechIcon uses the w-5 h-5 size internally */}
        <TechIcon name={name} /> 
      </span>
      
      {/* Custom Tooltip that appears on hover */}
      {showTooltip && (
        <div 
          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-700/95 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white shadow-xl animate-fade-in"
        >
          {name}
          {/* Triangle arrow for the tooltip */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 h-0 w-0 border-x-4 border-t-4 border-solid border-transparent border-t-gray-700/95"/>
        </div>
      )}
    </div>
  );
};

export default TechBadge;