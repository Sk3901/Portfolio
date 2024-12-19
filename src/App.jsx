import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import VideoBg from './components/VideoBg';
import Home from './components/Home';
import Contact from './components/Contact';
import './index.css';
import InfiniteSliderComponent from './components/skills'; // Correct import

const App = () => {
  const sliderConfig = {
    title: {
      fontSize: 74,
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    elements: {
      width: 170,
      margin: 20,
      items: [
        { content: 'css', src: '/public/images/css.png' },
        { content: 'flask', src: '/public/images/flask1.png' },
        { content: 'fly', src: '/public/images/fly1.png' },
        { content: 'git', src: '/public/images/git1.png' },
        { content: 'github', src: '/public/images/github1.png' },
        { content: 'html', src: '/public/images/html1.png' },
        { content: 'js', src: '/public/images/js1.png' },
        { content: 'md', src: '/public/images/md1.png' },
        { content: 'mongo', src: '/public/images/mongo1.png' },
        { content: 'mysql', src: '/public/images/mysql1.png' },
        { content: 'postman', src: '/public/images/postman1.png' },
        { content: 'pycharm', src: '/public/images/pycharm1.png' },
        { content: 'python', src: '/public/images/python1.png' },
        { content: 'react', src: '/public/images/react1.png' },
        { content: 'trello', src: '/public/images/trello1.png' },
        { content: 'vscode', src: '/public/images/vscode1.png' },
        { content: 'ccna', src: '/public/images/ccna1.png' },
      ],
      /*width: 170,*/
      /*margin: 20,*/
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
      <About />

      <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Updated font size to text-[2rem] */}
          <div className="text-[2rem] font-bold mb-4">Projects</div>
          <Projects />
        </div>
      </section>

      <section id="skills" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto mt-40">
          {/* Updated font size to text-[2rem] */}
          <div className="text-[2rem] font-bold mb-4">Skills</div>
          <InfiniteSliderComponent config={sliderConfig} />
        </div>
      </section>

      <section id="contact" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Updated font size to text-[2rem] */}
          <h2 className="text-[2rem] font-bold mb-4">Contact Me</h2>
          <Contact />
        </div>
      </section>

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
