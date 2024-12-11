import React from "react";

const projectsData = [
    {
        id: 1,
        title: "Portfolio page",
        description: "Personal portfolio page",
        image: { src: 'src/assets/images/Portfolio.png', alt: "Image of ota portfolio project" },
        sourceCode: "https://github.com/Sk3901/portfolio",
        learnings: "Blää"
    },
    {
        id: 2,
        title: "Ota Kiinni Jos Saat",
        description: "Fullstack group project. A game based on boardgame Scotland Yard.",
        image: { src: 'src/assets/images/ota_kiinni_jos_saat.png', alt: "Image of ota kiinni jos saat project" },
        sourceCode: "https://github.com/Sk3901/Ota_kiinni_jos_saat",
        learnings: `This project is a full-stack web-based game inspired by the Scotland Yard board game. It challenges players to strategize and navigate using real-world maps, with the option to play against AI or other players.
        - Technologies used: 
        - Frontend: HTML, CSS, JavaScript
        - Backend: Python with Flask
        - Database: SQL
        - Api Integrations:
        - Azure AI Services. Used to enable AI opponents. Players can choose whether to play against humans, AI, or a mix of both.
        - Google maps api. usedfor dynamic and interactive map untegration within the gameplay.
        - key features:
        - Custom Flask endpoints`

    }
];

const Modal = ({ isOpen, project, closeModal }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>
                    {project.learnings.split('\n').map((line, index) => (
                        <span key={index}>
                            {line.trim()}
                            <br />
                        </span>
                    ))}
                </p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};


const Card = ({ title, description, image, sourceCode, onClick }) => {
    const { src, alt } = image;
    return (
        <div className="card">
            <img src={src} alt={alt} className="card-image" />
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
                <a href={sourceCode} id="sourcecode" target="_blank" rel="noopener noreferrer">
                    Source Code
                </a>
                <button 
                    className="learn-more-button"
                    onClick={onClick} // Trigger the modal when clicked
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

const Projects = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                {/* You can add a header title for the section here */}
            </div>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        sourceCode={project.sourceCode}
                        onClick={() => openModal(project)} // Pass the openModal function to Card
                    />
                ))}
            </div>
            <Modal isOpen={modalOpen} project={selectedProject} closeModal={closeModal} />
        </section>
    );
};

export default Projects;
