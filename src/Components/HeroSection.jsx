import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEye } from 'react-icons/fa';
import profilePhoto from '../assets/name-logoo.png'
const HeroSection = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = ['JUNIOR FRONTEND DEVELOPER', 'WEB DEVELOPER'];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, titles]);

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 lg:px-16 py-20"
            style={{
                background: 'linear-gradient(135deg, #07233b 0%, #041d34 25%, #04192d 50%, #040e18 75%, #050c16 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="text-white space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight uppercase">
                            Hi, I'm{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5]">
                                Chaitey
                            </span>
                        </h1>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-300 uppercase">
                            <span className="border-r-2 border-[#8B5FBF] pr-2">{text}</span>
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                        Crafting digital experiences that blend aesthetic elegance with functional excellence.
                        I transform complex ideas into intuitive, responsive web solutions that engage users
                        and drive results through clean, efficient code and thoughtful design.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] text-white px-8 py-4 rounded-full text-lg font-medium uppercase tracking-wider hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">

                                HERE ME
                            </button>

                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com/chaitey23"
                                target='_blank'
                                className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl">
                                <FaGithub />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Image/Illustration */}
                <div className="relative">
                    <div className="relative z-10 w-80 h-80 lg:w-[500px] lg:h-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FBF] to-[#6D48C5] rounded-3xl opacity-20 blur-3xl"></div>

                        {/* Modern Rounded Square */}
                        <div className="relative z-20 w-full h-full flex items-center justify-center">
                            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
                                {/* Main Image with Subtle Rounding */}
                                <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src={profilePhoto}
                                        alt="Chaitey"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Decorative Corner Elements */}
                                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#8B5FBF] rounded-lg opacity-70"></div>
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#6D48C5] rounded-lg opacity-70"></div>
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8B5FBF] rounded-lg opacity-50"></div>
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#6D48C5] rounded-lg opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-10 -left-4 w-8 h-8 bg-[#8B5FBF] rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-20 -right-4 w-6 h-6 bg-[#6D48C5] rounded-full opacity-60 animate-bounce"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#8B5FBF] rounded-full opacity-40 animate-ping"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;