import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const WorkSection = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const leftCarouselRef = useRef(null);
  const rightCarouselRef = useRef(null);
  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Personal Website',
      image: '/api/placeholder/500/300',
      description: 'A responsive web application with modern UI/UX principles',
      tags: ['React', 'Node.js', 'MongoDB'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      image: '/api/placeholder/500/300',
      description: 'Full-stack e-commerce solution with payment integration',
      tags: ['React', 'Redux', 'Express', 'Stripe'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Data Visualization',
      image: '/api/placeholder/500/300',
      description: 'Interactive dashboard for real-time data visualization',
      tags: ['React', 'D3.js', 'Firebase'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: 'AI Chatbot Interface',
      image: '/api/placeholder/500/300',
      description: 'Natural language processing chatbot with sleek interface',
      tags: ['React', 'TensorFlow.js', 'WebSockets'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      image: '/api/placeholder/500/300',
      description: 'Tool that creates developer portfolios from GitHub profiles',
      tags: ['React', 'GitHub API', 'Tailwind CSS'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 6,
      title: 'Music Streaming App',
      image: '/api/placeholder/500/300',
      description: 'Spotify-like application with custom audio visualizer',
      tags: ['React', 'Web Audio API', 'Express'],
      links: {
        live: '#',
        github: '#',
      },
    },
  ];

  // Check for mobile layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto rotate carousels in opposite directions
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isHovering) {
      const leftInterval = setInterval(() => {
        setLeftIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 1000);

      const rightInterval = setInterval(() => {
        setRightIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      }, 2000);

      return () => {
        clearInterval(leftInterval);
        clearInterval(rightInterval);
      };
    }
  }, [isHovering, projects.length]);

  // Handle scroll events for carousel navigation
  useEffect(() => {
    const handleWheel = (e, carouselSide) => {
      e.preventDefault();

      if (carouselSide === 'left' || carouselSide === 'top') {
        if (e.deltaY > 0) {
          // Scroll down
          setLeftIndex((prevIndex) => (prevIndex + 1) % projects.length);
        } else {
          // Scroll up
          setLeftIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        }
      } else if (e.deltaY > 0) {
        // Scroll down - opposite for right carousel
        setRightIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      } else {
        // Scroll up - opposite for right carousel
        setRightIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    };

    const leftRef = leftCarouselRef.current;
    const rightRef = rightCarouselRef.current;
    const topRef = topCarouselRef.current;
    const bottomRef = bottomCarouselRef.current;

    if (leftRef) {
      leftRef.addEventListener('wheel', (e) => handleWheel(e, 'left'), { passive: false });
    }

    if (rightRef) {
      rightRef.addEventListener('wheel', (e) => handleWheel(e, 'right'), { passive: false });
    }

    if (topRef) {
      topRef.addEventListener('wheel', (e) => handleWheel(e, 'top'), { passive: false });
    }

    if (bottomRef) {
      bottomRef.addEventListener('wheel', (e) => handleWheel(e, 'bottom'), { passive: false });
    }

    return () => {
      if (leftRef) {
        leftRef.removeEventListener('wheel', (e) => handleWheel(e, 'left'));
      }
      if (rightRef) {
        rightRef.removeEventListener('wheel', (e) => handleWheel(e, 'right'));
      }
      if (topRef) {
        topRef.removeEventListener('wheel', (e) => handleWheel(e, 'top'));
      }
      if (bottomRef) {
        bottomRef.removeEventListener('wheel', (e) => handleWheel(e, 'bottom'));
      }
    };
  }, [projects.length]);

  // Handle touch events
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [currentTouchCarousel, setCurrentTouchCarousel] = useState(null);

  const handleTouchStart = (e, carouselType) => {
    setTouchStartY(e.touches[0].clientY);
    setCurrentTouchCarousel(carouselType);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY - touchEndY;

    if (Math.abs(swipeDistance) > 50) {
      if (currentTouchCarousel === 'left' || currentTouchCarousel === 'top') {
        if (swipeDistance > 0) {
          // Swipe up
          setLeftIndex((prevIndex) => (prevIndex + 1) % projects.length);
        } else {
          // Swipe down
          setLeftIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        }
      } else if (currentTouchCarousel === 'right' || currentTouchCarousel === 'bottom') {
        if (swipeDistance > 0) {
          // Swipe up - opposite for right/bottom carousel
          setRightIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        } else {
          // Swipe down - opposite for right/bottom carousel
          setRightIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }
      }
    }

    setCurrentTouchCarousel(null);
  };

  // Function to render a single project card
  const renderProjectCard = (project) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border-2 border-teal-400 h-full">
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-700 text-teal-400 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <a href={project.links.github} className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
            <Github size={16} className="mr-1" />
            <span>Code</span>
          </a>
          <a href={project.links.live} className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
            <ExternalLink size={16} className="mr-1" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  const renderVerticalCarousel = (carouselIndex, setCarouselIndex, direction, carouselRef) => {
    const visibleProjects = [
      projects[(carouselIndex) % projects.length],
      projects[(carouselIndex + 1) % projects.length],
      projects[(carouselIndex + 2) % projects.length],
    ];

    return (
      <div
        ref={carouselRef}
        className="relative h-screen max-h-120 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={(e) => handleTouchStart(e, direction)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {visibleProjects.map((project, index) => {
            const isActive = index === 1;
            const position = index - 1; // -1 for top, 0 for middle, 1 for bottom

            let yPosition; let scale; let opacity; let
              zIndex;

            // Direction affects the positioning logic
            if (direction === 'left' || direction === 'top') {
              yPosition = `${position * 85}%`;
              scale = isActive ? 1 : 0.85;
              opacity = isActive ? 1 : 0.7;
              zIndex = isActive ? 10 : 5 - Math.abs(position);
            } else {
              // Reverse direction for right carousel
              yPosition = `${-position * 85}%`;
              scale = isActive ? 1 : 0.85;
              opacity = isActive ? 1 : 0.7;
              zIndex = isActive ? 10 : 5 - Math.abs(position);
            }

            return (
              <div
                key={`${direction}-${project.id}`}
                className="absolute w-full transition-all duration-1000 ease-in-out px-4 max-w-md"
                style={{
                  transform: `translateY(${yPosition}) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                {renderProjectCard(project)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-teal-400" />
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border border-teal-400" />
        <div className="absolute top-1/3 left-2/3 w-16 h-16 rounded-full border border-teal-400" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <div className="inline-block relative">
          <h2 className="text-4xl font-bold text-teal-400 mb-2">&lt;/&gt;</h2>
          <h2 className="text-4xl font-bold text-white mb-6">Works</h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full" />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-400" />
        </div>
        <p className="text-gray-400 mt-6">I like building exciting projects with elegant solutions</p>
      </div>

      {/* Responsive Carousels Container */}
      <div className="max-w-6xl mx-auto px-4">
        {isMobile ? (
          // Mobile layout: two vertical carousels stacked
          <div className="flex flex-col gap-16">
            {/* Top carousel - top to bottom */}
            <div className="w-full">
              {renderVerticalCarousel(leftIndex, setLeftIndex, 'top', topCarouselRef)}
            </div>

            {/* Bottom carousel - bottom to top */}
            <div className="w-full">
              {renderVerticalCarousel(rightIndex, setRightIndex, 'bottom', bottomCarouselRef)}
            </div>
          </div>
        ) : (
          // Desktop layout: two vertical carousels side by side
          <div className="grid grid-cols-2 gap-8">
            {/* Left carousel - top to bottom */}
            <div className="w-full">
              {renderVerticalCarousel(leftIndex, setLeftIndex, 'left', leftCarouselRef)}
            </div>

            {/* Right carousel - bottom to top */}
            <div className="w-full">
              {renderVerticalCarousel(rightIndex, setRightIndex, 'right', rightCarouselRef)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSection;
