// src/hooks/useSearch.js
import { useState, useEffect } from 'react';

const useSearch = (data) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const results = data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(lowercasedQuery)
        )
      );
      setFilteredData(results);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  return { filteredData, searchQuery, handleSearch };
};

export default useSearch;
