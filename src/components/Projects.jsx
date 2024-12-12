import React, {useEffect} from "react";


const projectsData = [
    {
        id: 1,
        title: "Portfolio Page",
        description: "Personal portfolio showcasing skills and projects.",
        image: { src: 'src/assets/images/Portfolio.png', alt: "Image of portfolio project" },
        sourceCode: "https://github.com/Sk3901/portfolio",
        categories: [
            {
                title: "Frontend",
                content: "HTML, CSS, JavaScript. Built modular components and responsive layouts."
            },
            {
                title: "Design",
                content: "Focused on modern UX/UI principles and accessibility."
            }
        ]
    },
    {
        id: 2,
        title: "Ota Kiinni Jos Saat",
        description: "Fullstack project. A game based on boardgame Scotland Yard.",
        image: { src: 'src/assets/images/ota_kiinni_jos_saat.png', alt: "Image of ota kiinni jos saat project" },
        sourceCode: "https://github.com/Sk3901/Ota_kiinni_jos_saat",
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
                <div className="modal-description">
                    <p>{project.description}</p>
                </div>
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
