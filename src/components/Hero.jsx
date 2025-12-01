import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaCode, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullName = 'Daniel Chisasura';
  const fullTitle = 'Cyber Security Graduate';
  
  const intervalsRef = useRef({ nameInterval: null, titleInterval: null, cursorTimeout: null, titleDelayTimeout: null });
  
  useEffect(() => {
    const clearAllIntervals = () => {
      if (intervalsRef.current.nameInterval) {
        clearInterval(intervalsRef.current.nameInterval);
        intervalsRef.current.nameInterval = null;
      }
      if (intervalsRef.current.titleInterval) {
        clearInterval(intervalsRef.current.titleInterval);
        intervalsRef.current.titleInterval = null;
      }
      if (intervalsRef.current.cursorTimeout) {
        clearTimeout(intervalsRef.current.cursorTimeout);
        intervalsRef.current.cursorTimeout = null;
      }
      if (intervalsRef.current.titleDelayTimeout) {
        clearTimeout(intervalsRef.current.titleDelayTimeout);
        intervalsRef.current.titleDelayTimeout = null;
      }
    };

    const startTyping = () => {
      // Clear any existing intervals first
      clearAllIntervals();
      
      // Reset state
      setNameText('');
      setTitleText('');
      setShowCursor(true);
      
      let nameIndex = 0;
      let titleIndex = 0;
      
      // First, type the name
      intervalsRef.current.nameInterval = setInterval(() => {
        if (nameIndex <= fullName.length) {
          setNameText(fullName.substring(0, nameIndex));
          nameIndex++;
        } else {
          clearInterval(intervalsRef.current.nameInterval);
          intervalsRef.current.nameInterval = null;
          
          // After name is done, start typing the title
          intervalsRef.current.titleDelayTimeout = setTimeout(() => {
            intervalsRef.current.titleInterval = setInterval(() => {
              if (titleIndex <= fullTitle.length) {
                setTitleText(fullTitle.substring(0, titleIndex));
                titleIndex++;
              } else {
                clearInterval(intervalsRef.current.titleInterval);
                intervalsRef.current.titleInterval = null;
                // Hide cursor after everything is typed
                intervalsRef.current.cursorTimeout = setTimeout(() => setShowCursor(false), 500);
              }
            }, 80); // Speed of typing for title
          }, 300); // Delay before starting title
        }
      }, 100); // Speed of typing for name
    };

    // Start the first typing animation
    startTyping();

    // Set up infinite loop - restart every 6 seconds
    const loopInterval = setInterval(() => {
      clearAllIntervals();
      startTyping();
    }, 6000); // 6 seconds

    return () => {
      clearAllIntervals();
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container text-center relative z-10 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <div className="relative">
            {/* Invisible placeholder to reserve space */}
            <span className="invisible inline-block">{fullName}</span>
            {/* Visible typing text */}
            <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
              {nameText}
              {nameText.length < fullName.length && showCursor && (
                <span className="animate-blink">|</span>
              )}
            </span>
          </div>
          <div className="relative mt-2 md:mt-4">
            {/* Invisible placeholder to reserve space */}
            <span className="invisible inline-block text-cyber-blue">{fullTitle}</span>
            {/* Visible typing text */}
            <span className="text-cyber-blue absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
              {titleText}
              {titleText.length > 0 && titleText.length <= fullTitle.length && showCursor && (
                <span className="animate-blink">|</span>
              )}
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-300">
          Bachelor of Cyber Security (Major in Cyber Security) – Edith Cowan University
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
          Specializing in Security Operations, Network Security, Digital Forensics, and Vulnerability Assessment.
          <br />
          Proficient in Python, Bash, Ethical Hacking, Malware Analysis, and SOC Operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="btn-gradient-border-blue flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
          <a
            href="#projects"
            className="btn-gradient-border-green flex items-center gap-2"
          >
            <FaCode /> View Projects
          </a>
          <a
            href="#contact"
            className="btn-gradient-border-rainbow flex items-center gap-2"
          >
            <FaEnvelope /> Contact Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  // Component doesn't receive props currently
};

export default Hero;
