'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SimpleTest from '../3d/SimpleTest';

const HeroFinal = () => {
  const [displayText, setDisplayText] = useState('beautiful designs');
  const [isArtMode, setIsArtMode] = useState(true);

  // 简单的文字切换效果
  useEffect(() => {
    const interval = setInterval(() => {
      setIsArtMode(prev => !prev);
      setDisplayText(prev => 
        prev === 'beautiful designs' ? 'powerful code' : 'beautiful designs'
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 左侧内容 - 参考 Gazi 的结构 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 标题 - 类似 Gazi 的打字效果，但简化 */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white">hi, </span>
                <span className="block">
                  <span className="text-gradient-artistic">your name</span>
                </span>
                <span className="block text-white">here.|</span>
              </h1>
            </div>

            {/* 副标题 - 动态切换 */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-light-muted">
                I create{' '}
                <motion.span
                  key={displayText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className={isArtMode ? 'text-gradient-artistic' : 'text-gradient-technical'}
                >
                  {displayText}
                </motion.span>
              </p>
            </div>

            {/* 描述 - 参考 Gazi 的格式 */}
            <div className="mb-8">
              <p className="text-lg text-light-dim max-w-xl leading-relaxed">
                我是一个融合<b>设计思维</b>与<b>编程技术</b>的数字创作者。
                专注于创造有影响力的用户体验，在大型项目中贡献过重要功能。
              </p>
            </div>

            {/* 技术栈 - 类似 Gazi 的列表但更简单 */}
            <div className="mb-8">
              <p className="text-light-muted mb-4">Here are some technologies I have been working with:</p>
              <div className="grid grid-cols-2 gap-2 max-w-md">
                {[
                  'React/Next.js',
                  'TypeScript', 
                  'UI/UX Design',
                  'Three.js',
                  'Figma',
                  'Node.js'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center text-light-muted"
                  >
                    <span className="text-primary-electric mr-2">▹</span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA 按钮 - 简化版 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-primary-electric text-primary-electric 
                         hover:bg-primary-electric hover:text-dark-bg transition-all duration-300 rounded-lg"
              >
                <span className="mr-2">📧</span>
                Say hi!
              </motion.a>
              
              <p className="text-sm text-light-dim">
                👉 试试右边的 3D 场景！
              </p>
            </motion.div>
          </motion.div>

          {/* 右侧 3D 区域 - 保持简单 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="h-96 lg:h-[500px] w-full relative">
              {/* 简单的 3D 组件 */}
              <SimpleTest />
              
              {/* 装饰边框 */}
              <div className="absolute inset-0 rounded-lg border border-primary-electric/20 pointer-events-none" />
              
              {/* 状态指示器 */}
              <div className="absolute bottom-4 left-4 bg-dark-surface/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isArtMode ? 'bg-artistic-warm1' : 'bg-technical-cool1'}`} />
                  <span className="text-xs text-light-muted">
                    {isArtMode ? '🎨 Design Mode' : '💻 Code Mode'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroFinal;