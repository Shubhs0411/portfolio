// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: [
    { name: 'Python', logo: `${process.env.PUBLIC_URL}/logos/python.png` },
    { name: 'Java', logo: `${process.env.PUBLIC_URL}/logos/java.png` },
    { name: 'JavaScript', logo: `${process.env.PUBLIC_URL}/logos/javascript.png` },
    { name: 'C++', logo: `${process.env.PUBLIC_URL}/logos/cpp.png` },
    { name: 'C#', logo: `${process.env.PUBLIC_URL}/logos/csharp.png` },
    { name: 'SQL', logo: `${process.env.PUBLIC_URL}/logos/sql.png` },
    { name: 'HTML', logo: `${process.env.PUBLIC_URL}/logos/html.png` },
    { name: 'CSS', logo: `${process.env.PUBLIC_URL}/logos/css.png` },
    { name: 'MATLAB', logo: `${process.env.PUBLIC_URL}/logos/matlab.png` },
  ],
  Frameworks: [
    { name: 'ReactJS', logo: `${process.env.PUBLIC_URL}/logos/react.png` },
    { name: 'D3.js', logo: `${process.env.PUBLIC_URL}/logos/d3js.png` },
    { name: '.NET', logo: `${process.env.PUBLIC_URL}/logos/dotnet.png` },
    { name: 'Flask', logo: `${process.env.PUBLIC_URL}/logos/flask.png` },
    { name: 'Django', logo: `${process.env.PUBLIC_URL}/logos/django.png` },
    { name: 'TensorFlow', logo: `${process.env.PUBLIC_URL}/logos/tensorflow.png` },
    { name: 'Keras', logo: `${process.env.PUBLIC_URL}/logos/keras.png` },
    { name: 'PyTorch', logo: `${process.env.PUBLIC_URL}/logos/pytorch.png` },
    { name: 'OpenCV', logo: `${process.env.PUBLIC_URL}/logos/opencv.png` },
  ],
  Tools: [
    { name: 'VS Code', logo: `${process.env.PUBLIC_URL}/logos/vscode.png` },
    { name: 'Azure', logo: `${process.env.PUBLIC_URL}/logos/azure.png` },
    { name: 'AWS', logo: `${process.env.PUBLIC_URL}/logos/aws.png` },
    { name: 'Docker', logo: `${process.env.PUBLIC_URL}/logos/docker.png` },
    { name: 'Tableau', logo: `${process.env.PUBLIC_URL}/logos/tableau.png` },
    { name: 'Git', logo: `${process.env.PUBLIC_URL}/logos/git.png` },
    { name: 'Jupyter Notebook', logo: `${process.env.PUBLIC_URL}/logos/jupyter.png` },
    { name: 'Postman', logo: `${process.env.PUBLIC_URL}/logos/postman.png` },
  ],
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Technologies</h2>

      {Object.keys(skillsData).map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {skillsData[category].map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  title={skill.name}  // Tooltip to show the skill name
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
