'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-electric/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-creative/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* 主要内容 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo 和描述 */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-gradient-artistic">Jieyao</span>
                <span className="text-primary-electric">.</span>
              </div>
              <p className="text-light-muted max-w-md leading-relaxed">
                A passionate developer and designer creating meaningful digital experiences. 
                Always learning, always building.
              </p>
            </motion.div>
          </div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-light-muted hover:text-primary-electric transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-dark-border mb-8" />

        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 版权信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-light-dim text-sm flex items-center gap-2"
          >
            <span>© 2024 Jieyao Chen. Made with</span>
            <Heart className="text-primary-creative" size={16} />
            <span>and Next.js</span>
          </motion.div>

          {/* 回到顶部按钮 */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-dark-surface border border-dark-border text-light-muted hover:text-primary-electric hover:border-primary-electric/50 transition-all duration-300 rounded-lg"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 