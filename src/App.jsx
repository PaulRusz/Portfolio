// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import "./styles/global.module.scss";

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
