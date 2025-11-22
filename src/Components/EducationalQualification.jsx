import React from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaAward } from 'react-icons/fa';

const EducationalQualification = () => {
    const educationData = [
        {
            degree: "BSc in Computer Science & Engineering",
            institution: "Bangladesh University of Business and Technology",
            status: "(Ongoing)",
            year: "2025 - Present",
            icon: <FaUniversity className="text-3xl" />,
            color: "from-purple-500 to-pink-500",
            details: "Currently pursuing Bachelor's degree in Computer Science & Engineering"
        },
        {
            degree: "Diploma in Computer Technology",
            institution: "Rangpur Polytechnic Institute",
            status: "CGPA: 3.78 out of 4.00",
            year: "2020-2021",
            icon: <FaGraduationCap className="text-3xl" />,
            color: "from-blue-500 to-cyan-400",
            details: "Completed 4-year diploma in Computer Technology with excellent academic record"
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Rangpur Technical School and College,Rangpur",
            status: "GPA: 5.00 out of 5.00",
            year: "2018 - 2019",
            icon: <FaSchool className="text-3xl" />,
            color: "from-green-500 to-emerald-400",
            details: "Completed SSC from Technical background with outstanding results"
        }
    ];

    return (
        <section
            id="education"
            className="py-20 px-4 lg:px-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5FBF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6D48C5] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
                        Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">Qualification</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        My academic journey and educational background in computer science and technology
                    </p>
                </div>


                <div className="max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative mb-8 last:mb-0"
                        >

                            {index !== educationData.length - 1 && (
                                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-[#8B5FBF] to-[#6D48C5] opacity-50"></div>
                            )}


                            <div className="flex items-start gap-6 group-hover:transform group-hover:-translate-y-1 transition-all duration-300">

                                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                    {edu.icon}
                                </div>


                                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-[#8B5FBF]/50 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white mb-2 lg:mb-0">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-[#8B5FBF] font-semibold text-sm bg-[#8B5FBF]/10 px-3 py-1 rounded-full">
                                            {edu.year}
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
                                        <div className="flex items-center gap-2">
                                            <FaAward className="text-yellow-400" />
                                            <span className="text-gray-300 font-medium">
                                                {edu.institution}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-green-400 font-semibold">
                                                {edu.status}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {edu.details}
                                    </p>


                                    {(edu.status.includes('5.00') || edu.status.includes('3.78')) && (
                                        <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                                            <FaAward className="text-yellow-400 text-sm" />
                                            <span className="text-yellow-400 text-xs font-semibold">
                                                {edu.status.includes('5.00') ? 'Outstanding Achievement' : 'Excellent Performance'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mb-2">
                            5.00
                        </div>
                        <div className="text-gray-300 text-sm">SSC GPA</div>
                        <div className="text-green-400 text-xs mt-1">Perfect Score</div>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mb-2">
                            3.78
                        </div>
                        <div className="text-gray-300 text-sm">Diploma CGPA</div>
                        <div className="text-blue-400 text-xs mt-1">Excellent</div>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] mb-2">
                            BSc
                        </div>
                        <div className="text-gray-300 text-sm">Current Degree</div>
                        <div className="text-purple-400 text-xs mt-1">In Progress</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationalQualification;