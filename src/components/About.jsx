import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-gray-900 bg-opacity-60 p-10 text-white">
      <div className="about-title">About Me</div>
      <div className="about-container">
        {/* About Text */}
    
        <div className="about-text">
          <p>
            Welcome to my website! I’m a software development student with a strong passion for creating functional and impactful applications. I enjoy turning ideas into reality by developing innovative software solutions that solve real-world problems.
          </p>
          <p>
            My journey in software development has allowed me to work with various technologies, and I’m always eager to learn more. I enjoy the challenge of building things from scratch, whether it’s the logic behind an application or the systems that support it.
          </p>
          <p>
            I’m constantly exploring new tools, programming languages, and techniques to expand my skillset. My focus is on creating clean, efficient, and scalable solutions that deliver results.
          </p>
          <p>
            I’m always open to new opportunities, build exciting projects, and continue improving as a developer. Thank you for visiting my website!
          </p>
        </div>

        {/* Timeline Section */}
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Metropolia University Of Applied Sciences</h3>
              <p>Began my journey as a ICT student.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>First Projects</h3>
              <p>Developed my first website and explored JavaScript, Python, HTML, CSS and databases.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Projects - Portfolio and Ota Kiinni Jos Saat</h3>
              <p>Creating portfolio webpage and a fullstack game.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Began majoring in Smart IoT Systems: Embedded IoT Devices</h3>
              <p>Building expertise in IoT architecture, embedded systems, and smart device integration.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">(2026)</div>
            <div className="timeline-content">
              <h3>Expected Graduation</h3>
              <p>Completing my degree.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;