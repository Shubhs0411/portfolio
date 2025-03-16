import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 932);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 932);
      if (window.innerWidth > 932) setIsMobileOpen(false); // Close mobile menu on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: refs.homeRef, id: 'home' },
        { ref: refs.skillsRef, id: 'skills' },
        { ref: refs.experienceRef, id: 'experience' },
        { ref: refs.educationRef, id: 'education' },
        { ref: refs.publicationsRef, id: 'publications' },
        { ref: refs.projectsRef, id: 'projects' },
        { ref: refs.contactRef, id: 'contact' }
      ];

      let currentSection = 'home';

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          
          // Check if at least 50% of the section is visible
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  // Close menu after clicking a link
  const handleNavClick = (ref, section) => {
    scrollToSection(ref);
    setActiveSection(section);
    if (isMobile) setIsMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => handleNavClick(refs.homeRef, 'home')} className="navbar-title">
        Shubham Deshmukh
      </h1>

      {/* Mobile Menu Icon */}
      {isMobile ? (
        <>
          <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-links-mobile ${isMobileOpen ? 'open' : ''}`}>
            {['skills', 'experience', 'education', 'publications', 'projects', 'contact'].map((section) => (
              <li 
                key={section} 
                onClick={() => handleNavClick(refs[`${section}Ref`], section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="nav-links-desktop">
          {['skills', 'experience', 'education', 'publications', 'projects', 'contact'].map((section) => (
            <li 
              key={section} 
              onClick={() => handleNavClick(refs[`${section}Ref`], section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
