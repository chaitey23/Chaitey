import React from 'react';
import HeroSection from '../../Components/HeroSection';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import EducationalQualification from '../../Components/EducationalQualification';
import ProjectsSection from '../../Components/ProjectsSection';
import ContactSection from '../../Components/ContactSection';


const Home = () => {
    return (
        <div>
            <section id="home">
                <HeroSection></HeroSection>
            </section>
            <section id="about">
                <AboutMe></AboutMe>
            </section>
            <section id="skills">
                <Skills></Skills>
            </section>
            <section id="education">
                <EducationalQualification></EducationalQualification>
            </section>
            <section id="projects">
                <ProjectsSection></ProjectsSection>
            </section>
            <section id="contact">
                <ContactSection></ContactSection>
            </section>
        </div>
    );
};

export default Home;