'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-lg bg-theme-surface border border-theme-border text-theme-muted hover:text-primary-electric hover:border-primary-electric/50 theme-transition"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* 背景光晕效果 */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-primary-electric/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: theme === 'dark' ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 