import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaNpm, FaChrome, FaMobile, FaGlobe, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';

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
        <section
            id="skills"
            className="py-20 px-4 lg:px-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Stack</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to build amazing web applications
                    </p>
                </div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {techStack.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="group relative overflow-hidden rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/5 backdrop-blur-lg"
                        >
                            {/* Category Title */}
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-3">
                                {category.category}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group/item flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                                    >
                                        {/* Icon */}
                                        <div className="text-white mb-3 group-hover/item:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        {/* Skill Name */}
                                        <span className="text-white text-sm font-medium text-center mb-1">
                                            {skill.name}
                                        </span>
                                        {/* Skill Level */}
                                        <span className={`text-xs ${getLevelColor(skill.level)} font-semibold`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;