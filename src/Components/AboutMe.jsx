import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaTwitter, FaFacebook, FaCode, FaHeart, FaGamepad, FaMusic, FaCoffee } from 'react-icons/fa';
import aboutPhoto from '../assets/portfolioImg.png';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3
        }
    }
};

const floatingVariants = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const bounceVariants = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const hobbyCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    },
    hover: {
        scale: 1.05,
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(139, 95, 191, 0.3)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 0.98
    }
};

const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    },
    hover: {
        scale: 1.2,
        color: "#8B5FBF",
        transition: {
            duration: 0.2
        }
    }
};
const openResume = () => {
    const resumeLink = 'https://drive.google.com/file/d/1OKHQzsNVS98yDwyqKi-QIPUgfbcojuwG/view?usp=drive_link';
    window.open(resumeLink, '_blank', 'noopener,noreferrer');
};
const AboutMe = () => {
    return (
        <motion.section
            id="about"
            className="py-20 px-4 lg:px-16"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Me</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    ></motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        className="relative"
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            className="relative z-10"
                            variants={imageVariants}
                        >
                            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                <motion.img
                                    src={aboutPhoto}
                                    alt="Chaitey"
                                    className="w-full h-full object-contain"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-8 h-8 bg-[#8B5FBF] rounded-full opacity-60"
                            variants={floatingVariants}
                            animate="animate"
                        ></motion.div>
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#6D48C5] rounded-full opacity-60"
                            variants={bounceVariants}
                            animate="animate"
                        ></motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        className="text-white space-y-8"
                        variants={containerVariants}
                    >
                        {/* Introduction */}
                        <motion.div
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Chaitey</span>
                            </h3>

                            <div className="space-y-4">
                                <motion.p
                                    className="text-gray-300 leading-relaxed"
                                    variants={itemVariants}
                                >
                                    A passionate <span className="text-[#8B5FBF] font-semibold">Frontend Developer</span> who loves creating
                                    beautiful and functional web experiences. Started my coding journey 1.5 years ago
                                    and been fascinated by technology ever since.
                                </motion.p>

                                <motion.p
                                    className="text-gray-300 leading-relaxed"
                                    variants={itemVariants}
                                >
                                    I enjoy turning complex problems into simple, intuitive designs. When I'm not coding,
                                    I'm exploring new tech, contributing to open-source, or learning something new.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Personality & Hobbies */}
                        <motion.div
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <motion.h4
                                className="text-xl font-semibold text-white flex items-center gap-2"
                                variants={itemVariants}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                                >
                                    <FaHeart className="text-[#8B5FBF]" />
                                </motion.div>
                                Beyond Coding
                            </motion.h4>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { icon: FaGamepad, text: "Gaming" },
                                    { icon: FaMusic, text: "Music" },
                                    { icon: FaCoffee, text: "Coffee" },
                                    { icon: FaCode, text: "Learning" }
                                ].map((hobby, index) => (
                                    <motion.div
                                        key={hobby.text}
                                        className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm cursor-pointer"
                                        variants={hobbyCardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <hobby.icon className="text-2xl text-[#8B5FBF] mx-auto mb-2" />
                                        <div className="text-gray-300 text-sm">{hobby.text}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links & Button */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
                            variants={itemVariants}
                        >
                            <div className="flex gap-6">
                                {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="text-gray-400 transition-colors duration-300 text-2xl"
                                        variants={socialIconVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover="hover"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.button onClick={openResume}
                                className="bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white px-8 py-4 rounded-full text-lg font-medium uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FaDownload className="text-xl" />
                                Download Resume
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;