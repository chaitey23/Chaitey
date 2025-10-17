import React from 'react';
import HeroSection from '../../Components/HeroSection';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;