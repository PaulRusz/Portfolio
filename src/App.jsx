// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components
import Navbar from "./components/navbar"; // Import your Navbar component
import Footer from "./components/footer"; // Import your Footer component
import Home from "./pages/homepage"; // Import your Home page component
import About from "./pages/about";
import Contact from "./pages/contact"; // Import your Contact page component
import Resume from "./pages/resume"; // Import your Resume page component
import Portfolio from "./pages/portfolio";
import "./styles/global.module.scss"; // Import global styles

function App() {
  //
  // for the light/dark mode button -> not currently working properly
  //
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <div className="theme-toggle">
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
