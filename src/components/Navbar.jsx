import React from "react";

// Scroll functions
const handleHomeClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const handleAboutClick = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const handleProjectsClick = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const handleContactClick = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const Navbar = ({ isModalOpen }) => {
  return (
    <nav
      className={`bg-gray-900 bg-opacity-70 text-white p-6 fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        isModalOpen ? 'hidden' : ''
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Samu Kirjonen</div>
        <div className="space-x-4">
          <span
            onClick={handleHomeClick}
            className="NavButton"
          >
            Home
          </span>
          <span
            onClick={handleAboutClick}
            className="NavButton"
          >
            About
          </span>
          <span
            onClick={handleProjectsClick}
            className="NavButton"
          >
            Projects
          </span>
          <span
            onClick={handleContactClick}
            className="NavButton"
          >
            Skills
          </span>
          <span
            onClick={handleContactClick}
            className="NavButton"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
