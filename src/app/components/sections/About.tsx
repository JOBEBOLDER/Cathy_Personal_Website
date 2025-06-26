'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 技术栈数据
  const techStack = [
    'TypeScript',
    'React/Next.js', 
    'Python',
    'Node.js',
    'Figma',
    'Three.js',
    'TailwindCSS',
    'MongoDB'
  ];

  // 动画变量
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              / about me
            </h2>
            <div className="flex-1 h-px bg-dark-border max-w-xs"></div>
          </div>
        </motion.div>

        {/* 主要内容 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          
          {/* 左侧文字内容 */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 第一段 */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-light-muted leading-relaxed">
                我目前是一名 <strong className="text-primary-electric">软件开发工程师</strong>，
                在 <a href="#" className="text-primary-creative hover:underline">某知名科技公司</a> 工作，
                专注于前端开发和用户体验设计。同时，我正在攻读
                <strong className="text-primary-electric"> 计算机科学硕士学位</strong>，
                深入研究人机交互和界面设计。
              </p>
            </motion.div>

            {/* 技术栈部分 */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-light-muted mb-4">
                Here are some technologies I have been working with:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 max-w-md">
                {techStack.map((tech, index) => (
                  <motion.li
                    key={tech}
                    variants={itemVariants}
                    className="flex items-center text-light-muted text-base"
                  >
                    <span className="text-primary-electric mr-3 text-sm">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 第二段 */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-light-muted leading-relaxed">
                在工作之外，我热衷于关注设计趋势和新技术发展。我也喜欢玩游戏、
                制作创意视频，并且经常参与开源项目的贡献。我相信好的设计不仅仅是
                美观，更应该解决实际问题，创造价值。
              </p>
            </motion.div>

            {/* 成就或亮点 */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                  <div className="text-2xl font-bold text-primary-electric mb-1">3+</div>
                  <div className="text-sm text-light-dim">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                  <div className="text-2xl font-bold text-primary-creative mb-1">10+</div>
                  <div className="text-sm text-light-dim">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                  <div className="text-2xl font-bold text-primary-code mb-1">50K+</div>
                  <div className="text-sm text-light-dim">Lines of Code</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 右侧图片 */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative group">
              {/* 占位符背景 */}
              <div className="w-full h-80 bg-dark-card rounded-lg overflow-hidden relative">
                
                {/* 如果有照片，用这个 */}
                {/* <img 
                  src="/path-to-your-photo.jpg"
                  alt="Your Name"
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                /> */}
                
                {/* 临时占位符 */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-electric/20 to-primary-creative/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-electric/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <p className="text-light-muted text-sm">Your Photo Here</p>
                  </div>
                </div>
                
                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-primary-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* 装饰边框 */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-electric to-primary-creative rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
            </div>

            {/* 额外信息卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-dark-card border border-dark-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-primary-code rounded-full animate-pulse" />
                <span className="text-sm text-light-muted">Currently Available</span>
              </div>
              <p className="text-xs text-light-dim">
                Open to new opportunities and collaborations
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;