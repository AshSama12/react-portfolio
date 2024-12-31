import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Vista Lanka Web Page",
      description:
        "A user-friendly and visually appealing travel booking web application designed to showcase the beauty and cultural diversity of Sri Lanka. Features include modern design, package customization, and streamlined navigation.",
      image: "/assests/web development.jpg",
      link: "https://github.com/AshSama12/travel-agency-website",
    },
    {
      title: "Exam Registration System",
      description:
        "A secure system for managing exam registrations, developed using ASP.NET and Blazor. Features include Microsoft account login, MySQL integration, and QR code generation.",
      image: "/assests/qa.jpg",
      link: "https://github.com/AshSama12/ExamRegistrationUoJ",
    },
    {
      title: "Online Shoppers Purchasing Intention Analysis",
      description:
        "Analyzed an online shoppers dataset using K-means and GMM clustering algorithms to study purchasing intentions and evaluate cluster performance with metrics like Silhouette Score.",
      image: "/assests/machine_learning.jpg",
      link: "https://github.com/AshSama12/online-shoppers-purchasing-intention-dataset-analyze",
    },
    {
      title: "Yellow Color Detection",
      description:
        "A Python-based project that detects yellow-colored objects using a webcam. Implemented using OpenCV and NumPy.",
      image: "/assests/computer vision.jpg",
      link: "https://github.com/AshSama12/yellow-color-detection",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
