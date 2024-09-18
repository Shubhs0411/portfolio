// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <nav className="navbar">
      <h1 onClick={() => scrollToSection(refs.homeRef)} className="navbar-title">
        Shubham Deshmukh
      </h1>
      <ul>
        <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
        <li onClick={() => scrollToSection(refs.experienceRef)}>Experience</li>
        <li onClick={() => scrollToSection(refs.educationRef)}>Education</li>
        <li onClick={() => scrollToSection(refs.publicationsRef)}>Publications</li>
        <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
        <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
