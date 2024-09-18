// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine,faVideoCamera, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Import company logos from the src/assets directory
import vtLogo from '../assets/virginia-tech.png';
import jcvLogo from '../assets/jcvi.png';
import wiproLogo from '../assets/wipro.png';
import ifmLogo from '../assets/ifm-engineering.png';



const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'A3 Labs - Commonwealth Cyber Initiative-Hub - Virginia Tech',
    location: 'Arlington, VA',
    dates: 'Aug 2024 – Present',
    description: [
      'Conducting research in Computer Vision for projects in the Biological Systems Engineering Department, contributing to the development of automated monitoring systems for environmental data.',
      'Analyzing and processing USGS dataset of water bodies across 760 site locations in the USA, utilizing machine learning techniques for predictive modeling.',
    ],
    logo: vtLogo,
    icon: faBookOpen,
  },
  {
    title: 'Software Engineer Intern',
    company: 'J. Craig Venter Institute',
    location: 'Rockville, MD',
    dates: 'June 2024 – Aug 2024',
    description: [
      'Developed and enhanced interactive data visualization tools for biotech research on the Human Salivary Proteome (HSP 3.0), improving user experience and data accessibility.',
      'Leveraged D3.js, React, HTML, CSS, JavaScript, AWS Lambda, and R scripts, along with Docker, to streamline data analysis processes, resulting in a 20% increase in research productivity.',
    ],
    logo: jcvLogo,
    icon: faLaptopCode,
  },
  {
    title: 'Software Engineer',
    company: 'Wipro Limited',
    location: 'Pune, India',
    dates: 'May 2022 – June 2023',
    description: [
      'Led the development and deployment of web applications using ASP.NET Core Framework, achieving 100% on-time delivery of key projects.',
      'Administered Tableau Server, optimizing data management and report publication, reducing processing time by 15%.',
      'Collaborated with the Retail POS team to identify and resolve 42 technical anomalies, enhancing system reliability and reducing downtime by 10%.',
    ],
    logo: wiproLogo,
    icon: faChartLine,
  },
  {
    title: 'Project Intern',
    company: 'IFM Engineering Pvt. Ltd.',
    location: 'Pune, India',
    dates: 'Aug 2021 – Jan 2022',
    description: [
      'Led a team in the development of a Patient Monitoring System Web Application, achieving 95.79% prediction accuracy and receiving positive feedback from industry professionals.',
      'Implemented real-time prediction models using YOLOv4-tiny, Mediapipe, XGBoost, and Random Forest algorithms, contributing to enhanced patient care solutions.',
    ],
    logo: ifmLogo,
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
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
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
