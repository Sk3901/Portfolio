// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import VideoBg from './components/VideoBg';
import Home from './components/Home';
import './index.css';
import Lottie from 'lottie-react';
import animationData from './assets/Animation.json';

const App = () => {
  return (
    <div className="bg-transparent min-h-screen relative">
      <VideoBg />
      <Navbar />
      <Home />
      <div className="flex justify-center items-center h-1/2 -mt-60">
        <Lottie
        animationData={animationData}
        style={{width: '100px', height: '300px'}}
       />
      </div>
      
      {/* Randomly added sections to extend the webpage */}
      <section id="about" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            abaut 
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>

          </p>
        </div>
      </section>

      <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>
            Here are some of my projects
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>

          </p>
          <div className="mt-4">
            <div className="p-4 bg-gray-700 mb-5">Project 1</div>
            <div className="p-4 bg-gray-700 mb-5">Project 2</div>
            <div className="p-4 bg-gray-700 mb-5">Project 3</div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p>
            skilld
            d
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>

          </p>
        </div>
      </section>

      <section id="contact" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p>
            You can reach me via email at example@example.com. 
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>
            <h1>HTML</h1>

          </p>
        </div>
      </section>

      {/* Footer-like bar at the bottom */}
      <div className="bg-gray-900 bg-opacity-70 text-white p-4 relative z-10">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Samu Kirjonen</div>
          <div className="text-sm">© 2024</div>
        </div>
      </div>
    </div>
  );
};

export default App;
