'use client';

import { useState } from 'react';
import { Github, Mail, Linkedin, Edit3 } from 'lucide-react';
import "../../styles/components/Navigation.css";

const Navigation = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo/Brand - 左侧 */}
          <div className="navbar-brand">
            <a href="#" className="text-xl font-bold">
              Jieyao Chen
            </a>
          </div>

          {/* 导航链接 - 中间 */}
          <div className="flex items-center space-x-12">
            <a 
              href="#intro" 
              className="nav-link font-medium"
              onClick={(e) => handleNavClick(e, '#intro')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="nav-link font-medium"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="nav-link font-medium"
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="nav-link font-medium"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Projects
            </a>
          </div>

          {/* 社交链接 - 右侧 */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:chen.jieyao@northeastern.edu" 
              className="social-link p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/JOBEBOLDER" 
              className="social-link p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jieyao-chen/" 
              className="social-link p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="social-link p-2"
            >
              <Edit3 size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 