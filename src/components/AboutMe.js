import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src={`${process.env.PUBLIC_URL}/profile.jpeg`} 
          alt="Shubham Deshmukh"
          className="about-photo"
        />
        <p>
          I’m Shubham Deshmukh, a Master's student at Virginia Tech, passionate about data visualization, machine learning, and full-stack web development. With over 2 years of industry experience, I’m constantly exploring new technologies and striving to make impactful contributions.
        </p>
        <p>
          In my free time, I enjoy traveling, exploring new technologies, and contributing to open-source projects. I'm always eager to learn and connect with like-minded individuals.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
