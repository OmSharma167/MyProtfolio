



import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { blogPosts } from './blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[parseInt(id)];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-primary-200">
            Blog post not found
          </h2>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 text-primary-600 hover:text-primary-700 dark:text-primary-400 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <motion.section 
      className="py-12 sm:py-20 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.button
          variants={itemVariants}
          onClick={() => navigate('/blog')}
          className="flex items-center text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </motion.button>

        <motion.article
          variants={itemVariants}
          className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
        >
          <motion.div 
            className="relative h-64 sm:h-96 overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="p-4 sm:p-8">
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-sm text-accent-500 dark:text-accent-400 mb-4"
            >
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-primary-200 mb-4"
            >
              {post.title}
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="blog-content text-accent-700 dark:text-accent-200 text-sm sm:text-base"
              dangerouslySetInnerHTML={createMarkup(post.fullContent)}
            />

            {post.additionalImages && (
              <motion.div 
                variants={itemVariants}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {post.additionalImages.map((img, index) => (
                  <motion.img
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    src={img}
                    alt={`Additional image ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-48 sm:h-64 object-cover"
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}

export default BlogDetail;