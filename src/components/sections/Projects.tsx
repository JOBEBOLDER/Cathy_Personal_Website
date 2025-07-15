'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Folder } from 'lucide-react';
import "../../styles/components/Projects.css";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // 主要项目（轮播展示）
  const featuredProjects = [
    {
      id: 1,
      title: 'portfolio.js',
      description: 'Portfolio.js is a TSX library that helps with clear and succinct data presentation that is easy to navigate. Built by Jieyao Chen.',
      tech: 'REACT.JS + TYPESCRIPT',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/JOBEBOLDER/Cathy_Personal_Website',
      demo: 'https://portfolio.js.demo',
      type: 'Library',
      buttons: ['examples', 'api', 'get started']
    },
    {
      id: 2,
      title: 'Kanbas teaching management system',
      description: 'A comprehensive admin dashboard featuring role-based management, analytics, and more.',
      tech: 'REACT.JS, Javascript, EXPRESS.JS, NODE.JS, MONGO.DB',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/JOBEBOLDER/Kanbas_teaching_management_system?tab=readme-ov-file',
      demo: 'https://kanbas-react-web-app-jieyao.netlify.app',
      type: 'Web App',
      buttons: ['demo', 'docs', 'source']
    },
    {
      id: 3,
      title: 'Cloud Native FoodTech SkyBite System',
      description: 'A cloud native foodtech system that allows users to order food and track their orders.',
      tech: 'Javascript,CSS, Java, Vim',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/JOBEBOLDER/Cloud-Native-FoodTech-SkyBite-System',
      demo: 'https://ai-chat.demo',
      type: 'AI Tool',
      buttons: ['try it', 'github', 'docs']
    }
  ];

  // 其他项目
  const otherProjects = [
    {
      title: 'Employee Management System',
      description: 'Employee Management System with APIs & Visualization',
      tech: ['Python, HTML, Docker'],
      github: 'https://github.com/JOBEBOLDER/employee_management_project',
      demo: 'https://tdsb-homework.demo'
    },
    {
      title: 'Personal Task Manager App.',
      description: 'This app allows users to create, view, edit, and delete tasks, as well as mark tasks as completed or pending.',
      tech: ['Typescript'],
      github: 'https://github.com/JOBEBOLDER/Task_manager_app',
      demo: 'https://adam-ai.demo'
    },
    {
      title: '📚 Study Room Matcher',
      description: 'Study Room Matcher is a prototype mobile app aimed at solving a common problem for students: finding the right virtual study environment.',
      tech: ['Prototype, Figma, React Native, Expo'],
      github: 'https://github.com/JOBEBOLDER/Studyroom_matcher'
    },
    {
      title: 'High-Concurrency Commerce Platform',
      description: 'developed high-performance and scalable backend solutions using Java, Redis, and Spring Boot to optimize real-time eCommerce transactions.',
      tech: ['Java, Lua'],
      github: 'https://github.com/JOBEBOLDER/High-Concurrency-Commerce-Platform'
    },
    {
      title: 'Building Scalable Distributed Systems',
      description: 'Implementations of distributed systems concepts including socket programming, key-value stores, and replication with consistency protocols.',
      tech: ['Java, shell'],
      github: 'https://github.com/JOBEBOLDER/Building-Scalable-Distributed-Systems'
    },
    {
      title: 'MasterMind Game chessboard',
      description: 'Developed a "MasterMind Code Game" with Python, enhancing gameplay through object-oriented design and the Turtle graphics library.',
      tech: ['python,shell,htl'],
      github: 'https://github.com/JOBEBOLDER/MasterMind-Code-Game-Development-'
    }

  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              pet projects
            </h2>
          </div>
        </motion.div>

        {/* 主项目轮播 */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-green-400/20">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* 项目类型标签 */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-medium mb-6"
                >
                  {featuredProjects[currentProject].type}
                </motion.div>

                {/* 项目标题 */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  {featuredProjects[currentProject].title}
                </motion.h3>

                {/* 项目描述 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                  {featuredProjects[currentProject].description}
                </motion.p>

                {/* 技术栈 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg text-sm font-mono">
                    {featuredProjects[currentProject].tech}
                  </span>
                </motion.div>

                {/* 项目按钮 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center space-x-4 mb-8"
                >
                  {featuredProjects[currentProject].buttons.map((button, index) => (
                    <motion.button
                      key={button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-gray-500 text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-200 rounded-lg"
                    >
                      {button}
                    </motion.button>
                  ))}
                </motion.div>

                {/* 项目链接 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-center space-x-6"
                >
                  <motion.a
                    href={featuredProjects[currentProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={featuredProjects[currentProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* 导航按钮 */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            {/* 轮播指示器 */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 其他项目网格 */}
        <div className="projects-container">
          <ul className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="project-card bg-secondary border border-gray-700/50 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
              >
                {/* 项目头部 */}
                <div className="card-header flex items-center justify-between mb-4">
                  <div className="folder-icon">
                    <Folder className="text-green-400" size={35} />
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* 项目标题 */}
                <div className="card-title text-xl font-bold text-white mb-3">{project.title}</div>

                {/* 项目描述 */}
                <div className="card-desc text-gray-400 mb-4 line-clamp-3">{project.description}</div>

                {/* 技术栈 */}
                <div className="card-tech">
                  {project.tech.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < project.tech.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;