import React from "react";

// Scroll functions
const handleHomeClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleAboutClick = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleProjectsClick = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleContactClick = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = ({ isModalOpen }) => {
  return (
    <nav className={`navbar ${isModalOpen ? "hidden" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-title">Samu Kirjonen</div>
        <div className="navbar-links">
          <span onClick={handleHomeClick} className="navbar-button">
            Home
          </span>
          <span onClick={handleAboutClick} className="navbar-button">
            About
          </span>
          <span onClick={handleProjectsClick} className="navbar-button">
            Projects
          </span>
          <span onClick={handleContactClick} className="navbar-button">
            Skills
          </span>
          <span onClick={handleContactClick} className="navbar-button">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
