import React from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Olcademy",
    period: "Nov 2024 - Present",
    location: "Delhi, India · Hybrid",
    description:
      "Currently pursuing my internship, where I have gained valuable skills and hands-on experience in full-stack development using the MERN stack.",
    responsibilities: [
      "Built core modules including food delivery, tiffin services, takeaway, dine-in, and event booking for a comprehensive food services platform",
      "Developed a full-featured restaurant dashboard with profile management, menu listings, order tracking, and 20+ operational tools",
      "Implemented a claim restaurant feature that allows 60K+ restaurants to submit claim requests with admin approval workflows",
      "Integrated IP-based geolocation using third-party map APIs, achieving over 95% accuracy in determining user location",
      "Improving search and filter functionalities",
      "Designing promotional tools to increase platform efficiency and engagement",
    ],

    certificates: [
      // {
      //   title: "Internship Offer Letter",
      //   img: "/certificates/olcademy_offer.jpg",
      //   file: "/certificates/olcademy_offer.jpg",
      // },
      {
        title: "Internship Completion Certificate",
        img: "/certificates/IC- om sharma (1)_page-0001.jpg",
        file: "/certificates/IC- om sharma (1)_page-0001.jpg",
      },
      {
        title: "Rising Star Intern Certificate",
        img: "/certificates/rising star intern (1)_page-0001.jpg",
        file: "/certificates/rising star intern (1)_page-0001.jpg",
      },
    ],

    link: "https://www.olcademy.in/",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white/50 dark:bg-accent-900/50"
    >
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
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                    {exp.role}
                  </h3>

                  <div className="flex items-center mt-1 space-x-2">
                    <Briefcase className="w-4 h-4 text-accent-500" />
                    <span className="text-accent-600 dark:text-accent-300">
                      {exp.company}
                    </span>

                    <Calendar className="w-4 h-4 text-accent-500" />
                    <span className="text-accent-600 dark:text-accent-300">
                      {exp.period}
                    </span>
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

              {/* Description */}
              <p className="mt-3 text-accent-600 dark:text-accent-300">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">
                      •
                    </span>
                    <span className="text-accent-600 dark:text-accent-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ----------------------------------------- */}
              {/*             Certificates Section          */}
              {/* ----------------------------------------- */}

              {exp.certificates &&
                exp.certificates.filter(
                  (cert) => cert.title && cert.img && cert.file
                ).length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3">
                      Certificates
                    </h4>

                    {/* Horizontal scroll row */}
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                      {exp.certificates
                        .filter((cert) => cert.title && cert.img && cert.file)
                        .map((cert, cIdx) => (
                          <div
                            key={cIdx}
                            className="min-w-[250px] bg-accent-100 dark:bg-accent-700 p-3 rounded-lg shadow"
                          >
                            <img
                              src={cert.img}
                              alt={cert.title}
                              className="w-full h-44 object-cover rounded"
                            />

                            <p className="mt-2 font-medium text-accent-700 dark:text-accent-200">
                              {cert.title}
                            </p>

                            {/* Show button */}
                            <a
                              href={cert.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 bg-primary-600 text-white px-3 py-1 rounded hover:bg-primary-700 transition"
                            >
                              Show
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
