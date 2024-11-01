import React from "react";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of project 2",
        image: "https://picsum.photos/200/300",
        link: "#"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of project 3",
        image: "https://picsum.photos/200/300",
        link: "#"
    }
];

const Card = ({ title, description, image, link }) => {
    return (
    <div className="bg-black bg-opacity-90 shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="text-gray text-xl font-bold mb-2">{title}</div>
                <div className="text-white-700 mb-4">{description}</div>
                <div href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    Learn More
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative z-10 p-10 bg-gray-900 bg-opacity-80 text-white">
            <div className="text-3xl font-bold text-center mb-8">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
