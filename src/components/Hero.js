/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './styling/hero.css';
import { CiDesktop, CiImport } from 'react-icons/ci';
import { BsEnvelope, BsCodeSlash } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Hero = () => {
  const [textColor, setTextColor] = useState('white');

  return (
    <section id="hero" className="hero pt-24 text-white h-screen flex items-center justify-between relative">
      {/* Left Sidebar */}
      <div className="absolute left-8 top-1/3 transform -translate-y-1/2 flex flex-col space-y-6 rounded-3xl border-slate-50 bg-custom-300 p-2">
        <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-teal-400 transition duration-300" type="button">
          <FaUser className="text-white" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300" type="button">
          <CiDesktop className="text-white" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300" type="button">
          <BsCodeSlash className="text-white" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300" type="button">
          <IoMdMail className="text-white" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-teal-400 transition duration-300" type="button">
          <BsEnvelope className="text-white" />
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex justify-between items-center hero-container">
        {/* Left Section: Developer Info */}
        <div className="">
          <div className="bg-gray-800 p-8 shadow-lg contact-info-hero flex-col items-center">
            <div className="flex-col justify-center items-center hero-contacts mb-4 flex">
              <div className="rounded-full overflow-hidden flex justify-center items-center mb-4">
                <img src="https://via.placeholder.com/100" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Eugene</h2>
                <p className="text-teal-400">Full-Stack Developer</p>
              </div>
            </div>
            <div className="text-sm text-start">
              <p className="mb-2">eugeneoduor79@gmail.com</p>
              <p className="mb-2">Kenya</p>
              <p className="mb-2">Full-time / Freelancer</p>
              <p>www.omwomo.com</p>
            </div>
            <div className="mt-4">
              <button className="bg-teal-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center" type="button">
                Download CV
                {' '}
                <CiImport className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Heading and Stats */}
        <div className="w-1/2 text-left">
          <span className="text-teal-400 text-sm">&lt;h1&gt;</span>
          <h1 className="text-5xl font-bold pl-4" style={{ color: textColor }}>
            <TypeAnimation
              sequence={[
                () => setTextColor('cyan'),
                'Hey I\'m Eugene',
                500,
                () => setTextColor('aqua'),
                'Hey I\'m Eugene\n Full-Stack Developer',
                500,
                () => setTextColor('teal'),
                'Hey I\'m Eugene\n Front-End Developer',
                500,
                () => setTextColor('cyan'), // Change color to red
                'Hey I\'m Eugene\n Back-End Developer',
                500,
                () => setTextColor('teal'), // Change color to blue
                'Hey I\'m Eugene\n UI/UX Designer',
                500,
              ]}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line' }}
            />
          </h1>
          <span className="text-teal-400 text-sm mb-4">&lt;/h1&gt;</span>
          <br />
          <span className="text-teal-400 text-sm">&lt;p&gt;</span>
          <p className="text-lg pl-4">
            I help businesses grow by crafting amazing web experiences. If you&apos;re
            looking for a developer that likes to get stuff done,
          </p>
          <span className="text-teal-400 text-sm  mb-8">&lt;p&gt;</span>
        </div>

        {/* hero statistics */ }
        <div className="hero-statistics bg-custom-300 p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col space-y-8">
            <div className="text-start flex items-center m-0">
              <p className="text-4xl font-bold text-teal-400 pr-4">
                <TypeAnimation
                  sequence={[
                    '1',
                    400,
                    '2',
                    400,
                    '3',
                    400,
                    '4',
                  ]}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm whitespace-normal w-20 text-start">Programming Languages</p>
            </div>
            <div className="text-start flex items-center m-0 mb-8">
              <p className="text-4xl font-bold text-teal-400 pr-4">
                <TypeAnimation
                  sequence={[
                    1500,
                    '1',
                    200,
                    '2',
                    200,
                    '3',
                    200,
                    '4',
                    200,
                    '5',
                    200,
                    '6',
                  ]}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm whitespace-normal w-20 text-start">Development Tools</p>
            </div>
            <div className="text-start flex items-center m-0">
              <p className="text-4xl font-bold text-teal-400 pr-4">
                <TypeAnimation
                  sequence={[
                    2500, '1', 100, '2', 100, '3', 100, '4', 100, '5', 100, '6', 100, '7', 100, '8',
                  ]}
                  repeat={0}
                  cursor={false}
                  omitDeletionAnimation
                />
              </p>
              <p className="text-sm whitespace-normal w-20 text-start">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
