'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DigitalArtistScene from '../3d/DigitalArtistScene';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* 背景装饰点 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `twinkle 3s infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 左侧文字内容 */}
          <motion.div 
            className="text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={fadeInLeft}
          >
            <motion.div 
              className="mb-6"
              variants={fadeInUp}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient-artistic">Jieyao</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                <span className="text-gradient-technical">Digital Artist</span>
              </h2>
            </motion.div>

            <motion.p 
              className="text-xl text-slate-300 mb-8 max-w-xl"
              variants={fadeInUp}
            >
              I create beautiful digital experiences by blending creative design with cutting-edge technology. 
              Passionate about turning ideas into interactive realities.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <motion.a
                href="#projects"
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* 技能标签 */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              {['React', 'TypeScript', 'UI/UX Design', 'Three.js', 'Next.js', 'Python'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800 text-green-400 rounded-full text-sm font-medium border border-green-400/30"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧 3D 场景 */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial="initial"
            animate="animate"
            variants={fadeInRight}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700">
              <DigitalArtistScene />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-slate-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Hero;