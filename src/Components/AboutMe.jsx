import React from 'react';
import { FaDownload, FaLinkedin, FaTwitter, FaFacebook, FaCode, FaHeart, FaGamepad, FaMusic, FaCoffee } from 'react-icons/fa';
import aboutPhoto from '../assets/name-logoo.png'

const AboutMe = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 lg:px-16"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src={aboutPhoto}
                                    alt="Chaitey"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#8B5FBF] rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#6D48C5] rounded-full opacity-60 animate-bounce"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="text-white space-y-8">
                        {/* Introduction */}
                        <div className="space-y-6">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Chaitey</span>
                            </h3>

                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    A passionate <span className="text-[#8B5FBF] font-semibold">Frontend Developer</span> who loves creating
                                    beautiful and functional web experiences. Started my coding journey 1.5 years ago
                                    and been fascinated by technology ever since.
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    I enjoy turning complex problems into simple, intuitive designs. When I'm not coding,
                                    I'm exploring new tech, contributing to open-source, or learning something new.
                                </p>
                            </div>
                        </div>

                        {/* Personality & Hobbies */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                                <FaHeart className="text-[#8B5FBF]" />
                                Beyond Coding
                            </h4>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <FaGamepad className="text-2xl text-[#8B5FBF] mx-auto mb-2" />
                                    <div className="text-gray-300 text-sm">Gaming</div>
                                </div>

                                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <FaMusic className="text-2xl text-[#8B5FBF] mx-auto mb-2" />
                                    <div className="text-gray-300 text-sm">Music</div>
                                </div>

                                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <FaCoffee className="text-2xl text-[#8B5FBF] mx-auto mb-2" />
                                    <div className="text-gray-300 text-sm">Coffee</div>
                                </div>

                                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <FaCode className="text-2xl text-[#8B5FBF] mx-auto mb-2" />
                                    <div className="text-gray-300 text-sm">Learning</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links & Button */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
                            <div className="flex gap-6">
                                <a href="#" className="text-gray-400 hover:text-[#8B5FBF] transition-colors duration-300 text-2xl">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#8B5FBF] transition-colors duration-300 text-2xl">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#8B5FBF] transition-colors duration-300 text-2xl">
                                    <FaFacebook />
                                </a>
                            </div>

                            <button className="bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white px-8 py-4 rounded-full text-lg font-medium uppercase tracking-wider hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                                <FaDownload className="text-xl" />
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;