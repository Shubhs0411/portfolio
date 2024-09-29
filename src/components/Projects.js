// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Human Salivary Proteome (HSP) 3.0 Visualization',
    description: 'Developed interactive data visualization tools for biotech research, improving user experience and accessibility of the HSP dataset.',
    technologies: ['React', 'D3.js', 'AWS', 'Docker'],
    github: 'https://github.com/JCVenterInstitute/HSPW-V3',
    demo: '', // Add live demo link if available
    image: '/react-portfolio/assets/hspw.png', // Add image path or URL
  },
  {
    title: 'React-Portfolio',
    description: 'A dynamic portfolio built using React, JavaScript, HTML, and CSS, showcasing my projects and skills in front-end development and design.',
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Shubhs0411/React-Portfolio',
    demo: '', // Add live demo link if available
    image: '/react-portfolio/assets/react-portfolio.png', // Add image path or URL
  },
  {
    title: 'Patient Monitoring System Web Application',
    description: 'Led a team to develop a real-time prediction model for patient monitoring using YOLOv4-tiny, Mediapipe, and XGBoost.',
    technologies: ['YOLOv4-tiny', 'Mediapipe', 'XGBoost', 'Flask'],
    github: 'https://github.com/Shubhs0411/Patient-Monitoring-System',
    demo: '', // Add live demo link if available
    image: '/react-portfolio/assets/pms.png', // Add image path or URL
  },
  
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-section" style={{ padding: '3rem' }}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" /> {/* Added image */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span className="tech-badge" key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
