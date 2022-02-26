import React from "react";
import HeroSection from "./utilities//HeroSection";
import Daughters from "./about/Daughters";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import banner5 from "../assets/banner-5.png";

const about = [banner1, banner2, banner3, banner4, banner5];

function About() {
  return (
    <div>
      <HeroSection
        banners={about}
      />
      <Daughters />
    </div>
  );
}

export default About;
