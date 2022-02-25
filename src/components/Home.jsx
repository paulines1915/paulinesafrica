import React from "react";

import HeroSection from "./utilities/HeroSection";
import ObjectiveSection from "./home/ObjectiveSection";
import PublishSection from "./home/PublishSection";
import VideoBookSection from "./home/VideoBookSection";
import Featured from "./home/Featured";
import TrendingandGallery from "./home/TrendingandGallery";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import banner5 from "../assets/banner-5.png";

const bannersAbout = [banner1, banner2, banner3, banner4, banner5];

function Home() {
  return (
    <>
      <HeroSection banners={bannersAbout} />
      <ObjectiveSection />
      <PublishSection />
      <VideoBookSection />
      <Featured />
      <TrendingandGallery />
    </>
  );
}

export default Home;
