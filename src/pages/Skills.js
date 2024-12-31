import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 70 },
    { name: "C++", level: 60 },
    { name: "JavaScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 65 },
    { name: "MySQL", level: 85 },
    { name: "Selenium", level: 75 },
  ];

  return (
    <div className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-label">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
