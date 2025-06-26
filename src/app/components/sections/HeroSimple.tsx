'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SimpleTest from '../3d/SimpleTest'; // 假设这是你的3D测试组件

const HeroSimple = () => {
  const [canvasMode, setCanvasMode] = useState<'art' | 'code'>('art');

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card" />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* 左侧文字内容 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block">hi, </span>
                <span className="text-gradient-artistic">your name</span>
                <span className="block">here.|</span>
              </h1>

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

              <p className="text-lg text-light-dim mt-4 max-w-2xl">
                我是一个融合设计思维与编程技术的数字创作者。擅长将创意想法转化为
                <span className="text-primary-electric"> 用户体验优秀 </span>
                的数字产品，专注于
                <span className="text-primary-creative"> UI/UX设计 </span>
                和
                <span className="text-primary-code"> 前端开发</span>。
              </p>

              {/* 技能标签 */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: 'UI/UX Design', color: 'artistic' },
                  { label: 'React/Next.js', color: 'technical' },
                  { label: 'TypeScript', color: 'technical' },
                  { label: 'Figma', color: 'artistic' },
                  { label: 'Three.js', color: 'technical' }
                ].map((skill) => (
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
              </div>

              {/* CTA 按钮 */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-artistic text-white font-semibold rounded-lg 
                           shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎨 查看设计作品
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-technical text-white font-semibold rounded-lg 
                           shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💻 探索代码项目
                </motion.button>
              </div>
            </motion.div>

            {/* 右侧 3D 场景 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-[60vh] lg:h-[80vh] w-full"
            >
              <SimpleTest />
              
              {/* 测试说明 */}
              <div className="absolute bottom-4 left-4 bg-dark-surface/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-light-muted text-sm">
                  🎮 3D 测试场景 - 可以拖拽查看旋转的立方体
                </p>
                <button 
                  onClick={() => setCanvasMode(prev => prev === 'art' ? 'code' : 'art')}
                  className="mt-2 px-3 py-1 bg-primary-electric text-white rounded text-xs"
                >
                  切换模式: {canvasMode === 'art' ? '🎨 艺术' : '💻 代码'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;