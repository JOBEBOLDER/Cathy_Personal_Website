'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin, FileText } from 'lucide-react';

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

// Hero 组件
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('beautiful designs');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 简单的文字切换效果
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev === 'beautiful designs' ? 'powerful code' : 'beautiful designs'
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 鼠标移动效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 分形树组件
  const FractalTree = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-64 h-64 mx-auto mb-8"
    >
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.3))' }}
      >
        {/* 主干 */}
        <motion.line
          x1="128" y1="240" x2="128" y2="140"
          stroke="#4ade80"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* 分支层1 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <line x1="128" y1="140" x2="100" y2="100" stroke="#4ade80" strokeWidth="2" />
          <line x1="128" y1="140" x2="156" y2="100" stroke="#4ade80" strokeWidth="2" />
        </motion.g>
        
        {/* 分支层2 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <line x1="100" y1="100" x2="80" y2="70" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="120" y2="70" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="156" y1="100" x2="136" y2="70" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="156" y1="100" x2="176" y2="70" stroke="#22c55e" strokeWidth="1.5" />
        </motion.g>
        
        {/* 分支层3 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <circle cx="80" cy="70" r="3" fill="#4ade80" />
          <circle cx="120" cy="70" r="3" fill="#4ade80" />
          <circle cx="136" cy="70" r="3" fill="#4ade80" />
          <circle cx="176" cy="70" r="3" fill="#4ade80" />
          
          {/* 更多小分支 */}
          <circle cx="70" cy="50" r="2" fill="#22c55e" />
          <circle cx="90" cy="50" r="2" fill="#22c55e" />
          <circle cx="130" cy="50" r="2" fill="#22c55e" />
          <circle cx="150" cy="50" r="2" fill="#22c55e" />
          <circle cx="166" cy="50" r="2" fill="#22c55e" />
          <circle cx="186" cy="50" r="2" fill="#22c55e" />
        </motion.g>
      </svg>
    </motion.div>
  );

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 50,
            y: -mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* 分形树装饰 */}
        <FractalTree />

        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">hi, </span>
            <span className="text-green-400">jieyao</span>
            <span className="text-white"> here.|</span>
          </h1>
        </motion.div>

        {/* 副标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300">
            I create{' '}
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-green-400"
            >
              {displayText}
            </motion.span>
            {' '}sometimes.
          </p>
        </motion.div>

        {/* 描述 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a software engineer from San Francisco, CA. I&apos;m fascinated by large-scale, 
            high-impact products and contributed to major feature launches in industry-leading 
            services as well as apps that have 100M+ installs.
          </p>
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <motion.a
            href="mailto:jieyao.chen@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 
                     hover:bg-green-400 hover:text-gray-900 transition-all duration-300 rounded-lg
                     font-semibold text-lg shadow-lg hover:shadow-green-400/25"
          >
            <span className="mr-2">📧</span>
            Say hi!
          </motion.a>
        </motion.div>
      </div>
    </section>
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
      company: 'WATTPAD',
      position: 'Software Engineer Intern',
      period: 'MAY 2022 - AUG 2022',
      location: 'Toronto, ON',
      website: 'https://wattpad.com',
      responsibilities: [
        'Built recommendation engine features that increased user engagement by 25%',
        'Developed RESTful APIs using Node.js and Express for content management system',
        'Implemented real-time notification system using WebSocket connections',
        'Participated in code reviews and agile development practices'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'JavaScript']
    },
    {
      company: 'UNIVERSITY OF TORONTO',
      position: 'Research Assistant',
      period: 'SEP 2021 - APR 2022',
      location: 'Toronto, ON',
      website: 'https://utoronto.ca',
      responsibilities: [
        'Conducted research on machine learning algorithms for natural language processing',
        'Developed Python scripts for data preprocessing and model evaluation',
        'Co-authored research paper on sentiment analysis in social media data',
        'Presented findings at departmental seminars and conferences'
      ],
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Jupyter']
    },
    {
      company: 'CENTIVIZER',
      position: 'Frontend Developer Intern',
      period: 'JUN 2021 - AUG 2021',
      location: 'Remote',
      website: 'https://centivizer.com',
      responsibilities: [
        'Developed responsive web interfaces using React and modern CSS frameworks',
        'Integrated third-party APIs for payment processing and user authentication',
        'Improved website performance by 30% through code optimization and lazy loading',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git']
    },
    {
      company: 'ORANGE GATE',
      position: 'Software Developer Intern',
      period: 'MAY 2019 - AUG 2019',
      location: 'Toronto, ON',
      website: 'https://orangegate.com',
      responsibilities: [
        'Developed a Node.js smart home system through Facebook\'s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home',
        'Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.',
        'Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB.'
      ],
      technologies: ['DialogFlow', 'Vision', 'AutoML', 'Messenger Bot API', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-primary">
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
            experience
          </h2>
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
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* About section */}
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
      </main>
    </div>
  );
}