'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // 重点项目数据
  const spotlightProjects = [
    {
      title: "High-Concurrency Commerce Platform",
      desc: "Modern e-commerce website design with complete functionality such as shopping cart, payment process, user management and more.",
      techStack: "Java, Redis, and Spring Boot ",
      githubLink: "https://github.com/JOBEBOLDER/High-Concurrency-Commerce-Platform",
      liveLink: "https://ai-design-demo.vercel.app",
      image: "/assets/project1.png", // 你需要添加项目图片
      category: " Code & Design"
    },
    {
      title: "FoodTech-skyBite-System",
      desc: "As an extension of my Superland project, I developed the FoodTech “SkyBite” System to support the operations of the Superland community. I referred to real-world enterprise-level SpringBoot + SSM projects to better understand complete and practical business requirements.",
      techStack: "Next.js, Socket.io, WebRTC, TypeScript",
      githubLink: "https://github.com/JOBEBOLDER/Cloud-Native-FoodTech-SkyBite-System",
      liveLink: "https://collab-whiteboard-demo.vercel.app",
      image: "/assets/project2.png",
      category: "Web App"
    },
    {
    title: "Kanbas Interactive System",
    desc: "A web-based canvas simulation system built with Node.js, Express, MongoDB, React, and Redux, achieving 25% increase in user satisfaction through improved performance and responsive design. Features RESTful APIs for efficient data storage and retrieval with authentication and user profile management.",
    techStack: "React.js, Redux, Node.js, MongoDB, Express",
    githubLink: "https://github.com/JOBEBOLDER/kanbas-react-web-app",
    liveLink: "https://kanbas-react-web-app-jieyao.netlify.app", // 添加你的 Netlify 链接如果有的话
    image: "/assets/project3.png",
    category: "Full Stack Web App"
    }
  ];

  // 其他项目数据
  const otherProjects = [
    {
      title: "Studyroom Matcher",
      desc: "Designed and built a mobile app prototype for virtual study room matching integrating customizable filters (subject, environment, session time) and real-time matching features.",
      techStack: "prototype, Figma, React Native,HCI-driven Design, User Research",
      githubLink: "https://github.com/JOBEBOLDER/Studyroom-Matcher",
      liveLink: "https://studyroom-matcher.vercel.app"
    },
    {
      title: "employee management system",
      desc: "Enterprise-level data analysis dashboard supporting various chart types and real-time data updates.",
      techStack: "python, Django, React, Chart.js, HTML, Dockerfile",
      githubLink: "https://github.com/JOBEBOLDER/employee_management_project",
      liveLink: ""
    },
    {
      title: "Building Scalable Distributed Systems",
      desc: "Implementations of distributed systems concepts including socket programming, key-value stores, and replication with consistency protocols。",
      techStack: "Java, Shell",
      githubLink: "https://github.com/JOBEBOLDER/finalize_6650_distributed_system",
    },
    {
      title: "AI 聊天机器人",
      desc: "My undergraduate architecture design exploration project was a spatial exploration aimed at creating a place that enhances the food experience.",
      techStack:"prototype, Figma, React Native,HCI-driven Design, User Research, Rhino, CAD, Photoshop, Sketchup",
      githubLink: "https://github.com/JOBEBOLDER/SUPERLAND",
      liveLink: ""
    },
    {
      title: "Personal Task Manager App",
      desc: "A simple React Native mobile application built with Expo and TypeScript that functions as a personal task manager. This app allows users to create, view, edit, and delete tasks, as well as mark tasks as completed or pending.",
      techStack: "React Native, Expo, TypeScript",
      githubLink: "https://github.com/JOBEBOLDER/Task_manager_app",
      liveLink: "https://personal-task-manager.vercel.app"
    },
    {
      title: "Cathy_Personal_Website",
      desc: "cathy personal website display jieyao's work。",
      techStack: "TypeScript, javascript,React, Next.js, Tailwind CSS",
      githubLink: "https://github.com/JOBEBOLDER/Cathy_Personal_Website",
      liveLink: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mr-6">
              / featured projects
            </h2>
            <div className="flex-1 h-px bg-dark-border max-w-xs"></div>
          </div>
        </motion.div>

        {/* 重点项目轮播 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          
          {/* 项目导航 */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-dark-surface p-1 rounded-lg">
              {spotlightProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 rounded transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-primary-electric text-white'
                      : 'text-light-muted hover:text-white'
                  }`}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* 当前项目展示 */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* 项目图片 */}
            <div className="relative group">
              <div className="aspect-video bg-dark-card rounded-lg overflow-hidden border border-dark-border">
                {/* 项目图片占位符 */}
                <div className="w-full h-full bg-gradient-to-br from-primary-electric/20 to-primary-creative/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-light-muted">Project Screenshot</p>
                  </div>
                </div>
                
                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <a
                        href={spotlightProjects[activeProject].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {spotlightProjects[activeProject].liveLink && (
                        <a
                          href={spotlightProjects[activeProject].liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary-electric/20 backdrop-blur-sm rounded-lg text-primary-electric hover:bg-primary-electric/30 transition-all"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 项目信息 */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-primary-electric mb-2">
                  {spotlightProjects[activeProject].category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {spotlightProjects[activeProject].title}
                </h3>
                <p className="text-lg text-light-muted leading-relaxed">
                  {spotlightProjects[activeProject].desc}
                </p>
              </div>

              <div>
                <h4 className="text-light-text font-semibold mb-2">Tech Stack:</h4>
                <p className="text-light-muted">
                  {spotlightProjects[activeProject].techStack}
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={spotlightProjects[activeProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-primary-electric text-primary-electric hover:bg-primary-electric hover:text-white transition-all duration-300 rounded-lg"
                >
                  <Github size={20} />
                  View Code
                </a>
                {spotlightProjects[activeProject].liveLink && (
                  <a
                    href={spotlightProjects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-electric text-white hover:bg-primary-electric/80 transition-all duration-300 rounded-lg"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 其他项目网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mr-6">
              / other projects
            </h3>
            <div className="flex-1 h-px bg-dark-border max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-primary-electric/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* 项目图标和链接 */}
                <div className="flex justify-between items-center mb-4">
                  <FolderOpen className="text-primary-electric" size={32} />
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-muted hover:text-primary-electric transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-muted hover:text-primary-electric transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* 项目标题 */}
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-electric transition-colors">
                  {project.title}
                </h4>

                {/* 项目描述 */}
                <p className="text-light-muted text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* 技术栈 */}
                <div className="text-xs text-light-dim">
                  {project.techStack}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;