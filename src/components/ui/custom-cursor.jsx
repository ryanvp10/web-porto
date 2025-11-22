import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement using a spring
  // These options control the 'liquid' feel: higher damping/stiffness means tighter following.
  const smoothOptions = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    const manageMouseMove = (e) => {
      // Set mouse position immediately
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Attach listener to the window
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: smoothX, // Use smooth, sprung X
        top: smoothY,   // Use smooth, sprung Y
        // Translate by half its width/height to center it perfectly on the mouse coordinates
        x: -2, 
        y: -2,
      }}
      // The cursor is 20x20px, a bright yellow, and uses no blend mode.
      className="fixed w-2 h-2 bg-[#22d3ee] rounded-full pointer-events-none z-9999 opacity-80"
    />
  );
};

export default CustomCursor;