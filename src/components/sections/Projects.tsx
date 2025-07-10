'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // 主要项目（轮播展示）
  const featuredProjects = [
    {
      id: 1,
      title: 'portfolio.js',
      description: 'Portfolio.js is a small JS library that helps with clear and succinct data presentation that is easy to navigate. Built by Gazi Jarin.',
      tech: 'NODE.JS (EXPRESS.JS)',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/username/portfolio.js',
      demo: 'https://portfolio.js.demo',
      type: 'Library',
      buttons: ['examples', 'api', 'get started']
    },
    {
      id: 2,
      title: 'React Dashboard',
      description: 'A comprehensive admin dashboard built with React, featuring real-time data visualization, user management, and analytics.',
      tech: 'REACT.JS + TYPESCRIPT',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/username/react-dashboard',
      demo: 'https://dashboard.demo',
      type: 'Web App',
      buttons: ['demo', 'docs', 'source']
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      description: 'Modern chat interface powered by AI, featuring real-time conversations, message history, and smart responses.',
      tech: 'NEXT.JS + OPENAI API',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/username/ai-chat',
      demo: 'https://ai-chat.demo',
      type: 'AI Tool',
      buttons: ['try it', 'github', 'docs']
    }
  ];

  // 其他项目
  const otherProjects = [
    {
      title: 'TDSB Homework Management Interface',
      description: 'A homework management system for students and teachers.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/tdsb-homework',
      demo: 'https://tdsb-homework.demo'
    },
    {
      title: 'Adam A.I.',
      description: 'A self-learning A.I. that learns to play games autonomously.',
      tech: ['Python', 'TensorFlow', 'OpenAI Gym'],
      github: 'https://github.com/username/adam-ai',
      demo: 'https://adam-ai.demo'
    },
    {
      title: 'Distributed Logging and Monitoring System',
      description: 'A scalable logging system for microservices architecture.',
      tech: ['Go', 'Docker', 'Kubernetes'],
      github: 'https://github.com/username/logging-system'
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
          <h2 className="section-title">
            <span className="text-green-400">/ </span>
            pet projects
          </h2>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-secondary border border-gray-700/50 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
            >
              {/* 项目图标 */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-green-400" size={24} />
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
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

              {/* 项目描述 */}
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

              {/* 技术栈 */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-400/10 text-green-400 text-xs rounded-lg font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;