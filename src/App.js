// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, experienceRef, educationRef, publicationsRef,projectsRef, contactRef }} />
      <div ref={homeRef}><HomePage /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={publicationsRef}><Publications /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
