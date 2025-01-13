import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon, className, ...props }) => {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
    </motion.a>
  );
};

export default SocialLink;