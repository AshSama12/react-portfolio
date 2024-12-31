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
              of Jaffna with experience in software quality assurance and
              automated testing using tools like Selenium. Skilled in
              debugging and ensuring software reliability, with a strong focus
              on delivering high-quality solutions. Eager to contribute to
              innovative projects in a dynamic team environment.
            </p>
            {readMore && (
              <p className="read-more-text">
                I have participated in hackathons and team-based projects,
                showcasing leadership and problem-solving skills. My technical
                expertise includes machine learning, web development, and
                version control systems. I aspire to be part of a collaborative
                team that works on cutting-edge technologies.
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
