'use client';

import React from "react";
import Navigation from "./ui/Navigation";
import Hero from "./sections/Hero";
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
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}

export default App; 