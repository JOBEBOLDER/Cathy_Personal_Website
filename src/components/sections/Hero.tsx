'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WaveGrid from '../3d/WaveGrid';

const Hero = () => {
  const [displayText, setDisplayText] = useState('beautiful designs');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 简单的文字切换效果
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev === 'beautiful designs' ? 'powerful code' : 'beautiful designs'
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 鼠标移动效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 50,
            y: -mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* 动态网格装饰 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <WaveGrid />
        </motion.div>

        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">hi, </span>
            <span className="text-green-400">jieyao</span>
            <span className="text-white"> here.|</span>
          </h1>
        </motion.div>

        {/* 副标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300">
            I create{' '}
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-green-400"
            >
              {displayText}
            </motion.span>
            {' '}sometimes.
          </p>
        </motion.div>

        {/* 描述 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a software engineer from Boston, MA. I&apos;m fascinated by large-scale, 
            high-impact products and contributed to major feature launches in industry-leading 
            services as well as apps that have 100M+ installs.
          </p>
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <motion.a
            href="mailto:chen.jieyao@northeastern.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-16 py-12 border-2 border-green-400 text-green-400 
                     hover:bg-green-400 hover:text-gray-900 transition-all duration-300 rounded-lg
                     font-semibold text-lg shadow-lg hover:shadow-green-400/25"
          >
            <span className="mr-2">📧</span>
            Say hi!
          </motion.a>
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;