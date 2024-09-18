// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpeg`} // Use your JPEG file
          alt="Shubham Laxmikant Deshmukh"
          className="profile-photo"
        />
        <h1>Shubham Laxmikant Deshmukh</h1>
        <p>
          Master’s student at Virginia Tech |{' '}
          <span className="role-switcher">
            <span className="role">Software Engineer</span>
            {/* <span className="role">Data Scientist</span>
            <span className="role">Machine Learning Engineer</span> */}
          </span>
        </p>
        <p>
          A proficient professional with 2 years of industry experience and a
          passion for Data Visualization, Machine Learning, and Full-Stack Web Development.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
