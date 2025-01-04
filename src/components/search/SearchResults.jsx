import React from 'react';
import { ExternalLink } from 'lucide-react';

const SearchResults = ({ results }) => {
  if (!results.length) return null;

  return (
    <div className="mt-4 space-y-4">
      {results.map((result, index) => (
        <div
          key={index}
          className="p-4 bg-white/50 dark:bg-accent-800/50 backdrop-blur-sm rounded-lg border border-accent-200 dark:border-accent-700 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
            {result.title}
          </h3>
          {result.description && (
            <p className="text-sm text-accent-600 dark:text-accent-300 mt-1">
              {result.description}
            </p>
          )}
          {result.technologies && (
            <div className="flex flex-wrap gap-2 mt-2">
              {result.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {(result.githubUrl || result.liveUrl) && (
            <div className="flex gap-4 mt-3">
              {result.githubUrl && (
                <a
                  href={result.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  GitHub <ExternalLink size={14} className="ml-1" />
                </a>
              )}
              {result.liveUrl && (
                <a
                  href={result.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Live Demo <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;