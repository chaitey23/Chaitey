import React from 'react';
import HeroSection from '../../Components/HeroSection';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import EducationalQualification from '../../Components/EducationalQualification';
import ProjectsSection from '../../Components/ProjectsSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Home;