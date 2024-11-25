'use client'
import React, { useRef, useState } from "react";

export default function SummaryCard({ title, number, percent, color, progressColor , SportLightColor, hoverBg}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="relative">
      <div
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${color} ${hoverBg} rounded-md p-5 flex items-center justify-between`}>
        {/* title and number */}
        <div>
          <h4 className="dark:text-white text-sm lg:text-base">{title}</h4>
          <h2 className="text-3xl font-black dark:text-white">{number}</h2>
        </div>
        {/* radial progress */}
        <div className={`radial-progress ${progressColor}`} style={{ "--value": percent, "--thickness": "14px" }} role="progressbar">
          <span className="text-black dark:text-white font-bold">
            {percent}%
          </span>
        </div>
      </div>
      <div
        ref={divRef}
        style={{
          border: `4px dashed ${SportLightColor}`,
          opacity,
          WebkitMaskImage: `radial-gradient(50% 80px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-[7.5rem] w-full rounded-md bg-[transparent]"
      >
      </div>
    </div>
  )
}
