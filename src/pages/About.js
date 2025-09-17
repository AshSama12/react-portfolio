import React, { useState } from "react";
import "./About.css";

function About() {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-heading">
            <h1>
              <span className="light-blue">About</span> Me
            </h1>
          </div>
          <div className="about-animation">
            <span>Software Engineering</span>
            <span>Machine Learning</span>
            <span>AI</span>
            <span>Computer Vision</span>
          </div>
          <div className="about-description">
            <p>
              Motivated 4th-year Computer Engineering student at the University
              of Jaffna with a passion for full-stack development and AI technologies.
              Experienced in frontend development using React and JavaScript, backend
              development with .NET Core, and passionate about machine learning and
              deep learning applications. Skilled in building scalable web applications
              and developing intelligent systems for real-world problems.
            </p>
            {readMore && (
              <p className="read-more-text">
                My expertise spans across web development with ASP.NET Core and React,
                as well as AI/ML technologies including computer vision, anomaly detection,
                and data analysis. Currently working on research projects involving deep
                learning for safety applications. I've participated in hackathons and
                team-based projects, showcasing leadership and problem-solving skills.
                I aspire to work in innovative environments that combine web development
                with cutting-edge AI technologies.
              </p>
            )}
            <button className="read-more-btn" onClick={handleReadMore}>
              {readMore ? "See Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="about-image-container">
          <img
            src="/assests/ashini2.png"
            alt="Ashini"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
