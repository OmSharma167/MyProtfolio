



import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    specialization: "Data Science",
    institution: "Noida Institute of Engineering and Technology",
    location: "Greater Noida, Uttar Pradesh",
    period: "2022 - 2026",
  },
  {
    degree: "Intermediate ( 12th)",
    institution: "Obra Inter College",
    location: "Sonbhadra, Uttar Pradesh",
    period: "2019 - 2021",
    gpa: "70.2%",
  },
  {
    degree: "High School (10th)",
    institution: "Shiksha Niketan Obra Inter College",
    location: "Sonbhadra, Uttar Pradesh",
    period: "2018 - 2019",
    gpa: "80.22%",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-8 sm:py-12 md:py-20 bg-white/50 dark:bg-accent-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-primary-200 mb-8 sm:mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 border border-accent-200 dark:border-accent-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-700 dark:text-primary-300 break-words">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 mt-1">
                      Specialization in {edu.specialization}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center text-sm sm:text-base text-accent-600 dark:text-accent-300">
                      <GraduationCap className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="break-words">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-accent-600 dark:text-accent-300">
                      <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm sm:text-base text-accent-600 dark:text-accent-300">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="break-words">{edu.location}</span>
                  </div>
                </div>
                {edu.gpa && (
                  <div className="mt-3 sm:mt-0 sm:ml-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-accent-700 dark:text-accent-200 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-accent-600 dark:text-accent-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}