// // src/App.js
// import React, { useRef } from 'react';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Publications from './components/Publications';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import './App.css';
// import 'font-awesome/css/font-awesome.min.css';



// function App() {
//   const homeRef = useRef(null);
//   const skillsRef = useRef(null);
//   const experienceRef = useRef(null);
//   const educationRef = useRef(null);
//   const publicationsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     window.scrollTo({
//       top: ref.current.offsetTop - 50,
//       behavior: 'smooth',
//     });
//   };
 


//   return (
//     <div className="App">
//       <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, experienceRef, educationRef, publicationsRef,projectsRef, contactRef }} />
//       <div ref={homeRef}><HomePage /></div>
//       <div ref={skillsRef}><Skills /></div>
//       <div ref={experienceRef}><Experience /></div>
//       <div ref={educationRef}><Education /></div>
//       <div ref={publicationsRef}><Publications /></div>
//       <div ref={projectsRef}><Projects /></div>
//       <div ref={contactRef}><Contact /></div>
//       <a 
//         href="/assets/Shubham_Deshmukh_Resume.pdf" 
//         download 
//         className="resume-button" 
//         aria-label="Download Resume" 
//         title="Download Resume" 
//       >
//         <i className="fa fa-file-pdf-o" style={{ fontSize: '30px',width: '30px', height: '30px' }}></i> {/* Font Awesome PDF icon */}
//       </a>

//     </div>
    
//   );
// }

// export default App;
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
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
