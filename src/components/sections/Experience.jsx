import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Olcademy",
    period: "Nov 2024 - Present",
    location: "Delhi, India · Hybrid",
    description: "Currently pursuing my internship, where I have gained valuable skills and hands-on experience in full-stack development using the MERN stack.",
    responsibilities: [
      "Implementing and optimizing features that utilize IP addresses to determine and display the nearest location for both users and administrators",
      "Integrating location-based services, such as mapping and ISP (Internet Service Provider) details, to enhance user experience",
      "Implementing Google Maps for enhanced location-based services, including route mapping and distance calculations",
      "Improving search and filter functionalities",
      "Designing promotional tools to increase platform efficiency and engagement"
    ],
    link: "https://www.olcademy.in/"
  },
  {
    role: "Data Visualization Intern",
    company: "Uttar Pradesh Forest Corporation (UPFC)",
    period: "May 2023 - Jun 2023",
    location: "Sonbhadra, Uttar Pradesh, India · On-site",
    description: "Analyzed over 100,000 rows of forest data using Python (NumPy, Pandas, Matplotlib) to enhance decision-making.",
    responsibilities: [
      "Created 50+ visualizations to present key insights for policy discussions",
      "Identified trends, generating actionable reports that improved forest management by 15%",
      "Developed visual representations of annual forest data to aid stakeholders in understanding key metrics"
    ],
    link: "#"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-accent-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-accent-800 rounded-lg shadow-lg p-6 border border-accent-200 dark:border-accent-700"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                    {exp.role}
                  </h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <Briefcase className="w-4 h-4 text-accent-500" />
                    <span className="text-accent-600 dark:text-accent-300">{exp.company}</span>
                    <Calendar className="w-4 h-4 text-accent-500" />
                    <span className="text-accent-600 dark:text-accent-300">{exp.period}</span>
                  </div>
                </div>
                {exp.link && (
                  <a 
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="mt-3 text-accent-600 dark:text-accent-300">{exp.description}</p>
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                    <span className="text-accent-600 dark:text-accent-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}