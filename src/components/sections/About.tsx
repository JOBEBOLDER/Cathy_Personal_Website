'use client';

import React from "react";
import "../../styles/components/About.css";

const About: React.FC = () => {
  const one = (
    <p>
      I&apos;m a software engineer from <a href="https://www.google.com/maps/place/Boston,+MA/@42.3143655,-70.9700245,50870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3555076!4d-71.0565364!16zL20vMDFjeF8?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D/"><b>Boston, MA</b></a>. I&apos;m fascinated by large-scale, 
            high-impact products and contributed to major feature launches in industry-leading 
            services as well as apps that have 1000+ installs.
      I am currently working as a <b>Software Development Engineer</b> at{' '}
      <a href="https://www.linkedin.com/company/grentree-real-asset-management/posts/?feedView=all"><b>Greentree</b></a>, focusing on server infrastructure and APIs. At the same time, I am serving as a part-time teaching assistant for a Distributed Systems course at{' '}
      <a href="https://www.khoury.northeastern.edu/"><b>Northeastern University</b></a>.
    </p>
  );
  
  const two = (
    <p>
      Outside of work, I'm interested in following scientific developments. 
      I also play tennis and piano, and sometimes I dance and paint as well.
    </p>
  );

  const tech_stack = [
    "Typescript",
    "Python", 
    "React.js",
    "Java",
    "Javascript ES6+",
    "Go"
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
          <img 
            alt="Jieyao Chen" 
            src="/assets/me2.jpg" 
            className="image-with-hover"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default About;