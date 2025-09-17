// Home.js
import React from "react";
import Typewriter from "typewriter-effect"; // Import Typewriter
import "./Home.css"; // Import the custom CSS file for styling

function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assests/CV_Ashini_Samaranayake.pdf"; // Path to the CV
    link.download = "Ashini_Samaranayake_CV.pdf"; // File name for download
    link.click();
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="text-container">
          <h1 className="hello-text">Hello, It's Me</h1>
          <h2 className="name-text">Ashini Samaranayake</h2>
          <p className="passion-intro">
            And I'm Passionate about
            <span className="animated-passions">
              <Typewriter
                options={{
                  strings: ["Coding", "Designing", "Learning", "Problem Solving"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </p>
          <p className="degree-text">BSc. Engineering (Hons) in Computer Engineering</p>
          <div className="social-icons">
            <a
              href="https://web.facebook.com/ashini.samaranayake.9"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assests/facebook.png" alt="Facebook" className="social-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashinisamare/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assests/linkedin.png" alt="LinkedIn" className="social-logo" />
            </a>
            <a
              href="https://github.com/AshSama12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assests/github.png" alt="GitHub" className="social-logo" />
            </a>
            <a
              href="https://medium.com/@ashinisamaranayake"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assests/medium.png" alt="Medium" className="social-logo" />
            </a>
          </div>
          {/* Download button with JavaScript */}
          <button className="download-btn" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
        <div className="image-container">
          <img
            src="/assests/profile.png"
            alt="Ashini Samaranayake"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
