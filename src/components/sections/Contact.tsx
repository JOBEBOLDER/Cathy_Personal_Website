'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/JOBEBOLDER',
      description: 'Check out my code',
      color: 'text-primary-electric',
      hoverColor: 'hover:border-primary-electric/50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jieyao-chen',
      description: 'Let&apos;s connect professionally',
      color: 'text-primary-creative',
      hoverColor: 'hover:border-primary-creative/50'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/jieyao_chen',
      description: 'Follow my thoughts',
      color: 'text-blue-400',
      hoverColor: 'hover:border-blue-400/50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-theme-surface relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-creative/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            / get in touch
          </h2>
          <p className="text-xl text-theme-muted max-w-2xl mx-auto leading-relaxed">
            I&apos;d love to hear from you! Whether it&apos;s about project collaboration, job opportunities, 
            or just wanting to say hello, feel free to reach out anytime.
          </p>
        </motion.div>

        {/* 主要联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.a
            href="mailto:jieyao.chen@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-electric text-primary-electric hover:bg-primary-electric hover:text-theme-bg transition-all duration-300 rounded-lg text-lg font-semibold shadow-lg hover:shadow-primary-electric/25"
          >
            <Mail size={24} />
            Say Hello!
          </motion.a>
        </motion.div>

        {/* 社交链接 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group bg-theme-card border border-theme-border rounded-lg p-6 ${social.hoverColor} transition-all duration-300`}
            >
              <social.icon className={`${social.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={40} />
              <h3 className="text-theme-text font-semibold mb-2">{social.name}</h3>
              <p className="text-theme-muted text-sm">{social.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* 额外联系信息 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-theme-card border border-theme-border rounded-lg p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="text-theme-text font-semibold mb-2">📍 Location</h3>
              <p className="text-theme-muted">San Francisco, CA</p>
              <p className="text-theme-dim text-sm">Open to remote opportunities</p>
            </div>
            <div className="text-left">
              <h3 className="text-theme-text font-semibold mb-2">💼 Availability</h3>
              <p className="text-primary-electric font-medium">Open to Work</p>
              <p className="text-theme-dim text-sm">Full-time & freelance</p>
            </div>
          </div>
        </motion.div>

        {/* 底部文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-theme-dim text-sm">
            💡 Currently open to new opportunities and interesting projects
          </p>
          <p className="text-theme-dim text-xs mt-2">
            Let&apos;s build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;