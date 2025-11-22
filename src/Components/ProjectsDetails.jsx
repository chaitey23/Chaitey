import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCode, FaLightbulb, FaExclamationTriangle, } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);

    const location = useLocation();
    const project = location.state?.project;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);


    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07233b] to-[#050c16]">
                <div className="text-center text-white">
                    <h2 className="text-2xl mb-4">Project Not Found</h2>
                    <Link to="/" className="text-[#8B5FBF] hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-4 lg:px-16 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
        }}>

            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white mb-8 hover:text-[#8B5FBF] transition-colors duration-300"
                >
                    <FaArrowLeft />
                    Back to Projects
                </Link>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                {project.name}
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <FaExternalLinkAlt />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                                >
                                    <FaGithub />
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-64 object-cover"
                                style={{ objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="space-y-8">

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaCode className="text-[#8B5FBF]" />
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-[#8B5FBF]/20 text-[#8B5FBF] rounded-lg border border-[#8B5FBF]/30 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaExclamationTriangle className="text-[#8B5FBF]" />
                                Challenges Faced
                            </h3>
                            <div className="space-y-3">
                                {project.challenges && project.challenges.length > 0 ? (
                                    project.challenges.map((challenge, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">{challenge}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Implementing responsive design across different devices</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Managing state efficiently in complex components</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Optimizing performance for better user experience</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Project Description */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaLightbulb className="text-[#8B5FBF]" />
                                Project Overview
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.description}
                            </p>
                        </div>


                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaLightbulb className="text-[#8B5FBF]" />
                                Future Plans & Improvements
                            </h3>
                            <div className="space-y-3">
                                {project.futurePlans && project.futurePlans.length > 0 ? (
                                    project.futurePlans.map((plan, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">{plan}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Add more interactive features and animations</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Implement backend functionality for full-stack capabilities</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#8B5FBF] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-300">Optimize for mobile devices and improve accessibility</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mt-8">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">
                        Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-2xl mb-2">🚀</div>
                            <h4 className="text-white font-semibold mb-2">Modern Design</h4>
                            <p className="text-gray-300 text-sm">Clean and responsive user interface</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-2xl mb-2">⚡</div>
                            <h4 className="text-white font-semibold mb-2">Fast Performance</h4>
                            <p className="text-gray-300 text-sm">Optimized for speed and efficiency</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-2xl mb-2">🔧</div>
                            <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                            <p className="text-gray-300 text-sm">Well-structured and maintainable codebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;