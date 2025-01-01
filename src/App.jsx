import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import VideoBg from './components/VideoBg';
import Home from './components/Home';
import Contact from './components/Contact';
import './index.css';
import InfiniteSliderComponent from './components/Skills';

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
        { content: 'JavaScript', src: '/images/js1.png' },
        { content: 'Python', src: '/images/python1.png' },
        { content: 'Css', src: '/images/css.png' },
        { content: 'Flask', src: '/images/flask1.png' },
        { content: 'Fly.io', src: '/images/fly1.png' },
        { content: 'Git', src: '/images/git1.png' },
        { content: 'Github', src: '/images/github1.png' },
        { content: 'Html', src: '/images/html1.png' },
        { content: 'Markdown', src: '/images/md1.png' },
        { content: 'Mongo DB', src: '/images/mongo1.png' },
        { content: 'MySQL', src: '/images/mysql1.png' },
        { content: 'Postman', src: '/images/postman1.png' },
        { content: 'Pycharm', src: '/images/pycharm1.png' },
        { content: 'React', src: '/images/react1.png' },
        { content: 'Trello', src: '/images/trello1.png' },
        { content: 'Vscode', src: '/images/vscode1.png' },
        { content: 'CCNA', src: '/images/ccna1.png' },
      ],
    },
    sliderControls: {
      autoStart: true,
      intervalTime: 50,
      steps: 3,
    },
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-transparent min-h-screen relative">
      <VideoBg />
      
      <Navbar isModalOpen={isModalOpen} />
      
      <Home />
      <About />
      <Projects isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      
      <section id="skills" className="skills">
        <InfiniteSliderComponent config={sliderConfig} />
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-title">Contact Me</div>
        <Contact />
      </section>

      <div className="bg-gray-900 bg-opacity-70 text-white p-4 relative z-10">
        <div className="max-w-[112.5rem] mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Samu Kirjonen</div>
          <div className="text-sm">© 2024</div>
        </div>
      </div>
    </div>
  );
};

export default App;
