'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const technologies = [
    { name: 'Typescript', category: 'language' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Javascript ES6+', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'C#', category: 'language' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-primary">
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
            about me
          </h2>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 左侧文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 space-y-4 leading-relaxed">
              <p>
                I am currently a Software Development Engineer at{' '}
                <span className="text-green-400 font-semibold">Amazon</span>, working in
                the AWS sector under team Route 53. At the same time, I am
                undertaking a part-time Master&apos;s of Science in Software Engineering at{' '}
                <span className="text-green-400 font-semibold">University of Oxford</span>.
              </p>
            </div>

            {/* 技术栈 */}
            <div className="mt-8">
              <p className="text-gray-300 mb-6 text-lg">
                Here are some technologies I have been working with:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300 group hover:text-green-400 transition-colors duration-200"
                  >
                    <span className="text-green-400 mr-3 text-lg">▹</span>
                    <span className="font-mono">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 兴趣爱好 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-700/50"
            >
              <p className="text-gray-400 leading-relaxed">
                Outside of work, I&apos;m interested in following the developments of
                science. I also play a lot of video games. And make TikToks.
              </p>
            </motion.div>
          </motion.div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* 装饰边框 */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-400/30 rounded-lg"></div>
              
              {/* 图片容器 */}
              <div className="relative rounded-lg overflow-hidden bg-secondary border border-gray-700/50">
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative aspect-[3/4]"
                >
                  <Image
                    src="/api/placeholder/400/500" // 替换为你的头像图片
                    alt="Jieyao Chen"
                    fill
                    className="object-cover"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      filter: imageLoaded ? 'grayscale(100%) sepia(10%) hue-rotate(120deg) saturate(110%)' : 'none'
                    }}
                  />
                  
                  {/* 悬浮遮罩 */}
                  <div className="absolute inset-0 bg-green-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* 浮动标签 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm"
              >
                👋 Hey there!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;