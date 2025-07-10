'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin, FileText } from 'lucide-react';
import Hero from '../components/sections/Hero';
import '../styles/globals.css';
import Projects from '../components/sections/Projects';

// Navigation 组件
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const navItems = [
    { id: 'intro', label: 'Home', href: '#intro' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:jieyao.chen@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/JOBEBOLDER', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jieyao-chen', label: 'LinkedIn' },
    { icon: FileText, href: '/resume.pdf', label: 'Resume' },
  ];

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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-700/30"
      style={{ backgroundColor: 'rgba(10, 25, 47, 0.95)' }}
    >
      <div className="mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
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
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.label}
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
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/30 transition-colors duration-300"
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

// Experience组件
const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0);

  const experiences = [
    {
      company: 'GreenTree',
      position: 'Software Development Engineer',
      period: 'May 2025 - PRESENT',
      location: 'Chicago, IL',
      website: 'https://www.greentree.group/',
      responsibilities: [
        'Managed server infrastructure and API integrations connecting distributed software systems for scalability',
        'Implemented Docker containers and Kubernetes orchestration improving deployment efficiency by 30%',
        'Developed automated backup scripts and monitoring services ensuring 99.9% system uptime',
        'Created responsive websites with DNS management and domain configuration supporting enterprise operations',
        'Built RESTful APIs for service communication and data synchronization across microservices architecture'
      ],
      technologies: [ 'React', 'Docker', 'Kubernetes', 'RESTful APIs', 'Microservices']
    },
    {
      company: 'National Association of Asian American Professionals',
      position: 'Web developer',
      period: 'jan 2025 present',
      location: 'Boston, MA',
      website: 'https://www.naaapboston.org/',
      responsibilities: [
        'Architected leadership development platform using React/Node.js and Strapi CMS serving 2,500+ professionals',
        'Empowered community building through anti-discrimination resource sharing and engagement features',
        'Authored comprehensive technical documentation for developers and content managers improving adoption by 40%',
        'Built multilingual responsive UI supporting cross-device accessibility increasing member engagement by 35%',
        'Implemented performance optimization techniques serving 15+ community chapters with sub-second load times'
      ],
      technologies: ['Node.js', 'React', 'Strapi', 'MongoDB', 'Redis', 'JavaScript']
    },

    {
      company: 'Semir Digital Center',
      position: 'Software Engineer PM Intern',
      period: 'Oct 2021 - Feb 2022',
      location: 'Shanghai, China',
      website: 'https://semirshop.com/?srsltid=AfmBOoot-6HZONMFNLpRMcHvtErWilGAugJCA25WvX1usD0QQ9O-z_E5',
      responsibilities: [
        'Developed a React.js dashboard to track marketing performance, using React Hooks for dynamic state management and Axios for API calls to a Java-based backend via RESTful APIs. Provided real-time visualization of key metrics, which reduced manual data analysis efforts for the marketing team',
        'Integrated AWS API Gateway with a Java Spring Boot backend to build a reliable API for handling large file uploads. Implemented multi-part uploads with Amazon S3, ensuring that files over 5GB could be uploaded without errors or timeouts, improving efficiency for the business team.',
        'Developed an internal error reporting system using React.js and Java Spring Boot in an Agile (JIRA/Trello) environment. Implemented a user-facing form to capture detailed error reports, and serialized them into JSON using Jackson stored them in PostgreSQL for efficient analysis, handling over 2,000 bug reports.'
      ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git', 'Java Spring Boot', 'AWS API Gateway', 'Amazon S3', 'PostgreSQL', 'Axios']
    },

  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="mx-auto">
        
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-green-400">/ </span>
              experience
            </h2>
          </div>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* 左侧公司导航 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => setActiveCompany(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 border-l-2 transition-all duration-300 ${
                    activeCompany === index
                      ? 'border-green-400 bg-green-400/10 text-green-400'
                      : 'border-gray-700 text-gray-400 hover:border-green-400/50 hover:text-green-400 hover:bg-green-400/5'
                  }`}
                >
                  <div className="font-semibold text-sm">{exp.company}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* 右侧详细信息 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCompany}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 职位标题 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {experiences[activeCompany].position} @ 
                    <span className="text-green-400"> {experiences[activeCompany].company}</span>
                  </h3>
                  <div className="text-cyan-400 font-mono text-sm mb-2">
                    {experiences[activeCompany].period}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {experiences[activeCompany].location}
                  </div>
                </div>

                {/* 职责描述 */}
                <div className="space-y-4">
                  {experiences[activeCompany].responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-green-400 text-lg mt-1">▹</span>
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>

                {/* 技术栈 */}
                <div className="pt-4">
                  <p className="text-gray-400 mb-4">Relevant technologies/tools used:</p>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeCompany].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-lg font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="App min-h-screen">
      <Navigation />
      <div id="content">
        <Hero />
        
        {/* About section */}
        <section id="about" className="min-h-screen py-20">
          <div className="mx-auto">
            
            {/* 标题 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="section-header">
                <h2 className="section-title">
                  <span className="text-green-400">/ </span>
                  about me
                </h2>
              </div>
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
                    {[
                      'Typescript',
                      'React.js', 
                      'Javascript ES6+',
                      'Python',
                      'Java',
                      'C#'
                    ].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300 group hover:text-green-400 transition-colors duration-200"
                      >
                        <span className="text-green-400 mr-3 text-lg">▹</span>
                        <span className="font-mono">{tech}</span>
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

              {/* 右侧图片占位 */}
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
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-green-400/20 to-cyan-400/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-green-400/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">👨‍💻</span>
                        </div>
                        <p className="text-gray-300 text-sm">Jieyao Chen</p>
                        <p className="text-gray-400 text-xs mt-1">Software Developer</p>
                      </div>
                    </div>
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

        <Experience />
      </div>
    </div>
  );
}