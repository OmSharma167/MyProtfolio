import React from 'react';
import { Code, Database, Layout, Server, Terminal, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Java", "Python", "JavaScript"]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "REST APIs","Mongodb"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "AWS"]
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Git", "GitHub", "GitLab"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-accent-200 dark:border-accent-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}