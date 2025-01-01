import React, { useEffect } from 'react';
import Modal from './Modal'; 

const projectsData = [
    {
        id: 1,
        title: "Portfolio Page",
        description: "Personal portfolio showcasing skills and selfmade projects. Designed with a focus on user experience, and responsiveness",
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
        description: "Fullstack game based on boardgame Scotland Yard. 1-3 players that can be either human or AI players.",
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

const fitsignProject = {
    id: 3,
    title: "FitSign Oy",
    description: "I worked on an existing WordPress site and updated the content and design on several pages. Such as the front page and services page.",
    image: { src: '/images/FitSign.png', alt: "Image of FitSign page" },
    siteUrl: "https://www.fitsign.fi"
};

const Card = ({ title, description, image, sourceCode, siteUrl, onClick }) => {
    const { src, alt } = image;

    return (
        <div className="card">
            <img src={src} alt={alt} className="card-image" />
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
                {siteUrl ? (
                    <a
                        href={siteUrl}
                        id="site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-button"
                    >
                        Visit website
                    </a>
                ) : (
                    <>
                        <a
                            href={sourceCode}
                            id="sourcecode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="source-code-button"
                        >
                            Source Code
                        </a>
                        <button
                            className="learn-more-button"
                            onClick={onClick}
                        >
                            Learn More
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

const Projects = ({ isModalOpen, setIsModalOpen }) => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = ''; 
        };
    }, [isModalOpen]);

    return (
        <section id="projects" className="projects">
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

                <Card
                    title={fitsignProject.title}
                    description={fitsignProject.description}
                    image={fitsignProject.image}
                    siteUrl={fitsignProject.siteUrl}
                    onClick={() => openModal(fitsignProject)}
                />
            </div>

            {isModalOpen && selectedProject && (
                <Modal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    project={selectedProject}
                />
            )}
        </section>
    );
};

export default Projects;
