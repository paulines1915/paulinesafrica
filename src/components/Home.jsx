import React from 'react';

import HeroSection from './HeroSection';
import ObjectiveSection from './ObjectiveSection';
import PublishSection from './PublishSection';
import VideoBookSection from './VideoBookSection';
import Featured from './Featured';

function Home() {
  return (
    <div>
      <HeroSection />
      <ObjectiveSection />
      <PublishSection />
      <VideoBookSection />
      <Featured />
    </div>
  );
}

export default Home;
