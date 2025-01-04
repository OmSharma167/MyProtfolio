import { useState, useCallback } from 'react';

const useSearch = (items, searchableFields) => {
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = useCallback((searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const results = items.filter(item => 
      searchableFields.some(field => {
        const value = item[field];
        if (Array.isArray(value)) {
          return value.some(v => 
            v.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );

    setSearchResults(results);
  }, [items, searchableFields]);

  return { searchResults, performSearch };
};

export default useSearch;