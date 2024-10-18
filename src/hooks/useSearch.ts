import { useState, useEffect } from 'react';

const useSearch = <T extends Record<string, any>>(data: T[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<T[]>(data);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const results = data.filter((item) =>
        Object.values(item).some((value) =>
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
