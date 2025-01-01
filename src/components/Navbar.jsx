import React, { useState } from "react";

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
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Function to close the menu explicitly
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isModalOpen ? "hidden" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-title">Samu Kirjonen</div>

        {/* Hamburger Menu */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          &#9776; {/* This is the hamburger icon */}
        </div>

        {/* Navbar links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <span
            onClick={() => {
              handleHomeClick();
              closeMenu();
            }}
            className="navbar-button"
          >
            Home
          </span>
          <span
            onClick={() => {
              handleAboutClick();
              closeMenu();
            }}
            className="navbar-button"
          >
            About
          </span>
          <span
            onClick={() => {
              handleProjectsClick();
              closeMenu();
            }}
            className="navbar-button"
          >
            Projects
          </span>
          <span
            onClick={() => {
              handleContactClick();
              closeMenu();
            }}
            className="navbar-button"
          >
            Skills
          </span>
          <span
            onClick={() => {
              handleContactClick();
              closeMenu();
            }}
            className="navbar-button"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
