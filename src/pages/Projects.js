import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Travel Agency Website [Fullstack]",
      description:
        "A comprehensive fullstack travel booking web application designed to showcase the beauty and cultural diversity of Sri Lanka. Features include modern design, package customization, streamlined navigation, and complete backend functionality.",
      image: "/assests/web development.jpg",
      link: "https://github.com/AshSama12/TravelAgencyWeb",
    },
    {
      title: "MediCenter - Medical Database Management System",
      description:
        "A comprehensive database management system for medical centers built with ASP.NET Core MVC and C#. Features patient management, drug inventory tracking, prescription workflows, and advanced search functionality. Utilizes Entity Framework Core, SQL Server, and Bootstrap for a responsive healthcare interface.",
      image: "/assests/medical center.jpg",
      link: "https://github.com/AshSama12/MediCenter",
    },
    {
      title: "Vehicle Management System",
      description:
        "A comprehensive web application for managing company fleet vehicles and employee bookings built with Java 17 and Spring Boot 3. Features role-based access control, real-time vehicle availability tracking, automated booking conflict detection, and maintenance scheduling with secure authentication.",
      image: "/assests/vehicle management.jpg",
      link: "https://github.com/AshSama12/VehicleManagementSystem",
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
      title: "Anomaly Detection in Wearing PPE [Research Project]",
      description:
        "An ongoing research project using computer vision and deep learning to create an effective anomaly detection system that identifies whether construction workers are wearing necessary PPE (helmet, vest, and boots). Features two specialized models: one for human detection and another for PPE detection, with high precision, recall, and resilience to lighting and weather changes.",
      image: "/assests/computer vision.jpg",
      link: "https://github.com/AshSama12/Anomaly-detection-in-wearing-PPE",
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
