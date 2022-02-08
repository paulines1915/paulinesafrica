import './App.css';

import FooterSection from './components/utilities/Footer';
import Header from './components/utilities/Header';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
