import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileDown, BookOpen } from 'lucide-react';
import SocialLink from '../ui/SocialLink';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const socialLinks = [
  { href: "https://github.com/OmSharma167", icon: <Github size={24} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/om-sharma-905811254/", icon: <Linkedin size={24} />, label: "LinkedIn" },
  { href: "mailto:op809034@gmail.com", icon: <Mail size={24} />, label: "Email" },
  { href: "tel:+918090349760", icon: <Phone size={24} />, label: "Phone" }
];

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary-800 dark:text-primary-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Om Sharma
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-accent-600 dark:text-accent-300 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Software Engineer specializing in MERN Stack Development with expertise in Java, Python, and Data Structures & Algorithms
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            variants={fadeIn}
          >
            <a
              href="https://drive.google.com/uc?export=download&id=YOUR_RESUME_ID"
              className="flex items-center px-6 py-3 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-200 dark:border-primary-700 shadow-[0_4px_20px_rgba(14,165,233,0.15)]  bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <a
              href="/blog"
              className="flex items-center px-6 py-3 bg-accent-700 text-white backdrop-blur-sm rounded-lg overflow-hidden border border-primary-200 dark:border-primary-700 shadow-[0_4px_20px_rgba(14,165,233,0.15)]  hover:bg-accent-800 transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read My Blog
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mt-8 "
            variants={fadeIn}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SocialLink
                  href={link.href}
                  icon={link.icon}
                  className="text-accent-600 hover:text-primary-600 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-200 dark:border-primary-700 shadow-[0_4px_20px_rgba(14,165,233,0.15)]  dark:text-accent-300 dark:hover:text-primary-400 transition-colors duration-300"
                  aria-label={link.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}