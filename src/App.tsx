import { Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="main">
        <div className="App">
          <NavBar />
          <Hero />
        </div>
        <div className="content" id="contentScroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
