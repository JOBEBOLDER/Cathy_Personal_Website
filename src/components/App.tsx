'use client';

import React from "react";
import Navigation from "./ui/Navigation";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Credits from "./sections/Credits";
import "../styles/globals.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}

export default App; 