'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  jobTitle: string;
  duration: string;
  location: string;
  desc: string[];
  technologies: string[];
}

interface ExperienceItems {
  [key: string]: ExperienceItem;
}

const JobList = () => {
  const [activeJob, setActiveJob] = useState(0);

  const experienceItems: ExperienceItems = {
    'Northeastern University': {
      jobTitle: "Distributed Systems TA @",
      duration: "SEPT 2025 - PRESENT",
      location: "Boston, MA",
      desc: [
        "Help professor to manage the Distributed Systems course materials and assignments at Northeastern University",
        "Answer students questions to understand the Course Content"
      ],
      technologies: ['Communication', 'Teaching', 'JAVA']
    },
    'GreenTree': {
      jobTitle: "Software Development Engineer @",
      duration: "MAY 2025 - PRESENT",
      location: "Chicago, IL",
      desc: [
        "Managed server infrastructure and API integrations connecting distributed software systems for scalability",
        "Implemented Docker containers and Kubernetes orchestration improving deployment efficiency by 30%",
        "Developed automated backup scripts and monitoring services ensuring 99.9% system uptime",
        "Created responsive websites with DNS management and domain configuration supporting enterprise operations",
        "Built RESTful APIs for service communication and data synchronization across microservices architecture"
      ],
      technologies: ['React', 'Docker', 'Kubernetes', 'RESTful APIs', 'Microservices']
    },
    'NAAAP': {
      jobTitle: "Web Developer @",
      duration: "JAN 2025 - PRESENT", 
      location: "Boston, MA",
      desc: [
        "Architected leadership development platform using React/Node.js and Strapi CMS serving 2,500+ professionals",
        "Empowered community building through anti-discrimination resource sharing and engagement features",
        "Authored comprehensive technical documentation for developers and content managers improving adoption by 40%",
        "Built multilingual responsive UI supporting cross-device accessibility increasing member engagement by 35%",
        "Implemented performance optimization techniques serving 15+ community chapters with sub-second load times"
      ],
      technologies: ['Node.js', 'React', 'Strapi', 'MongoDB', 'Redis', 'JavaScript']
    },
    'SEMIR': {
      jobTitle: "Software Engineer PM Intern @",
      duration: "OCT 2021 - FEB 2022",
      location: "Shanghai, China",
      desc: [
        "Developed a React.js dashboard to track marketing performance, using React Hooks for dynamic state management and Axios for API calls to a Java-based backend via RESTful APIs",
        "Integrated AWS API Gateway with a Java Spring Boot backend to build a reliable API for handling large file uploads with Amazon S3",
        "Developed an internal error reporting system using React.js and Java Spring Boot in an Agile environment, handling over 2,000 bug reports"
      ],
      technologies: ['React', 'TypeScript', 'Java Spring Boot', 'AWS', 'PostgreSQL']
    }
  };

  const companies = Object.keys(experienceItems);

  return (
    <div className="joblist-container">
      <div className="joblist-sidebar">
        {companies.map((company, index) => (
          <motion.button
            key={company}
            onClick={() => setActiveJob(index)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`joblist-tab ${activeJob === index ? 'active' : ''}`}
          >
            {company}
          </motion.button>
        ))}
      </div>

      <div className="joblist-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeJob}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="joblist-job-header">
              <span className="joblist-job-title">
                {experienceItems[companies[activeJob]].jobTitle}
              </span>
              <span className="joblist-job-company">{companies[activeJob]}</span>
            </div>
            
            <div className="joblist-duration">
              {experienceItems[companies[activeJob]].duration}
            </div>
            
            <div className="joblist-location">
              {experienceItems[companies[activeJob]].location}
            </div>

            <ul className="job-description">
              {experienceItems[companies[activeJob]].desc.map((descItem: string, i: number) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li>{descItem}</li>
                </FadeInSection>
              ))}
            </ul>

            {/* 技术栈 */}
            <div className="joblist-technologies">
              <p>Relevant technologies/tools used:</p>
              <div className="tech-tags">
                {experienceItems[companies[activeJob]].technologies.map((tech: string) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {companies[activeJob] === 'SEMIR' && (
                <div style={{ marginTop: 12 }}>
                  Project video:{' '}
                  <a
                    href="https://youtu.be/JxoA-pgzxqA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#64ffda', marginLeft: 4, verticalAlign: 'middle' }}
                    title="Project Video"
                  >
                    <ExternalLink size={18} style={{ verticalAlign: 'middle' }} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobList; 