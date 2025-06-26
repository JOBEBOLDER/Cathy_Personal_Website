'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-display font-bold"
          >
            <span className="text-gradient-artistic">Your</span>
            <span className="text-gradient-technical">Name</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-light-muted hover:text-primary-electric transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-light-muted hover:text-primary-creative transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-light-text p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isMenuOpen ? 0 : -20,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
                className="block text-light-muted hover:text-primary-electric transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-4 pt-4 border-t border-dark-border">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isMenuOpen ? 0 : 20,
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: (navItems.length + index) * 0.1 }}
                  className="text-light-muted hover:text-primary-creative transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;