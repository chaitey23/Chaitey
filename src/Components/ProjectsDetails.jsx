import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTools } from 'react-icons/fa';
import { Link } from 'react-router';
import libraryImg from '../assets/libraryManagement.png';
import GardenImg from '../assets/gardeningHub.png';
import newspaper from '../assets/newspaper.png';

const ProjectsSection = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
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
            id: 2,
            name: "Gardening Hub Application",
            image: GardenImg,
            liveLink: "https://gardening-hub-application.web.app",
            githubLink: "https://github.com/chaitey23/gardening-hub",
            description: "An e-commerce platform for gardening enthusiasts to buy plants, tools, and get gardening tips.",
            technologies: ["React", "Firebase", "CSS3", "JavaScript", "Stripe Integration"],
            challenges: [
                "Integrating Stripe payment gateway with secure transaction handling",
                "Managing complex product inventory and stock updates in real-time",
                "Implementing user review and rating system with photo uploads"
            ],
            futurePlans: [
                "Add plant care reminder and tracking system",
                "Implement AR feature for plant identification",
                "Create community forum for gardeners to share experiences"
            ]
        },
        {
            id: 3,
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
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const backgroundVariants = {
        animate: {
            rotate: [0, 360],
            transition: {
                rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }
            }
        }
    };

    const cardHoverVariants = {
        initial: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        },
        hover: {
            scale: 1.03,
            boxShadow: "0 20px 25px -5px rgba(139, 95, 191, 0.3), 0 10px 10px -5px rgba(139, 95, 191, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const imageHoverVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.section
            id="projects"
            className="py-20 px-4 lg:px-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Animated Background Pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                variants={backgroundVariants}
                animate="animate"
            >
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                ></motion.div>
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Projects</span>
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                    <motion.p
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Here are some of my recent projects that showcase my skills and experience in web development.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                            variants={itemVariants}
                            whileHover="hover"
                            initial="initial"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <motion.div
                                variants={cardHoverVariants}
                                className="h-full"
                            >
                                {/* Project Image Container with Scroll Effect */}
                                <div className="relative overflow-hidden h-48">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                    <motion.div
                                        className={`w-full h-[120%] ${hoveredProject === project.id ? 'translate-y-[-20%]' : 'translate-y-0'
                                            }`}
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'top'
                                        }}
                                        variants={imageHoverVariants}
                                        transition={{
                                            duration: 8,
                                            ease: "easeOut"
                                        }}
                                    ></motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <motion.h3
                                        className="text-xl font-bold text-white mb-3"
                                        whileHover={{ color: "#8B5FBF" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.name}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-300 text-sm mb-4 leading-relaxed"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                className="px-2 py-1 bg-[#8B5FBF]/20 text-[#8B5FBF] text-xs rounded-full border border-[#8B5FBF]/30"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(139, 95, 191, 0.3)"
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <motion.span
                                                className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                +{project.technologies.length - 3} more
                                            </motion.span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg flex items-center justify-center gap-2"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </motion.a>
                                        <motion.div
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Link
                                                to={`/project/${project.id}`}
                                                state={{ project }}
                                                className="flex-1 border border-white/30 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 block"
                                            >
                                                <FaTools className="text-xs" />
                                                Details
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;