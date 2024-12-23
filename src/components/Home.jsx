import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  
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

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-between min-h-screen pt-48">
      {/* Header Section */}
      <div className="flex-grow">
        <h1 className="text-white text-7xl font-sans font-bold leading-snug mb-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
          >
            Welcome to my portfolio!
          </motion.div>
        </h1>
        <h2 className="text-white font-sans text-4xl font-medium mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
          >
            Explore my projects and skills!
          </motion.div>
        </h2>
      </div>

      {/* Small Grid Section */}
      <div className="w-full flex justify-center mb-16">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-800 bg-opacity-50 border-2 border-gray-400 p-2 rounded-lg">
            <img
              src="/images/about.png"
              alt="about"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleAboutClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-gray-400 p-2 rounded-lg">
            <img
              src="/images/projects.png"
              alt="projects"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleProjectsClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-gray-400 p-2 rounded-lg">
            <img
              src="/images/skill.png"
              alt="skills"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={handleSkillsClick}
            />
          </div>
          <div className="bg-green-800 bg-opacity-50 border-2 border-gray-400 p-2 rounded-lg">
            <img
              src="/images/contact.png"
              alt="contact me"
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
