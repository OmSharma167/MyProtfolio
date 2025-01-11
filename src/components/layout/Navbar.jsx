import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import SearchBar from '../search/SearchBar';
import SearchResults from '../search/SearchResults';
import useSearch from '../../hooks/useSearch';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      // First time visitor - set dark mode
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Returning visitor - use their preference
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Rest of the component code remains exactly the same
  const searchableContent = [
    {
      title: "B.Tech in Computer Science",
      description: "Galgotias University, Data Science Specialization",
      type: "education"
    },
    {
      title: "Helix Emergency Healthcare",
      description: "Full-stack healthcare platform with emergency SOS and telemedicine features",
      technologies: ["MERN Stack", "Tailwind CSS", "Socket.io", "Google Maps API"],
      type: "project",
      githubUrl: "https://github.com/OmSharma167/helix-healthcare",
      liveUrl: "#"
    },
    {
      title: "Technical Skills",
      description: "Core programming languages and technologies",
      technologies: ["Java", "Python", "JavaScript", "React", "Node.js", "MongoDB"],
      type: "skills"
    }
  ];

  const { searchResults, performSearch } = useSearch(searchableContent, ['title', 'description', 'technologies']);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['Education', 'Experience', 'Projects', 'Skills'];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-accent-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-primary-800 dark:text-primary-200">Om Sharma</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <SearchBar onSearch={performSearch} />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent-100 dark:hover:bg-accent-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <Moon className="w-5 h-5 text-accent-600 dark:text-accent-300" /> : 
                <Sun className="w-5 h-5 text-accent-600 dark:text-accent-300" />
              }
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <SearchBar onSearch={performSearch} />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent-100 dark:hover:bg-accent-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <Moon className="w-5 h-5 text-accent-600 dark:text-accent-300" /> : 
                <Sun className="w-5 h-5 text-accent-600 dark:text-accent-300" />
              }
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="absolute left-0 right-0 px-4">
          <SearchResults results={searchResults} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-accent-800 shadow-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-64" : "max-h-0 overflow-hidden"
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-3 py-2 text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}