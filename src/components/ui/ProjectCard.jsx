// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//         {project.title}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex space-x-4">
//         {project.githubUrl && (
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             GitHub <ExternalLink size={16} className="ml-1" />
//           </a>
//         )}
//         {project.liveUrl && (
//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             Live Demo <ExternalLink size={16} className="ml-1" />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }




import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { projectImages } from './projects/index.js'; // 



const ProjectCard = ({ project }) => {
  const imageKey = project.title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-200 dark:border-primary-700 shadow-[0_4px_20px_rgba(14,165,233,0.15)] hover:shadow-[0_4px_25px_rgba(14,165,233,0.25)] transition-all duration-300"
    >
      <div className="relative group h-48 overflow-hidden">
        <img
          src={projectImages[imageKey]}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-4">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors p-2 rounded-full bg-black/30 backdrop-blur-sm"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors p-2 rounded-full bg-black/30 backdrop-blur-sm"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">
          {project.title}
        </h3>
        <p className="text-accent-600 dark:text-accent-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;