import React, { useRef, useEffect, useState } from 'react';

const SketchyUnderline = ({ children = "Creative line effects", className = "" }) => {
  const componentRef = useRef(null);
  const pathRef = useRef(null);
  
  // State to track if the component has entered the viewport
  const [hasEnteredView, setHasEnteredView] = useState(false);
  // State to store the calculated length of the path
  const [pathLength, setPathLength] = useState(0);

  // 1. Setup Intersection Observer and calculate path length
  useEffect(() => {
    let observer;
    const path = pathRef.current;
    const component = componentRef.current;

    if (path) {
      // Calculate the length of the path for the drawing effect
      const length = path.getTotalLength();
      setPathLength(length);
    }

    if (component) {
      // Configure the Intersection Observer
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            // If the element is intersecting (visible), trigger the animation
            if (entry.isIntersecting) {
              setHasEnteredView(true);
              // Stop observing once it has entered view
              observer.unobserve(component);
            }
          });
        },
        // Options: trigger when 10% of the element is visible
        { threshold: 0.1 } 
      );

      observer.observe(component);
    }

    // Cleanup function
    return () => {
      if (observer && component) {
        observer.unobserve(component);
      }
    };
  }, []);

  // 2. Define the SVG path for the slightly irregular/sketchy look
  const pathD = "M 0,4 C 80,9 140,0 200,6 T";

  // 3. Determine the stroke-dashoffset based on the view state
  // If hasEnteredView is true, offset is 0 (fully drawn). Otherwise, it's the full length (hidden).
  const offset = hasEnteredView ? 0 : pathLength;

  return (
    // Attach the componentRef to the container for observation
    <div
      ref={componentRef}
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      {/* The text content */}
      <span className="text-3xl sm:text-4xl font-extrabold text-white relative z-10 block">
        {children}
      </span>

      {/* The SVG container for the underline effect */}
      <svg
        className="absolute -bottom-3 left-2 right-0 w-[calc(100%-15px)] h-3 overflow-visible"
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          // Animation styles applied dynamically via inline style
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.8s cubic-bezier(0.86, 0, 0.07, 1)', // Drawing transition
          }}
        />
      </svg>
    </div>
  );
};

export default SketchyUnderline;