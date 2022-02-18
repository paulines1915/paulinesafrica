import React from 'react';

import HeroSection from './utilities/HeroSection';
import ObjectiveSection from './home/ObjectiveSection';
import PublishSection from './home/PublishSection';
import VideoBookSection from './home/VideoBookSection';
import Featured from './home/Featured';
import TrendingandGallery from './home/TrendingandGallery';

function Home() {
  return (
    <>
      <HeroSection />
      <ObjectiveSection />
      <PublishSection />
      <VideoBookSection />
      <Featured />
      <TrendingandGallery/>
    </>
  );
}

export default Home;
