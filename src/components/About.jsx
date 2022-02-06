import React from 'react';
import HeroSection from './utilities//HeroSection';
import AboutInfo from './about/AboutInfo';
import BookCenter from './about/BookCenter';
import Daughters from './about/Daughters';

function About() {
  return (
    <div>
      <HeroSection />
      <AboutInfo />
      <BookCenter />
      <Daughters />
    </div>
  );
}

export default About;
