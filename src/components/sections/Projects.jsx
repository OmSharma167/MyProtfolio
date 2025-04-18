// import React from 'react';
// import ProjectCard from '../ui/ProjectCard';

// const projects = [
//   {
//     title: "Helix Emergency Healthcare",
//     description: "Full-stack healthcare platform with emergency SOS and telemedicine features,Doctor ,User,Police,Ambulance,Hospital ",
//     technologies: ["MERN Stack", "Tailwind CSS", "Socket.io", "Google Maps API","Chatbot","ML","IP","ISP"],
//     githubUrl: "https://github.com/OmSharma167/helix-healthcare",
//     liveUrl: "#"
//   },
//   {
//     title: "E-commerce Web Application",
//     description: "Feature-rich e-commerce platform with admin dashboard and order management",
//     technologies: ["MERN Stack", "Tailwind CSS"],
//     githubUrl: "https://github.com/OmSharma167/ecommerce",
//     liveUrl: "#"
//   },
//   {
//     title: "Beauty and Wellness Web Application",
//     description: "Booking platform for parlour, salon, and spa services",
//     technologies: ["React", "Tailwind CSS"],
//     githubUrl: "https://github.com/OmSharma167/beauty-wellness",
//     liveUrl: "#"
//   }
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
//           Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "Helix Emergency Healthcare",
    description:
      "Full-stack healthcare platform with emergency SOS and telemedicine features,Doctor ,User,Police,Ambulance,Hospital ",
    technologies: [
      "MERN Stack",
      "Tailwind CSS",
      "Socket.io",
      "Google Maps API",
      "Chatbot",
      "ML",
      "IP",
      "ISP",
    ],
    githubUrl: "https://github.com/OmSharma167/helix-healthcare",
    liveUrl: "https://helixsos.vercel.app/",
  },
  {
    title: "E-commerce Web Application",
    description:
      "Feature-rich e-commerce platform with admin dashboard and order management",
    technologies: ["MERN Stack", "Tailwind CSS"],
    githubUrl: "https://github.com/OmSharma167/ecommerce",
    liveUrl: "#",
  },
  {
    title: "Beauty and Wellness Web Application",
    description: "Booking platform for parlour, salon, and spa services",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/OmSharma167/beauty-wellness",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}