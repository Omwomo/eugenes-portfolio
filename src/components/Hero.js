/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './styling/hero.css';
import { CiDesktop, CiImport } from 'react-icons/ci';
import { BsEnvelope, BsCodeSlash } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Hero = () => {
  const [textColor, setTextColor] = useState('white');
  const [sidebarVisible, setSidebarVisible] = useState(true); // Visible on load
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide sidebar
  useEffect(() => {
    const controlSidebar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setSidebarVisible(false);
        } else {
          // Scrolling up
          setSidebarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlSidebar);
    return () => window.removeEventListener('scroll', controlSidebar);
  }, [lastScrollY]);

  // Trigger slide-in animation on mount
  useEffect(() => {
    setSidebarVisible(true); // Ensure it’s visible on mount
  }, []);

  return (
    <section id="hero" className="hero pt-8 md:pt-16 lg:pt-24 text-white min-h-screen flex flex-col justify-center relative">
      {/* Animated Left Sidebar - Slides in on load, hides/shows on scroll */}
      <div
        className={`absolute left-2 top-24 transition-transform duration-700 ease-in-out ${
          sidebarVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } flex flex-col space-y-3 bg-gray-900 p-2 rounded-2xl z-20`}
      >
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-400 hover:bg-teal-300 transition duration-300"
          type="button"
          aria-label="Profile"
        >
          <FaUser className="text-white text-lg" />
        </button>
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300"
          type="button"
          aria-label="Desktop View"
        >
          <CiDesktop className="text-white text-lg" />
        </button>
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300"
          type="button"
          aria-label="Code View"
        >
          <BsCodeSlash className="text-white text-lg" />
        </button>
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300"
          type="button"
          aria-label="Mail"
        >
          <IoMdMail className="text-white text-lg" />
        </button>
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300"
          type="button"
          aria-label="Contact"
        >
          <BsEnvelope className="text-white text-lg" />
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 main-hero">
        {/* Profile Section - Centered on Mobile, Left on Desktop */}
        <div className="w-full max-w-sm md:w-1/4 md:max-w-none">
          <div className="bg-gray-800 p-4 contact-info-hero flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center mb-4 md:mb-6 hero-contacts">
              <div className="rounded-full overflow-hidden mb-3">
                <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 object-cover md:w-24 md:h-24" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold md:text-xl">Eugene</h2>
                <p className="text-teal-400 text-sm md:text-base">Full-Stack Developer</p>
              </div>
            </div>
            <div className="text-xs text-center md:text-sm md:text-left">
              <p className="mb-1">eugeneoduor79@gmail.com</p>
              <p className="mb-1">Kenya</p>
              <p className="mb-1">Full-time / Freelancer</p>
              <p>www.omwomo.com</p>
            </div>
            <div className="mt-3 md:mt-4">
              <button
                className="bg-teal-400 text-gray-900 px-3 py-1.5 rounded-full font-bold text-sm flex items-center mx-auto md:mx-0"
                type="button"
                aria-label="Download CV"
              >
                Download CV
                <CiImport className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Heading and Stats - Centered on Mobile, Middle on Desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ color: textColor }}>
            <TypeAnimation
              sequence={[
                () => setTextColor('cyan'),
                "Hey I'm Eugene",
                800,
                () => setTextColor('aqua'),
                "Hey I'm Eugene\n Full-Stack Developer",
                800,
                () => setTextColor('teal'),
                "Hey I'm Eugene\n UI/UX Designer",
                800,
              ]}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line' }}
            />
          </h1>
          <p className="text-sm md:text-lg mt-2 max-w-md mx-auto md:max-w-none md:pl-4 leading-relaxed">
            I help businesses grow by crafting amazing web experiences.
            If you`&apos;`re looking for a developer that likes to get stuff done,
          </p>
          {/* Statistics - Inline Badges on Mobile, Hidden on Desktop */}
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <div className="bg-gray-800 p-2 rounded-lg text-center">
              <p className="text-teal-400 text-lg font-bold">4</p>
              <p className="text-xs">Languages</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg text-center">
              <p className="text-teal-400 text-lg font-bold">6</p>
              <p className="text-xs">Tools</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg text-center">
              <p className="text-teal-400 text-lg font-bold">8</p>
              <p className="text-xs">Years</p>
            </div>
          </div>
        </div>

        {/* Statistics - Right Section on Desktop Only */}
        <div className="hidden md:block md:w-1/4 hero-statistics bg-gray-800 p-6 lg:p-8">
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
              <p className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2 lg:mb-0 lg:pr-4">
                <TypeAnimation
                  sequence={['1', 400, '2', 400, '3', 400, '4']}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm text-center lg:text-left">Programming Languages</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
              <p className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2 lg:mb-0 lg:pr-4">
                <TypeAnimation
                  sequence={[1500, '1', 200, '2', 200, '3', 200, '4', 200, '5', 200, '6']}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm text-center lg:text-left">Development Tools</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
              <p className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2 lg:mb-0 lg:pr-4">
                <TypeAnimation
                  sequence={[2500, '1', 100, '2', 100, '3', 100, '4', 100, '5', 100, '6', 100, '7', 100, '8']}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm text-center lg:text-left">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
