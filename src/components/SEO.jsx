import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = () => {
  const siteUrl = 'https://omsharma.dev';
  const name = 'Om Sharma';
  const title = 'Om Sharma - Full Stack Developer & Software Engineer';
  const description = 'Portfolio of Om Sharma - Software Engineer specializing in MERN Stack, Java, Python, and Data Structures & Algorithms. Currently pursuing B.Tech in Computer Science Engineering at NIET.';
  const keywords = [
    'Om Sharma',
    'Full Stack Developer',
    'Software Engineer',
    'MERN Stack',
    'Web Developer',
    'React Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'Computer Science Engineering',
    'NIET Greater Noida',
    'Data Science'
  ].join(', ');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "url": siteUrl,
    "image": `${siteUrl}/profile.jpg`,
    "sameAs": [
      "https://github.com/OmSharma167",
      "https://www.linkedin.com/in/om-sharma-905811254/",
      "https://twitter.com/@OpSharma167"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Olcademy"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Noida Institute of Engineering and Technology",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": [
      "MERN Stack Development",
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "Full Stack Development",
      "Web Development"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/profile.jpg`} />
      <meta property="og:site_name" content={name} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@OpSharma167" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/profile.jpg`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;