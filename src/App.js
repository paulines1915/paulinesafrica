import './App.css';
import Featured from './components/Featured';
import FooterSection from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ObjectiveSection from './components/ObjectiveSection';
import PublishSection from './components/PublishSection';
import VideoBookSection from './components/VideoBookSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <PublishSection />
      <VideoBookSection />
      <Featured />
      <FooterSection />
    </div>
  );
}

export default App;
