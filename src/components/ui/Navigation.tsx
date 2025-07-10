'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin, FileText } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const navItems = useMemo(() => [
    { id: 'intro', label: 'Home', href: '#intro' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ], []);

  const socialLinks = useMemo(() => [
    { icon: Mail, href: 'mailto:jieyao.chen@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/JOBEBOLDER', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jieyao-chen', label: 'LinkedIn' },
    { icon: FileText, href: '/resume.pdf', label: 'Resume' },
  ], []);

  // 监听滚动位置，更新活跃状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-gray-700/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Jieyao Chen
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-accent-green'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-700/30"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700/30">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation; 