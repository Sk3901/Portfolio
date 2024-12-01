import React from "react";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Group project based on htlm htlmhtlmhtlm htlmhtlmhtlmhtlmhtlm htlmhtlmhtlmhtlmhtlm htlmhtlm htlm htlm htlm htlm htlm htlm htlm scotland yard board game. Made with sql, javascript, python, html css",
        image: "https://picsum.photos/200/300",
        sourceCode: "https://github.com/Sk3901/Ota_kiinni_jos_saat"

    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of project 2",
        image: "https://picsum.photos/200/300",
        sourceCode: "https://github.com/Sk3901/Portfolio"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of project 3",
        image: "https://picsum.photos/200/300",
        sourceCode: "https://github.com/Sk3901/Ota_kiinni_jos_saat"
    }
];

const Card = ({ title, description, image, sourceCode }) => {
    return (
        <div className="projects">
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
            <div className="p-4 flex-col justify-between h-full">
                
                <div className="project-title">{title}</div>
                <div className="description">{description}</div>
                <a href={sourceCode}id="sourcecode" target="_blank" rel="noopener noreferrer">
                    Source Code
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative z-10 p-10 bg-[rgba(0,50,50,0.4)] text-white"
        >
            <div className="text-3xl font-bold text-center mb-8">
                {/* Title or other content */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        sourceCode={project.sourceCode}
                    />
                ))}
            </div>
        </section>
    );
};


export default Projects;
