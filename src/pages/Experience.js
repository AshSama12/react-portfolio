import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      company: "Bank of Ceylon (BOC)",
      position: "Training Program",
      duration: "Sep 2020 - Apr 2021",
      period: "6 months",
      description: "Completed a comprehensive 6-month training program at Bank of Ceylon, gaining valuable experience in banking operations, customer service, and financial services.",
      logo: "/assests/BOC.png",
      type: "Training Program"
    },
    {
      company: "SLT Mobitel",
      position: "Intern",
      duration: "Mar 2025 - Sep 2025", 
      period: "6 months",
      description: "Completed a 6-month internship at SLT Mobitel, gaining hands-on experience with .NET framework, C# programming, SQL Server database management, and Azure AD integration. Worked on telecommunications projects involving mobile technology and network operations.",
      logo: "/assests/SLT.jpg",
      type: "Internship"
    }
  ];

  return (
    <div className="experience-section">
      <h1 className="experience-heading">Work Experience</h1>
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-logo">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="company-logo"
              />
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <h2 className="company-name">{experience.company}</h2>
                <span className="experience-type">{experience.type}</span>
              </div>
              <h3 className="position-title">{experience.position}</h3>
              <div className="duration-info">
                <span className="duration">{experience.duration}</span>
                <span className="period">({experience.period})</span>
              </div>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;