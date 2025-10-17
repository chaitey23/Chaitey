import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaNpm, FaChrome, FaMobile, FaGlobe, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.1
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

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -5,
        scale: 1.02,
        borderColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    },
    hover: {
        scale: 1.05,
        y: -2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.4)",
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

const iconVariants = {
    hover: {
        scale: 1.2,
        rotate: 5,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const backgroundVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.05, 0.08, 0.05],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Skills = () => {
    const techStack = [
        {
            category: "Frontend Development",
            color: "from-blue-500 to-cyan-400",
            skills: [
                { name: "React.js", icon: <FaReact className="text-3xl" />, level: "Advanced" },
                { name: "JavaScript", icon: <SiJavascript className="text-3xl" />, level: "Advanced" },
                { name: "HTML5", icon: <SiHtml5 className="text-3xl" />, level: "Expert" },
                { name: "CSS3", icon: <SiCss3 className="text-3xl" />, level: "Expert" },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl" />, level: "Advanced" },
            ]
        },
        {
            category: "Backend & Database",
            color: "from-green-500 to-emerald-400",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-3xl" />, level: "Intermediate" },
                { name: "Express.js", icon: <SiExpress className="text-3xl" />, level: "Intermediate" },
                { name: "MongoDB", icon: <SiMongodb className="text-3xl" />, level: "Intermediate" },
                { name: "Firebase", icon: <SiFirebase className="text-3xl" />, level: "Intermediate" },
                { name: "REST API", icon: <FaGlobe className="text-3xl" />, level: "Advanced" },
                { name: "npm", icon: <FaNpm className="text-3xl" />, level: "Advanced" }
            ]
        },
        {
            category: "Tools & Practices",
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-3xl" />, level: "Advanced" },
                { name: "VS Code", icon: <FaRocket className="text-3xl" />, level: "Expert" },
                { name: "Postman", icon: <SiPostman className="text-3xl" />, level: "Intermediate" },
                { name: "Chrome DevTools", icon: <FaChrome className="text-3xl" />, level: "Advanced" },
                { name: "Responsive Design", icon: <FaMobile className="text-3xl" />, level: "Advanced" },
                { name: "Performance", icon: <FaRocket className="text-3xl" />, level: "Intermediate" }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'text-green-400';
            case 'Advanced': return 'text-blue-400';
            case 'Intermediate': return 'text-yellow-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <motion.section
            id="skills"
            className="py-20 px-4 lg:px-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"
                    variants={backgroundVariants}
                    animate="animate"
                ></motion.div>
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Stack</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <motion.p
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Technologies and tools I use to build amazing web applications
                    </motion.p>
                </motion.div>

                {/* Tech Stack Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {techStack.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="group relative overflow-hidden rounded-2xl p-6 border border-white/10 backdrop-blur-lg"
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                        >
                            {/* Category Title */}
                            <motion.h3
                                className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-3"
                                variants={itemVariants}
                            >
                                {category.category}
                            </motion.h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="group/item flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                                        variants={skillItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover="hover"
                                        transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.1 }}
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            className="text-white mb-3"
                                            variants={iconVariants}
                                            whileHover="hover"
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        {/* Skill Name */}
                                        <span className="text-white text-sm font-medium text-center mb-1">
                                            {skill.name}
                                        </span>
                                        {/* Skill Level */}
                                        <motion.span
                                            className={`text-xs ${getLevelColor(skill.level)} font-semibold`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.1 + 0.3 }}
                                        >
                                            {skill.level}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Gradient Overlay on Hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 rounded-2xl -z-10`}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div className="absolute bottom-10 left-10 opacity-10 text-6xl">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaReact />
                    </motion.div>
                </motion.div>

                <motion.div className="absolute top-10 right-10 opacity-10 text-6xl">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <SiJavascript />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;