// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import VideoBg from './components/VideoBg';
import Home from './components/Home';
import Contact from './components/Contact'
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
          <div className="text-3xl font-bold mb-4">About Me</div>
          <About />
             
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
            <div className='text-3xl'>HTML</div>
        </div>
      </section>

      <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold mb-4">Projects</div>
            < Projects />
            Here are some of my projects
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>

        </div>
      </section>

      <section id="skills" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold mb-4">Skills</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>

        </div>
      </section>

      <section id="contact" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          < Contact/>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>
          <div>HTML</div>

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
