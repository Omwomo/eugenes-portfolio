/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill, percentage, isVisible }) => (
  <div className="flex items-center justify-center mb-8">
    <div className="relative skill-bar-container">
      <div className="circular-progress">
        <svg className="circle" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" className="circle-background" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="circle-foreground"
            style={{ strokeDasharray: `${percentage * 2.83} 283` }}
          />
        </svg>
        <div className="percentage-text">
          {percentage}
          %
        </div>
      </div>

      <div className="skill-bar">
        <div
          className="loading-bar"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        >
          <div className="loading-text">{skill}</div>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset the animation when out of view
        }
      },
      { threshold: 0.8 }, // Trigger when 80% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SkillBar skill="HTML" percentage={98} isVisible={isVisible} />
          <SkillBar skill="CSS" percentage={95} isVisible={isVisible} />
          <SkillBar skill="React" percentage={90} isVisible={isVisible} />
          <SkillBar skill="Wordpress" percentage={99} isVisible={isVisible} />
          <SkillBar skill="PHP" percentage={83} isVisible={isVisible} />
        </div>
        <div>
          <SkillBar skill="iOS" percentage={70} isVisible={isVisible} />
          <SkillBar skill="Shopify" percentage={97} isVisible={isVisible} />
          <SkillBar skill="Angular" percentage={68} isVisible={isVisible} />
          <SkillBar skill="Python" percentage={50} isVisible={isVisible} />
          <SkillBar skill="Android" percentage={67} isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
