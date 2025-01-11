



import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { blogPosts } from './blogData';

export default function Blog() {
  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
            My Blog
          </h1>
          <p className="text-lg text-accent-600 dark:text-accent-300">
            Thoughts, tutorials and insights about web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}