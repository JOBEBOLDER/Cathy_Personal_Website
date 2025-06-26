'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // 重点项目数据
  const spotlightProjects = [
    {
      title: "AI 设计助手",
      desc: "一个基于机器学习的设计工具，能够自动生成UI组件和颜色搭配方案。使用React和TensorFlow.js构建，帮助设计师提高工作效率。",
      techStack: "React.js, TensorFlow.js, Node.js, MongoDB",
      githubLink: "https://github.com/yourusername/ai-design-assistant",
      liveLink: "https://ai-design-demo.vercel.app",
      image: "/assets/project1.png", // 你需要添加项目图片
      category: "AI & Design"
    },
    {
      title: "实时协作平台",
      desc: "一个多人实时协作的白板应用，支持绘图、文字、形状等多种工具。集成了WebRTC和Socket.io实现低延迟的实时同步。",
      techStack: "Next.js, Socket.io, WebRTC, TypeScript",
      githubLink: "https://github.com/yourusername/collab-whiteboard",
      liveLink: "https://collab-whiteboard-demo.vercel.app",
      image: "/assets/project2.png",
      category: "Web App"
    },
    {
      title: "3D 作品集生成器",
      desc: "使用Three.js创建的交互式3D作品集展示工具，允许用户拖拽、旋转查看项目，并支持自定义主题和动画效果。",
      techStack: "Three.js, React Three Fiber, Framer Motion",
      githubLink: "https://github.com/yourusername/3d-portfolio-generator",
      liveLink: "https://3d-portfolio-demo.vercel.app",
      image: "/assets/project3.png",
      category: "3D & Creative"
    }
  ];

  // 其他项目数据
  const otherProjects = [
    {
      title: "响应式电商界面",
      desc: "现代化的电商网站设计，包含购物车、支付流程、用户管理等完整功能。",
      techStack: "React, Stripe API, Tailwind CSS",
      githubLink: "https://github.com/yourusername/ecommerce-ui",
      liveLink: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "数据可视化仪表板",
      desc: "企业级数据分析仪表板，支持多种图表类型和实时数据更新。",
      techStack: "D3.js, React, Node.js, PostgreSQL",
      githubLink: "https://github.com/yourusername/data-dashboard",
      liveLink: ""
    },
    {
      title: "移动端 UI 组件库",
      desc: "一套完整的移动端React组件库，包含30+常用组件和完善的文档。",
      techStack: "React Native, Storybook, TypeScript",
      githubLink: "https://github.com/yourusername/mobile-ui-kit",
      liveLink: "https://ui-kit-storybook.vercel.app"
    },
    {
      title: "AI 聊天机器人",
      desc: "集成GPT API的智能客服机器人，支持多轮对话和上下文理解。",
      techStack: "Python, FastAPI, OpenAI API, Vue.js",
      githubLink: "https://github.com/yourusername/ai-chatbot",
      liveLink: ""
    },
    {
      title: "音乐可视化器",
      desc: "实时音频可视化工具，将音乐转换为动态的视觉效果。",
      techStack: "Web Audio API, Canvas, Three.js",
      githubLink: "https://github.com/yourusername/music-visualizer",
      liveLink: "https://music-viz-demo.vercel.app"
    },
    {
      title: "区块链投票系统",
      desc: "基于以太坊的透明投票系统，确保投票过程的安全性和不可篡改性。",
      techStack: "Solidity, Web3.js, React, Metamask",
      githubLink: "https://github.com/yourusername/blockchain-voting",
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