// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import VideoBg from './components/VideoBg';
import Home from './components/Home';
import Contact from './components/Contact';
import './index.css';
import Lottie from 'lottie-react';
import animationData from './assets/Animation.json';
import InfiniteSliderComponent from './components/skills'; // Correct import

const App = () => {
  const sliderConfig = {
    title: {
      fontSize: 74,
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    elements: {
      width: 150,
      margin: 10,
      items: [
        { content: 'css', src: '/src/assets/images/css.png' },
        { content: 'flask', src: '/src/assets/images/flask1.png' },
        { content: 'fly', src: '/src/assets/images/fly1.png' },
        { content: 'git', src: '/src/assets/images/git1.png' },
        { content: 'github', src: '/src/assets/images/github1.png' },
        { content: 'html', src: '/src/assets/images/html1.png' },
        { content: 'js', src: '/src/assets/images/js1.png' },
        { content: 'md', src: '/src/assets/images/md1.png' },
        { content: 'mongo', src: '/src/assets/images/mongo1.png' },
        { content: 'mysql', src: '/src/assets/images/mysql1.png' },
        { content: 'postman', src: '/src/assets/images/postman1.png' },
        { content: 'pycharm', src: '/src/assets/images/pycharm1.png' },
        { content: 'python', src: '/src/assets/images/python1.png' },
        { content: 'react', src: '/src/assets/images/react1.png' },
        { content: 'trello', src: '/src/assets/images/trello1.png' },
        { content: 'vscode', src: '/src/assets/images/vscode1.png' },
        { content: 'ccna', src: '/src/assets/images/ccna1.png' },


        // Add more skills and images as needed
      ],
      width: 170,
      margin: 20,
    },
    sliderControls: {
      autoStart: true,
      intervalTime: 50,
      steps: 3,
    },
  };

  return (
    <div className="bg-transparent min-h-screen relative">
      <VideoBg />
      <Navbar />
      <Home />
      <div className="flex justify-center items-center h-1/2 -mt-60">
        <Lottie
          animationData={animationData}
          style={{ width: '100px', height: '300px' }}
        />
      </div>
          <About />
  
      <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold mb-4">Projects</div>
          <Projects />
        </div>
      </section>

      {/* Skills Section with InfiniteSlider */}
      <section id="skills" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold mb-4">Skills</div>
          
          {/* Add the InfiniteSlider component here */}
          <InfiniteSliderComponent config={sliderConfig} />
        </div>
      </section>

      <section id="contact" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Contact />
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
