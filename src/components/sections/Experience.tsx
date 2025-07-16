'use client';

import React from "react";
import JobList from "./JobList";
import "../../styles/components/Experience.css";
import FadeInSection from "./FadeInSection";

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience; 