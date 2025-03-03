import React from 'react';
import { TfiMouse } from 'react-icons/tfi';
import ToolsSection from './Tools';
import './styling/Skills.css';
import skillbar from './assets/skillbar-js.png';
import skillbarHtml from './assets/skillbar-html.png';
import skillbarRuby from './assets/skillbar-ruby.png';
import skillbarCss from './assets/skillbar-css.png';
import skillbarReact from './assets/skillbar-react.jpg';
import skillbarRails from './assets/skillbar-rails.jpg';
import skillbarPostgresql from './assets/skillbar-postgresql.jpg';
import skillbarPython from './assets/skillbar-python.png';
import skillbarTailwind from './assets/skillbar-tailwind.jpg';
import skillbarJquery from './assets/skillbar-jquery.jpg';
import skillbarRedux from './assets/skillbar-redux.jpg';
import skillbarBootstrap from './assets/skillbar-bootstrap.png';
import skillbarMysql from './assets/skillbar-mysql.png';
import skillbarNextjs from './assets/skillbar-nextjs.jpg';

const Skills = () => (
  <section className="bg-gray-950 text-white pb-20 pt-4">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="flex justify-start">
        <span className="text-cyan-300 text-6xl leading-10 tracking-tighter">&lt;/&gt;</span>
      </div>
      <div className="justify-center flex-col mb-8">
        <TfiMouse className="justify-center items-center w-full mb-2 text-3xl text-teal-400" />
        <div className="flex justify-center items-center h-full">
          <div className="border-l-2 border-dashed border-teal-50 h-16" />
        </div>
        <div className="flex pt-2 w-full justify-center items-center">
          <div className="w-2 h-2 bg-teal-50 transform rotate-45" />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="flex justify-center items-center">
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
          <hr className="w-20 bg-teal-400" />
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
        </div>
      </div>
      <p className="text-xl mb-12">I am striving to never stop learning and improving</p>

      <div className="skill-container flex">
        {/* Left Column: Skill Bars */}
        <div className="skills-left">
          <div className="skill-item">
            <img src={skillbar} alt="skillbar-js" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarHtml} alt="skillbar-html" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarRuby} alt="skillbar-ruby" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarCss} alt="skillbar-css" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarPython} alt="skillbar-css" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarPostgresql} alt="skillbar-css" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          <div className="skill-item">
            <img src={skillbarMysql} alt="skillbar-css" className="skb" />
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
        </div>

        {/* Center Column: Skill Names */}
        <div className="skills-center grid grid-cols-2 gap-4 items-center justify-center">
          <div className="skill-name text-right">JavaScript</div>
          <div className="skill-name text-left">React</div>
          <div className="skill-name text-right">HTML</div>
          <div className="skill-name text-left">Rails</div>
          <div className="skill-name text-right">Ruby</div>
          <div className="skill-name text-left">Tailwind</div>
          <div className="skill-name text-right">CSS</div>
          <div className="skill-name text-left">JQuery</div>
          <div className="skill-name text-right">Python</div>
          <div className="skill-name text-left">Bootstrap</div>
          <div className="skill-name text-right">PostgreSQL</div>
          <div className="skill-name text-left">Next.js</div>
          <div className="skill-name text-right">MySQL</div>
          <div className="skill-name text-left">Redux</div>
        </div>

        {/* Right Column: Skill Bars */}
        <div className="skills-right">
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarReact} alt="skillbar-react" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,50 C 50,50 50,50 0,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarRails} alt="skillbar-rails" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,50 C 50,50 50,50 100,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarTailwind} alt="skillbar-tailwind" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,50 C 50,50 50,50 100,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarRedux} alt="skillbar-redux" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,50 C 50,50 50,50 100,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarJquery} alt="skillbar-redux" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,50 C 50,50 50,50 100,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarBootstrap} alt="skillbar-redux" className="skb" />
          </div>
          <div className="skill-item">
            <svg className="line-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,50 C 50,50 50,50 100,50" stroke="#ffffff" strokeWidth="2" fill="transparent" />
            </svg>
            <img src={skillbarNextjs} alt="skillbar-redux" className="skb" />
          </div>
        </div>
      </div>
    </div>
    <ToolsSection />
  </section>
);

export default Skills;
