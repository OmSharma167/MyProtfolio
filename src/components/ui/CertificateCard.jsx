import React from "react";

export default function CertificateCard({ certificate }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* CLICK IMAGE TO VIEW FULL SCREEN */}
      <a href={certificate.file} target="_blank" rel="noopener noreferrer">
        <img
          src={certificate.img}
          alt={certificate.title}
          className="w-full h-44 object-cover cursor-pointer"
        />
      </a>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {certificate.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 mb-4">
          {certificate.description}
        </p>

        {/* Remove download button, no need */}
      </div>
    </div>
  );
}
