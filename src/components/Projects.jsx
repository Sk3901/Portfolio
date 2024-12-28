import React, { useEffect } from "react";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Page",
        description: "Personal portfolio showcasing skills and selfmade projects. Designed with a focus on user experience.",
        image: { src: '/images/Portfolio.png', alt: "Image of portfolio project" },
        sourceCode: "https://github.com/Sk3901/portfolio",
        categories: [
            {
                title: "Frontend",
                content: "HTML, CSS, JavaScript."
            },
            {
                title: "Tailwind",
                content: "Project utilises tailwind framework to create better user experience."
            },
            {
                title: "React",
                content: "Built with React for dynamic UI and component management."
            },
            {
                title: "VSC",
                content: "Git for version control and GitHub for project hosting."
            },
            {
                title: "Deployment",
                content: "Deployed the application using Netlify."
            }
        ]
    },
    {
        id: 2,
        title: "Ota Kiinni Jos Saat",
        description: "Fullstack game based on boardgame Scotland Yard. 1-3 players that can be either human or AI players",
        image: { src: '/images/Ota_Kiinni_Jos_Saat.png', alt: "Image of ota kiinni jos saat project" },
        sourceCode: "https://github.com/Sk3901/OtaKiinniJosSaat",
        categories: [
            {
                title: "Frontend",
                content: "HTML, CSS, JavaScript for dynamic UI and gameplay interactions."
            },
            {
                title: "Backend",
                content: "Python Flask for APIs, custom endpoints, and game logic."
            },
            {
                title: "Database",
                content: "SQL database for player and game state management."
            },
            {
                title: "APIs",
                content: "Azure AI for AI opponents and Google Maps for map integration."
            },
            {
                title: "UX",
                content: "User-friendly design. Responsive design for mobile and desktop."
            },
            {
                title: "VSC",
                content: "Git for version control and GitHub for project hosting."
            }
        ]
    }
];

const Modal = ({ isOpen, project, closeModal }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{project.title}</h2>
                <div className="modal-title-underline"></div>
                <div className="modal-cards">
                    {project.categories.map((category, index) => (
                        <div className="modal-card" key={index}>
                            <h3>{category.title}</h3>
                            <p>{category.content}</p>
                        </div>
                    ))}
                </div>
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
                    onClick={onClick}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

const Projects = ({ isModalOpen, setIsModalOpen }) => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true); // Update state to indicate modal is open
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false); // Update state to indicate modal is closed
    };

    return (
        <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-60 text-white">
            <div className="projects-title">Projects</div>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        sourceCode={project.sourceCode}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} project={selectedProject} closeModal={closeModal} />
        </section>
    );
};

export default Projects;

