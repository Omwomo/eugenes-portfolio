/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react';
import { SiExercism } from 'react-icons/si';
import { BsTwitterX, BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiSearch } from 'react-icons/tfi';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Close the search bar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <header className="bg-custom-100 text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <SiExercism className="text-teal-400 lg:text-3xl md:text-2xl text-base mr-2" />
          <div className="lg:text-3xl font-bold md:text-2xl text-lg">OmwomoEugene</div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 items-start">
          <a href="#home" className="hover:text-teal-400 text-sm md:text-lg lg:text-xl">Home</a>
          <a href="#blogs" className="hover:text-teal-400 text-sm md:text-lg lg:text-xl">Blogs</a>
        </nav>

        {/* For large screens, the search icon is inside the search bar */}
        <div className="hidden lg:flex relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded bg-gray-700 text-white focus:outline-none pl-10" // padding left for search icon space
          />
          <TfiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-teal-400" />
        </div>
        {/* For medium and small screens, the search icon is outside */}
        <button onClick={toggleSearch} className="lg:hidden focus:outline-none" type="button">
          <TfiSearch className="font-extrabold text-teal-400" />
        </button>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 hidden md:flex lg:flex">
            <div className="flex items-center">
              <BsTwitterX className="text-teal-400 lg:mr-1" />
              <a href="#instagram" className="hover:text-teal-400 hidden lg:block">Twitter</a>
            </div>
            <div className="flex items-center">
              <BsLinkedin className="text-teal-400 lg:mr-1" />
              <a href="#discord" className="hover:text-teal-400 hidden lg:block">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <BsGithub className="text-teal-400 lg:mr-1" />
              <a href="#github" className="hover:text-teal-400 hidden lg:block">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for small and medium screens */}
      {showSearch && (
        <div ref={searchRef} className="lg:hidden bg-gray-800 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
