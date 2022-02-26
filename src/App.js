import "./App.css";

import FooterSection from "./components/utilities/Footer";
import Header from "./components/utilities/Header";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Founders from "./components/about/Founders";
import Spirituality from "./components/about/Spirituality";
import Mission from "./components/about/Mission";
import History from "./components/about/History";
import ReadingList from "./components/ReadingList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/spirituality" element={<Spirituality />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/readings" element={<ReadingList />} />
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
