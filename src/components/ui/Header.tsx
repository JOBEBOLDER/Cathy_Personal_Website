'use client';

import { useState } from 'react';
import { Menu, X, Github, Mail, Linkedin, Edit3 } from 'lucide-react';

const Header = () => {
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
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">
              Jieyao Chen
            </a>
          </div>

          {/* 桌面端导航 - 强制显示，不使用 hidden md:flex */}
          <div className="flex items-center space-x-8 bg-red-500 p-2">
            <a href="#intro" className="text-white font-medium">Home</a>
            <a href="#about" className="text-white font-medium">About</a>
            <a href="#experience" className="text-white font-medium">Experience</a>
            <a href="#projects" className="text-white font-medium">Projects</a>
          </div>

          {/* 桌面端社交链接 - 强制显示，不使用 hidden md:flex */}
          <div className="flex items-center space-x-4 bg-blue-500 p-2">
            <a href="mailto:chen.jieyao@northeastern.edu" className="text-white">
              <Mail size={20} />
            </a>
            <a href="https://github.com/JOBEBOLDER" className="text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jieyao-chen/" className="text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white">
              <Edit3 size={20} />
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 bg-green-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="bg-slate-800 p-4">
            <div className="space-y-2">
              <a href="#intro" className="block text-white py-2">Home</a>
              <a href="#about" className="block text-white py-2">About</a>
              <a href="#experience" className="block text-white py-2">Experience</a>
              <a href="#projects" className="block text-white py-2">Projects</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;