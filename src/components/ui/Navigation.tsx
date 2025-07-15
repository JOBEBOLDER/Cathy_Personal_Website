'use client';

import { useState } from 'react';
import { Menu, X, Github, Mail, Linkedin, Edit3 } from 'lucide-react';
import "../../styles/components/Header.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo/Brand */}
          <div className="navbar-brand">
            <a href="#" className="text-xl font-bold text-slate-200 hover:text-green-400 transition-colors">
              Jieyao Chen
            </a>
          </div>

          {/* 桌面端导航链接 - 居中 */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#intro" 
              className="nav-link text-slate-200 hover:text-green-400 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, '#intro')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="nav-link text-slate-200 hover:text-green-400 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="nav-link text-slate-200 hover:text-green-400 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="nav-link text-slate-200 hover:text-green-400 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Projects
            </a>
          </div>

          {/* 桌面端社交链接 - 右侧 */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:chen.jieyao@northeastern.edu" 
              className="social-link text-slate-200 hover:text-green-400 transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/JOBEBOLDER" 
              className="social-link text-slate-200 hover:text-green-400 transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jieyao-chen/" 
              className="social-link text-slate-200 hover:text-green-400 transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="social-link text-slate-200 hover:text-green-400 transition-colors p-2"
            >
              <Edit3 size={20} />
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-200 hover:text-green-400 transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#intro" 
                className="block text-slate-200 hover:text-green-400 transition-colors py-2"
                onClick={(e) => handleNavClick(e, '#intro')}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-slate-200 hover:text-green-400 transition-colors py-2"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="block text-slate-200 hover:text-green-400 transition-colors py-2"
                onClick={(e) => handleNavClick(e, '#experience')}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block text-slate-200 hover:text-green-400 transition-colors py-2"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </a>
              
              {/* 移动端社交链接 */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50">
                <a 
                  href="mailto:chen.jieyao@northeastern.edu" 
                  className="text-slate-200 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com/JOBEBOLDER" 
                  className="text-slate-200 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jieyao-chen/" 
                  className="text-slate-200 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-green-400 transition-colors"
                >
                  <Edit3 size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 