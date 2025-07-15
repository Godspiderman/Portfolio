import React from 'react';
import './Projects.scss';
import contractionImage from '../../Images/Screenshot 2025-07-15 130235.png';
import Petshop from '../../Images/Screenshot 2025-07-15 125037.png';
import Hospital from '../../Images/Screenshot 2025-07-15 125150.png';
import HOA from '../../Images/Screenshot 2025-07-15 130049.png';
import { FaExternalLinkAlt, FaCode, FaMobileAlt, FaTabletAlt, FaLaptop, FaDesktop } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Contraction",
      tech: "React JS",
      description: "A complete frontend website using JavaScript and React JS with SASS styling.",
      features: [
        "Organized content display using reusable React components",
        "Responsive layout for all devices",
        "Image upload with preview functionality",
        "Dynamic form for member management",
        "Interactive hover effects"
      ],
      image: contractionImage,
      link: "https://lambent-beijinho-d79e99.netlify.app/"
    },
    {
      title: "Pet Shop",
      tech: "Next JS",
      description: "Modern e-commerce app for pet lovers with fast navigation and dynamic routing.",
      features: [
        "Intuitive checkout process",
        "Multiple payment options",
        "Dynamic product pages",
        "Responsive design"
      ],
      image: Petshop,
      link: "https://petapp-six.vercel.app/"
    },
    {
      title: "Hospital Booking",
      tech: "Next JS",
      description: "Comprehensive hospital web application with appointment booking and payments.",
      features: [
        "Online doctor scheduling",
        "Secure payment gateway",
        "Patient history tracking",
        "Responsive design"
      ],
      image: Hospital,
      link: "https://nextproject-gules-nine.vercel.app/"
    },
    {
      title: "HOA Management",
      tech: "React",
      description: "Homeowners Association management system with booking and reporting.",
      features: [
        "Amenity booking system",
        "Service request tracking",
        "Vendor management",
        "Payment integration",
        "API integration",
        "Reporting dashboard"
      ],
      image: HOA,
      link: "https://poetic-fudge-2973e6.netlify.app/"
    }
  ];

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">Explore my recent work across different technologies</p>
          <div className="responsive-icons">
            <FaMobileAlt title="Mobile optimized" />
            <FaTabletAlt title="Tablet optimized" />
            <FaLaptop title="Laptop optimized" />
            <FaDesktop title="Desktop optimized" />
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div 
                className={`project-image ${!project.link ? 'no-link' : ''}`}
                onClick={() => handleImageClick(project.link)}
                style={{ cursor: project.link ? 'pointer' : 'default' }}
              >
                <img src={project.image} alt={project.title} />
                <div className="tech-badge">{project.tech}</div>
                {!project.link && <div className="no-link-overlay">Demo Coming Soon</div>}
                {project.link && (
                  <div className="project-hover">
                    <span>View Project <FaExternalLinkAlt /></span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h2 className="project-title">{project.title}</h2>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h3>Key Features <FaCode /></h3>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;