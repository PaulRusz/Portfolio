import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components
import Navbar from "./components/navbar"; // Import your Navbar component
import Footer from "./components/footer"; // Import your Footer component
import Home from "./pages/homepage"; // Import your Home page component
import About from "./pages/about";
import Contact from "./pages/contact"; // Import your Contact page component
import Resume from "./pages/resume"; // Import your Resume page component
import Portfolio from "./pages/portfolio";
import "./styles/global.scss"; // Import global styles

function App() {
  return (
    <div className="App">
      {/* Router wraps the whole app to enable routing */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/resume" element={<Resume />} />{" "}
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
