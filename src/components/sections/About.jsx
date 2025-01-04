import React from 'react';
import { User, Code, Database, Brain, Rocket, BookOpen } from 'lucide-react';

const About = () => {
  
  

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <User className="w-12 h-12 text-primary-600 dark:text-primary-400" />
        <div>
          <h1 className="text-3xl font-bold text-primary-800 dark:text-primary-200">About Me</h1>
          <p className="text-accent-600 dark:text-accent-300">Computer Science Engineering (DS) Student</p>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm border border-accent-200 dark:border-accent-700 rounded-lg shadow-lg p-6">
        <p className="text-lg leading-relaxed mb-6 text-accent-700 dark:text-accent-200">
          I am a Computer Science Engineering student specializing in Data Science, 
          with a strong foundation in modern development technologies and practices. 
          My passion lies in building scalable and innovative solutions, combining both 
          front-end and back-end expertise to create comprehensive applications.
        </p>
      </div>

     

      <div className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm border border-accent-200 dark:border-accent-700 rounded-lg shadow-lg p-6">
        <p className="text-center text-lg text-accent-700 dark:text-accent-200">
          I am dedicated to lifelong learning and thrive in collaborative environments. 
          My goal is to contribute to projects that drive innovation and deliver meaningful results.
        </p>
      </div>
    </div>
  );
};

export default About;