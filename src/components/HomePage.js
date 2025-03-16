// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import AnimatedText from './AnimatedText';

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpeg`} // Use your JPEG file
          alt="Shubham Deshmukh"
          className="profile-photo"
        />
        <h1>Shubham Deshmukh</h1>
        <p>
    Master’s Student at Virginia Tech |{' '}
    <span className="role-switcher">
        <AnimatedText /> 
    </span>
    </p>
    <p>
        A passionate builder with 2+ years of industry experience in Data Visualization, Machine Learning, and Full-Stack Web Development—constantly coding, exploring, and pushing boundaries both in tech and life. 🚀🌍  
    </p>

      </div>
    </section>
  );
};

export default HomePage;
