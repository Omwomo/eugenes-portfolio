/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './styling/tools.css';

const ToolCircle = ({ toolIcon, positionClass, fadeOutClass }) => (
  <div
    className={`absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-700 ${positionClass} ${fadeOutClass}`}
  >
    <img src={toolIcon} alt="Tool Icon" className="w-8 h-8" />
  </div>
);

const ToolsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Center Circle */}
      <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center text-white">
        Tools
      </div>

      {/* Rotating Circles */}
      <div
        className={`absolute w-96 h-96 flex items-center justify-center ${
          isVisible ? 'animate-spin-slow' : ''
        }`}
      >
        <ToolCircle
          toolIcon="/path-to-icon1.png"
          positionClass={`${
            isVisible ? 'translate-x-[100px] translate-y-[-100px]' : 'translate-x-[400px] translate-y-[-400px]'
          }`}
          fadeOutClass={`${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        />
        <ToolCircle
          toolIcon="/path-to-icon2.png"
          positionClass={`${
            isVisible ? 'translate-x-[100px] translate-y-[100px]' : 'translate-x-[400px] translate-y-[400px]'
          }`}
          fadeOutClass={`${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        />
        <ToolCircle
          toolIcon="/path-to-icon3.png"
          positionClass={`${
            isVisible ? 'translate-x-[-100px] translate-y-[100px]' : 'translate-x-[-400px] translate-y-[400px]'
          }`}
          fadeOutClass={`${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        />
        <ToolCircle
          toolIcon="/path-to-icon4.png"
          positionClass={`${
            isVisible ? 'translate-x-[-100px] translate-y-[-100px]' : 'translate-x-[-400px] translate-y-[-400px]'
          }`}
          fadeOutClass={`${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
    </div>
  );
};

export default ToolsSection;
