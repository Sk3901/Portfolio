// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-48"> 
      <h1 className="font-sans text-white text-7xl font-semibold leading-snug mb-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Slide in from left
          animate={{ opacity: 1, x: 0 }} // Animate to final position
          exit={{ opacity: 0 }} // Fade out
          transition={{ duration: 1 }} // Duration of the animation
        >
          Welcome to my portfolio
        </motion.div>
      </h1>
      <h2 className="font-sans text-white text-4xl font-medium">
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }} // Animate to final position
          exit={{ opacity: 0 }} // Fade out
          transition={{ duration: 1 }} // Duration of the animation
        >
          Explore my projects and skills!
        </motion.div>
      </h2>
    </div>
  );
};

export default Home;
