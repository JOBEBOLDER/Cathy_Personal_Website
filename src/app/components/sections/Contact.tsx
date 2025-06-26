'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            / get in touch
          </h2>
          <p className="text-xl text-light-muted max-w-2xl mx-auto leading-relaxed">
            我很乐意听到你的想法！无论是项目合作、工作机会，还是仅仅想说声你好，
            都欢迎随时联系我。
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
            href="mailto:your@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-electric text-primary-electric hover:bg-primary-electric hover:text-dark-bg transition-all duration-300 rounded-lg text-lg font-semibold"
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
          
          {/* GitHub */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary-electric/50 transition-all duration-300"
          >
            <Github className="text-primary-electric mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-light-muted text-sm">Check out my code</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary-creative/50 transition-all duration-300"
          >
            <Linkedin className="text-primary-creative mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-light-muted text-sm">Let's connect professionally</p>
          </motion.a>

          {/* WeChat/其他 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary-code/50 transition-all duration-300"
          >
            <MessageCircle className="text-primary-code mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-white font-semibold mb-2">WeChat</h3>
            <p className="text-light-muted text-sm">your-wechat-id</p>
          </motion.div>
        </motion.div>

        {/* 底部文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-light-dim text-sm">
            💡 Currently open to new opportunities and interesting projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;