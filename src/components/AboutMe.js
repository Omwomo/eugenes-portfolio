import React from 'react';
import { TfiMouse } from 'react-icons/tfi';
import codingOnLaptop from './assets/coding_on_laptop2.webp';
// import aboutBackground from './assets/about_bg1.jpeg';
import './styling/aboutme.css';

const AboutMe = () => (
  <section className="about-me text-white pb-20 pt-5">
    <div className="max-w-6xl mx-auto px-4">
      <div className="justify-center flex-col mb-8">
        <TfiMouse className="justify-center items-center w-full mb-2 text-3xl text-teal-400" />
        <div className="flex justify-center items-center h-full">
          <div className="border-l-2 border-dashed border-teal-50 h-16" />
        </div>
        <div className="flex pt-2 w-full justify-center items-center">
          <div className="w-2 h-2 bg-teal-50 transform rotate-45" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-start">
          <h2 className="text-4xl font-bold mb-8 border-teal-400 p-4 bg-custom-500 about-me-heading backdrop-opacity-80">About Me</h2>
          <div className="md:w-2/3 space-y-3 text-start p-6 rounded-3xl backdrop-opacity-80">
            <span className="text-teal-400 text-sm">&lt;p&gt;</span>
            <p>
              <span className="text-teal-400 text-xl">Hello!</span>
              {' '}
              <br />
              My name is Eugene and I specialize in web development that utilizes
              {' '}
              <span className="text-teal-400">HTML</span>
              ,
              {' '}
              <span className="text-teal-400">CSS</span>
              ,
              {' '}
              <span className="text-teal-400">JS</span>
              , and
              {' '}
              <span className="text-teal-400">REACT</span>
              {' '}
              etc.
            </p>
            <p>
              I am a highly motivated individual and eternal optimist dedicated to writing
              clear, concise, robust code that works. Striving to never stop learning and improving.
            </p>
            <p>
              When I&apos;m not coding, I am writing blogs, reading, or picking
              up some new hands-on art projects like
              {' '}
              <span className="text-teal-400">photography</span>
              .
            </p>
            <p>
              I like to have my perspective and belief systems challenged
              so that I see the world through new eyes.
            </p>
            <span className="text-teal-400 text-sm mr-8">&lt;p&gt;</span>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img src={codingOnLaptop} alt="Working on Laptop" className="rounded-lg shadow-lg bg-gray-900" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
