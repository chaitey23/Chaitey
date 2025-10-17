import React from 'react';
import HeroSection from '../../Components/HeroSection';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import EducationalQualification from '../../Components/EducationalQualification';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
        </div>
    );
};

export default Home;