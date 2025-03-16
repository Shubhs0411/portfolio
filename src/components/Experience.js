// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, faVideoCamera, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Import company logos
import vtLogo from '../assets/virginia-tech.png';
import cciLogo from '../assets/cci.png';
import a3Logo from '../assets/a3.png'; // Added A3 Lab logo
import jcvLogo from '../assets/jcvi.png';
import wiproLogo from '../assets/wipro.png';
import ifmLogo from '../assets/ifm-engineering.png';

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'A3 Lab - Commonwealth Cyber Initiative - Virginia Tech',
    location: 'Arlington, VA',
    dates: 'Aug 2024 – Present',
    description: [
      'Developed and optimized deep learning models in PyTorch with CUDA acceleration, achieving R² = 0.89 in water quality prediction.',
      'Proposed a novel image processing pipeline for 50,000+ USGS images, integrating segmentation, daytime filtering, and water coverage thresholding, reducing computational overhead by filtering 40% of irrelevant images.',
      'Enhanced a U-Net segmentation model to remove atmospheric interference from surface water quality datasets, improving classification accuracy by 20%.',
    ],
    logos: [a3Logo, cciLogo, vtLogo], // Includes three logos
    icon: faBookOpen,
  },
  {
    title: 'Software Developer Intern',
    company: 'J. Craig Venter Institute',
    location: 'Rockville, MD',
    dates: 'June 2024 – Aug 2024',
    description: [
      'Implemented D3.js and React to enhance HSP 3.0 data visualization, improving researcher engagement by 40%.',
      'Optimized data pipeline using Python, R, Docker, and AWS (Lambda, S3), reducing manual intervention by 70%.',
      'Enhanced API queries, boosting database efficiency and significantly decreasing data processing time by 20%.',
    ],
    logos: [jcvLogo],
    icon: faLaptopCode,
  },
  {
    title: 'Software Developer',
    company: 'Wipro Ltd.',
    location: 'Pune, India',
    dates: 'May 2022 – Jul 2023',
    description: [
      'Led development of 10+ enterprise applications using ASP.NET Core, ensuring 100% on-time delivery and enhancing system scalability.',
      'Administered Tableau Server, optimizing analytics data workflows and reducing report generation time by 15%.',
      'Resolved 42+ Retail POS issues, boosting uptime by 20% and refining transaction reliability.',
    ],
    logos: [wiproLogo],
    icon: faChartLine,
  },
  {
    title: 'Data Science Intern',
    company: 'IFM Engineering Pvt. Ltd.',
    location: 'Pune, India',
    dates: 'Aug 2021 – Jan 2022',
    description: [
      'Developed a real-time patient monitoring system using YOLOv4-tiny and Mediapipe, attaining 95% accuracy.',
      'Integrated deep learning models and Flask Web app, mitigating operational issues by 30% and improving efficiency.',
      'Presented research on real-time patient monitoring at IEEE MysuruCon 2022, demonstrating a 15% reduction in patient response time through optimized alert mechanisms.',
    ],
    logos: [ifmLogo],
    icon: faVideoCamera,
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="icon-container">
              <div className="icon-circle">
                <FontAwesomeIcon icon={exp.icon} />
              </div>
            </div>
            <div className="content">
              {/* Multiple Logos Support */}
              <div className="logos-container">
                {exp.logos.map((logo, i) => (
                  <img key={i} src={logo} alt={`${exp.company} logo`} className="company-logo" />
                ))}
              </div>
              <h3>{exp.title} - {exp.company}</h3>
              <p className="dates">{exp.dates} | {exp.location}</p>
              <ul>
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
