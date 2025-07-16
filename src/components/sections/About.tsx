'use client';

import React from "react";
import "../../styles/components/About.css";

const About: React.FC = () => {
  const one = (
    <p>
      I am currently working as a <b>Software Development Engineer</b> at{' '}
      <a href="#"><b>Greentree</b></a>, focusing on server infrastructure and APIs. At the same time, I am serving as a part-time teaching assistant for a Distributed Systems course at{' '}
      <a href="#"><b>Northeastern University</b></a>.
    </p>
  );
  
  const two = (
    <p>
      Outside of work, I’m interested in following scientific developments. 
      I also play tennis and piano, and sometimes I dance and paint as well.
    </p>
  );

  const tech_stack = [
    "Typescript",
    "Python", 
    "React.js",
    "Java",
    "Javascript ES6+",
    "C#"
  ];

  return (
    <div id="about">
      <div className="section-header">
        <span className="section-title">/ about me</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          {one}
          <p>Here are some technologies I have been working with:</p>
          <ul className="tech-stack">
            {tech_stack.map((tech_item, i) => (
              <li key={i}>{tech_item}</li>
            ))}
          </ul>
          {two}
        </div>
        <div className="about-image">
          <img alt="Jieyao Chen" src="/assets/me2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;