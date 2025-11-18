import React from "react";
import CertificateCard from "../ui/CertificateCard";
// import CertificateCard from "../ui/CertificateCard";

const certificates = [
  {
    title: "Python Basics Certificate",
    img: "/certificates/PYTHON_page-0001.jpg",
    file: "/certificates/PYTHON_page-0001.jpg",
    description:
      "Completed the Python Basics course offered by the University of Michigan through Coursera, covering core Python concepts and hands-on programming exercises.",
  },
  {
    title: "Java Programming Fundamentals",
    img: "/certificates/infosys.jpg",
    file: "/certificates/infosys.jpg",
    description:
      "Completed the Java Programming Fundamentals course from Infosys Springboard, gaining strong knowledge of Java basics, OOP concepts, and core programming skills.",
  },
  {
    title: "MERN Full Stack Training Certificate",
    img: "/certificates/NCET_Certificate_page-0001.jpg",
    file: "/certificates/NCET_Certificate_page-0001.jpg",
    description:
      "Completed MERN Full Stack training provided by MyAnatomy, gaining expertise in frontend, backend, APIs, and deployment.",
  },

  {
    title: "Data Analysis with Python",
    img: "/certificates/Coursera Data Analysis With Python_page-0001.jpg",
    file: "/certificates/Coursera Data Analysis With Python_page-0001.jpg",
    description:
      "Completed IBM’s Data Analysis with Python course offered through Coursera, learning data wrangling, data visualization, NumPy, Pandas, and end-to-end data analysis techniques.",
  },
  {
    title: "Python for Data Science, AI & Development",
    img: "/certificates/coresera AI ML_page-0001.jpg",
    file: "/certificates/coresera AI ML_page-0001.jpg",
    description:
      "Completed IBM’s Python for Data Science, AI & Development course on Coursera, gaining skills in data handling, Python programming, AI concepts, and practical data science workflows.",
  },
  {
    title: "Deep Learning for Developers",
    img: "/certificates/1-0563735b-cbb4-419d-a996-2611ee328b55 (1)_page-0001.jpg",
    file: "/certificates/1-0563735b-cbb4-419d-a996-2611ee328b55 (1)_page-0001.jpg",
    description:
      "Completed the Deep Learning for Developers course from Infosys Springboard, gaining practical skills in neural networks, deep learning models, and real-world AI implementation.",
  },
  {
    title: "Spring Boot, Angular-React Stack & DevOps Tools",
    img: "/certificates/1-0e7cae9d-6cc9-416e-8c8b-72acf0d052df_page-0001.jpg",
    file: "/certificates/1-0e7cae9d-6cc9-416e-8c8b-72acf0d052df_page-0001.jpg",
    description:
      "Completed the Spring Boot and Angular-React Stack course with DevOps tools and a capstone project from Infosys Springboard, gaining hands-on experience in full-stack development and modern CI/CD practices.",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
