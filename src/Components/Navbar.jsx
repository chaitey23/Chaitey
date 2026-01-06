import React, { useState, useEffect } from 'react';


const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollY >= offsetTop && scrollY < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };
    const openResume = () => {
        const resumeLink = 'https://drive.google.com/file/d/1wYw3UIwzNJYXTkpXqiLbX1txlMsZ4va1/view?usp=sharing';
        window.open(resumeLink, '_blank', 'noopener,noreferrer');
    };
    const links = <>
        <li>
            <button
                onClick={() => scrollToSection('home')}
                className={`${activeSection === 'home' ? 'text-white font-medium text-sm uppercase tracking-wider underline' : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'}`}
            >
                HOME
            </button>
        </li>
        <li>
            <button
                onClick={() => scrollToSection('about')}
                className={`${activeSection === 'about' ? 'text-white font-medium text-sm uppercase tracking-wider underline' : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'}`}
            >
                ABOUT
            </button>
        </li>
        <li>
            <button
                onClick={() => scrollToSection('skills')}
                className={`${activeSection === 'skills' ? 'text-white font-medium text-sm uppercase tracking-wider underline' : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'}`}
            >
                SKILLS
            </button>
        </li>
        <li>
            <button
                onClick={() => scrollToSection('projects')}
                className={`${activeSection === 'projects' ? 'text-white font-medium text-sm uppercase tracking-wider underline' : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'}`}
            >
                PROJECTS
            </button>
        </li>

        <li>
            <button
                onClick={() => scrollToSection('contact')}
                className={`${activeSection === 'contact' ? 'text-white font-medium text-sm uppercase tracking-wider underline' : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'}`}
            >
                CONTACT
            </button>
        </li>
    </>

    return (
        <nav className="navbar backdrop-blur-md sticky top-0 z-50 px-4 lg:px-16 py-3 border-b"
            style={{
                background: 'linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)'
            }}>

            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost mr-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-56 space-y-2"
                        style={{
                            background: 'linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)'
                        }}>
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="text-xl lg:text-3xl font-bold text-white">CHAITEY</span>
                </div>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex items-center gap-8 mr-6">
                    <ul className="menu menu-horizontal gap-6">
                        {links}
                    </ul>
                </div>

                <button onClick={openResume} className="bg-[#8B5FBF] hover:bg-black border-2 border-transparent hover:border-white text-white px-4 py-2 lg:px-8 lg:py-4 rounded-full text-xs lg:text-sm font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Resume
                </button>
            </div>
        </nav>
    );
};

export default Navbar;