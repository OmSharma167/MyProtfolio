import React from 'react';
import { Github, Linkedin, Mail, Phone, Twitter, Instagram } from 'lucide-react';
import SocialLink from '../ui/SocialLink';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/OmSharma167", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/om-sharma-905811254/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/@OpSharma167", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/0m__sharma", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:op809034@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+918090349760", label: "Phone" }
  ];

  return (
    <footer className=" backdrop-blur-sm border-t border-accent-200 dark:border-accent-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-4">Om Sharma</h3>
            <p className="text-accent-600 dark:text-accent-300 mb-4">
              Software Engineer specializing in MERN Stack Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-4">Connect</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  className="text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-200 dark:border-accent-700">
          <p className="text-center text-accent-600 dark:text-accent-300">
            © {new Date().getFullYear()} Om Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;