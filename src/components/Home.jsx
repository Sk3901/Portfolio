import React from "react";
import { motion } from "framer-motion";

const Home = () => {
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

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 pt-24 md:pt-48">
      {/* Header Section */}
      <div className="flex-grow text-center">
        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-snug mb-4">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }} // Reduced duration for faster animation
          >
            Welcome to my portfolio!
          </motion.div>
        </h1>
        {/* Subheading */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }} // Reduced duration for consistency
          >
            Explore my projects and skills!
          </motion.div>
        </h2>
      </div>

      {/* Small Grid Section */}
      <div className="w-full flex justify-center mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-green-800 bg-opacity-50 border-2 border-cyan-400 p-2 rounded-lg">
            <img
              src="/images/about.png"
              alt="About"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleAboutClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-cyan-400 p-2 rounded-lg">
            <img
              src="/images/projects.png"
              alt="Projects"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleProjectsClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-cyan-400 p-2 rounded-lg">
            <img
              src="/images/skill.png"
              alt="Skills"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleSkillsClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-cyan-400 p-2 rounded-lg">
            <img
              src="/images/contact.png"
              alt="Contact"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
