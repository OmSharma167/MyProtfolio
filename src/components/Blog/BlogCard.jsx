import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden group transform-gpu"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-accent-500 dark:text-accent-400 mb-2 sm:mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min read
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-accent-600 dark:text-accent-300 mb-4 line-clamp-2 text-sm sm:text-base">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${index}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium group"
        >
          Read More
          <motion.span 
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;