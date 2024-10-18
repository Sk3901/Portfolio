// src/components/Navbar.jsx
import React from "react";

const handleHomeClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const handleAboutClick = () => {
  const aboutSection = document.getElementById("about");
  window.scrollTo({ top: 2100, behavior: 'smooth' });

  }

const handleProjectsClick = () => {
  const projectsSection = document.getElementById("projects");
  window.scrollTo({ top: 2000, behavior: 'smooth' });
}

const handleContactClick = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-70 text-white p-6 fixed w-full z-50">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Samu Kirjonen</div>
        <div className="space-x-4">
          <span
            onClick={handleHomeClick}
            className="text-white hover:underline cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={handleAboutClick}
            className="text-white hover:underline cursor-pointer"
          >
            About
          </span>
          <span
            onClick={handleProjectsClick}
            className="text-white hover:underline cursor-pointer"
          >
            Projects
          </span>
          <span
            onClick={handleContactClick}
            className="text-white hover:underline cursor-pointer"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
