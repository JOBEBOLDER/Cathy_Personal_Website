'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-4xl font-bold">
            <span className="text-gradient-artistic">Jieyao</span>
            <span className="text-primary-electric">.</span>
          </div>
        </motion.div>

        {/* 加载动画 */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-dark-border rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary-electric rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* 加载文字 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-light-muted mt-4"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 