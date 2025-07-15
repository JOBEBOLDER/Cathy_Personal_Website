'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../styles/components/Experience.css";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0);

  const experiences = [
    {
      company: 'GreenTree',
      position: 'Software Development Engineer',
      period: 'May 2025 - PRESENT',
      location: 'Chicago, IL',
      website: 'https://www.greentree.group/',
      responsibilities: [
        'Managed server infrastructure and API integrations connecting distributed software systems for scalability',
        'Implemented Docker containers and Kubernetes orchestration improving deployment efficiency by 30%',
        'Developed automated backup scripts and monitoring services ensuring 99.9% system uptime',
        'Created responsive websites with DNS management and domain configuration supporting enterprise operations',
        'Built RESTful APIs for service communication and data synchronization across microservices architecture'
      ],
      technologies: [ 'React', 'Docker', 'Kubernetes', 'RESTful APIs', 'Microservices']
    },
    {
      company: 'National Association of Asian American Professionals',
      position: 'Web developer',
      period: 'jan 2025 present',
      location: 'Boston, MA',
      website: 'https://www.naaapboston.org/',
      responsibilities: [
        'Architected leadership development platform using React/Node.js and Strapi CMS serving 2,500+ professionals',
        'Empowered community building through anti-discrimination resource sharing and engagement features',
        'Authored comprehensive technical documentation for developers and content managers improving adoption by 40%',
        'Built multilingual responsive UI supporting cross-device accessibility increasing member engagement by 35%',
        'Implemented performance optimization techniques serving 15+ community chapters with sub-second load times'
      ],
      technologies: ['Node.js', 'React', 'Strapi', 'MongoDB', 'Redis', 'JavaScript']
    },
    {
      company: 'Semir Digital Center',
      position: 'Software Engineer PM Intern',
      period: 'Oct 2021 - Feb 2022',
      location: 'Shanghai, China',
      website: 'https://semirshop.com/?srsltid=AfmBOoot-6HZONMFNLpRMcHvtErWilGAugJCA25WvX1usD0QQ9O-z_E5',
      responsibilities: [
        'Developed a React.js dashboard to track marketing performance, using React Hooks for dynamic state management and Axios for API calls to a Java-based backend via RESTful APIs. Provided real-time visualization of key metrics, which reduced manual data analysis efforts for the marketing team',
        'Integrated AWS API Gateway with a Java Spring Boot backend to build a reliable API for handling large file uploads. Implemented multi-part uploads with Amazon S3, ensuring that files over 5GB could be uploaded without errors or timeouts, improving efficiency for the business team.',
        'Developed an internal error reporting system using React.js and Java Spring Boot in an Agile (JIRA/Trello) environment. Implemented a user-facing form to capture detailed error reports, and serialized them into JSON using Jackson stored them in PostgreSQL for efficient analysis, handling over 2,000 bug reports.'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git', 'Java Spring Boot', 'AWS API Gateway', 'Amazon S3', 'PostgreSQL', 'Axios']
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="mx-auto">
        
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-green-400">/ </span>
              experience
            </h2>
          </div>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* 左侧公司导航 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => setActiveCompany(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 border-l-2 transition-all duration-300 ${
                    activeCompany === index
                      ? 'border-green-400 bg-green-400/10 text-green-400'
                      : 'border-gray-700 text-gray-400 hover:border-green-400/50 hover:text-green-400 hover:bg-green-400/5'
                  }`}
                >
                  <div className="font-semibold text-sm">{exp.company}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* 右侧详细信息 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCompany}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 职位标题 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {experiences[activeCompany].position} @ 
                    <span className="text-green-400"> {experiences[activeCompany].company}</span>
                  </h3>
                  <div className="text-cyan-400 font-mono text-sm mb-2">
                    {experiences[activeCompany].period}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {experiences[activeCompany].location}
                  </div>
                </div>

                {/* 职责描述 */}
                <div className="space-y-4">
                  {experiences[activeCompany].responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-green-400 text-lg mt-1">▹</span>
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>

                {/* 技术栈 */}
                <div className="pt-4">
                  <p className="text-gray-400 mb-4">Relevant technologies/tools used:</p>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeCompany].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-lg font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 