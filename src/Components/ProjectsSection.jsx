import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTools } from 'react-icons/fa';
import { Link } from 'react-router';
import libraryImg from '../assets/library-management-31a51.web.app_.png'
import GardenImg from '../assets/gardening-hub-application.web.app_.png'
import newspaper from '../assets/newspaper-fullstack-webs-53e81.web.app_.png'
const ProjectsSection = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const projects = [

        {
            id: 1,
            name: "Newspaper Fullstack Website",
            image: newspaper,
            liveLink: "https://newspaper-fullstack-webs-53e81.web.app",
            githubLink: "https://github.com/chaitey23/newspaper-website",
            description: "A fullstack newspaper website with real-time news updates, categories, and admin panel.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
            challenges: [
                "Building real-time news feed with instant updates",
                "Creating comprehensive admin panel for content management",
                "Implementing user subscription system with different tiers"
            ],
            futurePlans: [
                "Add push notifications for breaking news",
                "Implement AI-based personalized news recommendation",
                "Develop progressive web app (PWA) for mobile users"
            ]
        },
        {
            id: 2,
            name: "Library Management System",
            image: libraryImg,
            liveLink: "https://library-management-31a51.web.app",
            githubLink: "https://github.com/chaitey23/library-management",
            description: "A comprehensive library management system for managing books, members, and transactions with real-time updates.",
            technologies: ["React", "Firebase", "Tailwind CSS", "Node.js", "MongoDB"],
            challenges: [
                "Implementing real-time book availability updates across multiple users",
                "Creating secure user authentication and role-based access control",
                "Managing complex book transaction states and due date calculations"
            ],
            futurePlans: [
                "Add AI-based book recommendation system",
                "Implement automated fine calculation and payment system",
                "Develop mobile app version with push notifications"
            ]
        },
        {
            id: 3,
            name: "Gardening Hub Application",
            image: GardenImg,
            liveLink: "https://gardening-hub-application.web.app",
            githubLink: "https://github.com/chaitey23/gardening-hub",
            description: "An e-commerce platform for gardening enthusiasts to buy plants, tools, and get gardening tips.",
            technologies: ["React", "Firebase", "CSS3", "JavaScript"],
            challenges: [
                "Managing complex product inventory and stock updates in real-time",
                "Implementing user review and rating system with photo uploads"
            ],
            futurePlans: [
                "Add plant care reminder and tracking system",
                "Implement AR feature for plant identification",
                "Create community forum for gardeners to share experiences"
            ]
        }
    ];
    return (
        <section id="projects" className="py-20 px-4 lg:px-16 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
        }}>

            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#8B5FBF]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                <div
                                    className={`w-full h-[150%] transition-transform duration-5000 ease-in-out ${hoveredProject === project.id ? 'translate-y-[-30%]' : 'translate-y-0'
                                        } bg-cover bg-top`}
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top'
                                    }}
                                ></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-[#8B5FBF]/20 text-[#8B5FBF] text-xs rounded-full border border-[#8B5FBF]/30">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        Live Demo
                                    </a>
                                    <Link
                                        to='/project/:id'
                                        state={{ project }}
                                        className="flex-1 border border-white/30 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <FaTools className="text-xs" />
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;