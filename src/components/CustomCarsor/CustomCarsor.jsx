// import React from 'react'
import React, { useEffect, useState } from "react";

const CustomCarsor = () => {
 const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Scale up when hovering buttons, links, or inputs
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small Inner Dot */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovered ? 1.5 : 1
          })`,
        }}
      />

      {/* Outer Glowing Ring */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-orange-500/60 bg-orange-500/10 transition-all duration-150 ease-out"
        style={{
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          boxShadow: isHovered ? "0 0 15px rgba(249, 115, 22, 0.4)" : "none",
        }}
      />
    </>
  );
};

export default CustomCarsor