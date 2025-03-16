// src/App.js
import React, { Suspense, useRef } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

// Lazy-loaded components for performance optimization
const Navbar = React.lazy(() => import('./components/Navbar'));
const HomePage = React.lazy(() => import('./components/HomePage'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Publications = React.lazy(() => import('./components/Publications'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  // Refs for scrolling
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height
      const offset = 1; // Extra spacing
      const scrollPosition = ref.current.offsetTop - navbarHeight - offset;
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      {/* Navbar with scroll-to-section functionality */}
      <Navbar scrollToSection={scrollToSection} refs={{ 
        homeRef, skillsRef, experienceRef, educationRef, 
        publicationsRef, projectsRef, contactRef 
      }} />

      {/* Main Sections */}
      <div ref={homeRef}><HomePage /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={publicationsRef}><Publications /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>

      {/* Floating Resume Download Button */}
      <a 
        href="/assets/Shubham_Deshmukh_Resume.pdf" 
        download 
        className="resume-button" 
        aria-label="Download Resume"
      >
        <i className="fa fa-file-pdf-o"></i>
      </a>
    </Suspense>
  );
}

export default App;
