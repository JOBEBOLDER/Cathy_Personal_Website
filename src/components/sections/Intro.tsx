'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WaveGrid from '../3d/WaveGrid';
import "../../styles/components/Intro.css";

const Intro = () => {
  const [displayText, setDisplayText] = useState('beautiful designs');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "hi, Jieyao here.";

  // 打字效果
  useEffect(() => {
    // 延迟开始打字效果，等待页面动画完成
    const startDelay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
        }
      }, 80); // 每80ms显示一个字符

      return () => clearInterval(timer);
    }, 1700); // 1.7秒后开始，配合motion动画

    return () => clearTimeout(startDelay);
  }, [fullText]);

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
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="intro-large-title">
            {typedText.split('').map((char, index) => {
              // 判断是否是 "jieyao" 部分（位置4-9）
              const isNamePart = index >= 4 && index < 10;
              return (
                <span
                  key={index}
                  className={isNamePart ? 'intro-name' : 'intro-title'}
                >
                  {char}
                </span>
              );
            })}
            {typedText.length < fullText.length && (
              <span className="cursor blinking">|</span>
            )}
          </h1>
        </motion.div>

        {/* 副标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
        >
          <p className="intro-subtitle">
            I create{' '}
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="intro-subtitlename"
              
            >
              {displayText}
            </motion.span>
            {' '}sometimes.
          </p>
        </motion.div>

        {/* 描述 */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 1.0, ease: "easeOut" }}
          className="mb-6 text-center"
        >
          <p className="intro-desc">
            My personality is like this flowing, algorithm-sculpted geometric mesh — a blend of logic and emotion, structured but never rigid, 
            stretching freely but within the bounds of order.
          </p>
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 1.0, ease: "easeOut" }}
          className="mb-4"
        >
          <motion.a
            href="mailto:chen.jieyao@northeastern.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="intro-contact"
          >
            <span className="mr-2">📧</span>
            Say hi!
          </motion.a>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;