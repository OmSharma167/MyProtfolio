import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-screen max-w-md bg-white dark:bg-accent-800 rounded-lg shadow-lg border border-accent-200 dark:border-accent-700 p-4 z-50">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search projects, skills, experience..."
              className="w-full px-4 py-2 pr-10 rounded-lg border border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-900 text-accent-900 dark:text-accent-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-accent-400 hover:text-accent-600 dark:hover:text-accent-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;