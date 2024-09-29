import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Controls mobile menu open/close state

  useEffect(() => {
    // Check screen size to toggle between mobile and desktop menus
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 932);
    };

    window.addEventListener('resize', handleResize);

    // Call the function initially to set the state based on the current window size
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => scrollToSection(refs.homeRef)} className="navbar-title">
        Shubham Deshmukh
      </h1>

      {/* Conditional rendering based on screen size */}
      {isMobile ? (
        <>
          {/* Mobile-specific part */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </div>

          {isMobileOpen && (
            <ul className="nav-links-mobile">
              <li onClick={() => { scrollToSection(refs.skillsRef); toggleMenu(); }}>Skills</li>
              <li onClick={() => { scrollToSection(refs.experienceRef); toggleMenu(); }}>Experience</li>
              <li onClick={() => { scrollToSection(refs.educationRef); toggleMenu(); }}>Education</li>
              <li onClick={() => { scrollToSection(refs.publicationsRef); toggleMenu(); }}>Publications</li>
              <li onClick={() => { scrollToSection(refs.projectsRef); toggleMenu(); }}>Projects</li>
              <li onClick={() => { scrollToSection(refs.contactRef); toggleMenu(); }}>Contact</li>
            </ul>
          )}
        </>
      ) : (
        <ul className="nav-links-desktop">
          {/* Desktop-specific part */}
          <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(refs.experienceRef)}>Experience</li>
          <li onClick={() => scrollToSection(refs.educationRef)}>Education</li>
          <li onClick={() => scrollToSection(refs.publicationsRef)}>Publications</li>
          <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
