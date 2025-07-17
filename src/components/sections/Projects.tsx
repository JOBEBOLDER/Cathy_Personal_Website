'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Folder } from 'lucide-react';
import "../../styles/components/Projects.css";
import FadeInSection from "./FadeInSection";

interface SpotlightProject {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open: string;
  image: string;
}

interface Project {
  desc: string;
  techStack: string;
  link: string;
  open: string;
}

interface SpotlightProjects {
  [key: string]: SpotlightProject;
}

interface Projects {
  [key: string]: Project;
}

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 主要项目（轮播展示）- Spotlight projects
  const spotlightProjects: SpotlightProjects = {
    "portfolio.js": {
      title: "portfolio.js",
      desc: "Portfolio.js is a TSX library that helps with clear and succinct data presentation that is easy to navigate. Built by Jieyao Chen.",
      techStack: "REACT.JS + TYPESCRIPT",
      link: "https://github.com/JOBEBOLDER/Cathy_Personal_Website",
      open: "https://portfolio.js.demo",
      image: "/assets/portfolio.png"
    },
    "Kanbas System": {
      title: "kanbas teaching management system",
      desc: "A comprehensive admin dashboard featuring role-based management, analytics, and more.",
      techStack: "REACT.JS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MONGO.DB",
      link: "https://github.com/JOBEBOLDER/Kanbas_teaching_management_system?tab=readme-ov-file",
      open: "https://kanbas-react-web-app-jieyao.netlify.app",
      image: "/assets/kanbas.png"
    },
    "SkyBite System": {
      title: "cloud native foodtech skybite system",
      desc: "A cloud native foodtech system that allows users to order food and track their orders.",
      techStack: "JAVASCRIPT, CSS, JAVA, VIM",
      link: "https://github.com/JOBEBOLDER/Cloud-Native-FoodTech-SkyBite-System",
      open: "https://ai-chat.demo",
      image: "/assets/superland.png"
    }
  };

  // 其他项目
  const projects: Projects = {
    "Employee Management System": {
      desc: "Employee Management System with APIs & Visualization",
      techStack: "Python, HTML, Docker",
      link: "https://github.com/JOBEBOLDER/employee_management_project",
      open: "https://tdsb-homework.demo"
    },
    "Personal Task Manager App.": {
      desc: "This app allows users to create, view, edit, and delete tasks, as well as mark tasks as completed or pending.",
      techStack: "Typescript, javascript, html, css",
      link: "https://github.com/JOBEBOLDER/Task_manager_app",
      open: "https://adam-ai.demo"
    },
    "📚 Study Room Matcher": {
      desc: "Study Room Matcher is a prototype mobile app aimed at solving a common problem for students: finding the right virtual study environment.",
      techStack: "Prototype, Figma, React Native, Expo",
      link: "https://github.com/JOBEBOLDER/Studyroom_matcher",
      open: "https://www.figma.com/proto/Q3xL59s9fMxiS6NkXsiASZ/studyroom_matcher?node-id=44-332&p=f&t=12zY7N9VmHCoAmiH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A285&show-proto-sidebar=1"
    },
    "High-Concurrency Commerce Platform": {
      desc: "developed high-performance and scalable backend solutions using Java, Redis, and Spring Boot to optimize real-time eCommerce transactions.",
      techStack: "Java, Lua",
      link: "https://github.com/JOBEBOLDER/High-Concurrency-Commerce-Platform",
      open: ""
    },
    "Building Scalable Distributed Systems": {
      desc: "Implementations of distributed systems concepts including socket programming, key-value stores, and replication with consistency protocols.",
      techStack: "Java, shell",
      link: "https://github.com/JOBEBOLDER/Building-Scalable-Distributed-Systems",
      open: ""
    },
    "MasterMind Game chessboard": {
      desc: "Developed a 'MasterMind Code Game' with Python, enhancing gameplay through object-oriented design and the Turtle graphics library.",
      techStack: "python, shell, html",
      link: "https://github.com/JOBEBOLDER/MasterMind-Code-Game-Development-",
      open: ""
    }
  };

  const spotlightKeys = Object.keys(spotlightProjects);

  // 开始自动轮播
  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % spotlightKeys.length);
    }, 5000);
  };

  // 停止自动轮播
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 自动轮播
  useEffect(() => {
    if (!isHovering) {
      startAutoPlay();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, spotlightKeys.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % spotlightKeys.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + spotlightKeys.length) % spotlightKeys.length);
  };

  const currentSpotlight = spotlightProjects[spotlightKeys[currentProject]];

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ pet projects</span>
      </div>

      {/* Spotlight Carousel */}
      <div 
        className="carousel slide"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="carousel-container">
          {/* 图片容器 */}
          <div className="carousel-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="carousel-item active"
              >
                <img
                  src={currentSpotlight.image}
                  alt={currentSpotlight.title}
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/1000x500/64ffda/0a192f?text=${encodeURIComponent(currentSpotlight.title)}`;
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevProject}
              className="carousel-control-prev"
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = 'rgba(34, 197, 94, 0.8)';
                target.style.borderColor = '#22c55e';
                target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = 'rgba(0, 0, 0, 0.5)';
                target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="carousel-control-next"
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = 'rgba(34, 197, 94, 0.8)';
                target.style.borderColor = '#22c55e';
                target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = 'rgba(0, 0, 0, 0.5)';
                target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="carousel-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              {spotlightKeys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: index === currentProject ? 'var(--green-bright)' : 'var(--slate)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* 文字内容容器 */}
          <div className="carousel-caption">
            <motion.h3
              key={`title-${currentProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentSpotlight.title}
            </motion.h3>
            <motion.p
              key={`desc-${currentProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentSpotlight.desc}
            </motion.p>
            <motion.p
              key={`tech-${currentProject}`}
              className="techStack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {currentSpotlight.techStack}
            </motion.p>
            <motion.div
              key={`links-${currentProject}`}
              className="external-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={currentSpotlight.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              {currentSpotlight.open && (
                <a
                  href={currentSpotlight.open}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={key} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <Folder size={35} />
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={projects[key].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-icon"
                    >
                      <Github size={20} />
                    </a>
                    {projects[key].open && (
                      <a
                        href={projects[key].open}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="open-icon"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;