'use client';

import { useState, useEffect } from 'react';
import SimpleTest from '../3d/SimpleTest';
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';

const Hero = () => {
  const [canvasMode, setCanvasMode] = useState<'art' | 'code'>('art');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟加载完成
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCanvasClick = () => {
    setCanvasMode(prev => prev === 'art' ? 'code' : 'art');
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card" />
      
      {/* 动态背景粒子 */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 bg-primary-electric rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10
            }}
            animate={{
              y: -10,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* 左侧文字内容 */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={textVariants}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="block">hi, </span>
                  <span className="text-gradient-artistic">your name</span>
                  <span className="block">here.|</span>
                </h1>
              </motion.div>

              <motion.div variants={textVariants}>
                <p className="text-xl md:text-2xl text-light-muted mt-6 leading-relaxed">
                  I create 
                  <span className={`inline-block transition-all duration-500 ${
                    canvasMode === 'art' 
                      ? 'text-gradient-artistic' 
                      : 'text-gradient-technical'
                  }`}>
                    {canvasMode === 'art' ? ' beautiful designs' : ' powerful code'}
                  </span>
                  <br />
                  where creativity meets technology.
                </p>
              </motion.div>

              <motion.div variants={textVariants}>
                <p className="text-lg text-light-dim mt-4 max-w-2xl">
                  我是一个融合设计思维与编程技术的数字创作者。擅长将创意想法转化为
                  <span className="text-primary-electric"> 用户体验优秀 </span>
                  的数字产品，专注于
                  <span className="text-primary-creative"> UI/UX设计 </span>
                  和
                  <span className="text-primary-code"> 前端开发</span>。
                </p>
              </motion.div>

              {/* 技能标签 */}
              <motion.div variants={textVariants} className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: 'UI/UX Design', color: 'artistic' },
                  { label: 'React/Next.js', color: 'technical' },
                  { label: 'TypeScript', color: 'technical' },
                  { label: 'Figma', color: 'artistic' },
                  { label: 'Three.js', color: 'technical' }
                ].map((skill, index) => (
                  <motion.span
                    key={skill.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      skill.color === 'artistic'
                        ? 'border-artistic-warm1 text-artistic-warm1 hover:bg-artistic-warm1 hover:text-dark-bg'
                        : 'border-technical-cool1 text-technical-cool1 hover:bg-technical-cool1 hover:text-dark-bg'
                    }`}
                  >
                    {skill.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA 按钮 */}
              <motion.div variants={textVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-artistic text-white font-semibold rounded-lg 
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:shadow-artistic-warm1/25"
                >
                  🎨 查看设计作品
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-technical text-white font-semibold rounded-lg 
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:shadow-technical-cool1/25"
                >
                  💻 探索代码项目
                </motion.button>
              </motion.div>

              {/* 模式切换提示 */}
              <motion.div variants={textVariants} className="mt-6">
                <p className="text-sm text-light-dim">
                  👉 拖拽右侧的 3D 场景，点击画布切换 
                  <span className="text-primary-electric">艺术</span> / 
                  <span className="text-primary-creative">代码</span> 模式
                </p>
              </motion.div>
            </motion.div>

            {/* 右侧 3D 场景 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-[60vh] lg:h-[80vh] w-full"
            >
              {!isLoaded ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-primary-electric border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-light-muted">Loading 3D Scene...</p>
                  </div>
                </div>
              ) : (
                <SimpleTest />
              )}

              {/* 3D 场景装饰边框 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                  canvasMode === 'art' 
                    ? 'shadow-[0_0_30px_rgba(255,107,107,0.3)]' 
                    : 'shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                }`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-light-muted text-center"
        >
          <div className="w-6 h-10 border-2 border-light-muted rounded-full mx-auto mb-2 relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-light-muted rounded-full absolute left-1/2 top-1 transform -translate-x-1/2"
            />
          </div>
          <p className="text-xs">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;