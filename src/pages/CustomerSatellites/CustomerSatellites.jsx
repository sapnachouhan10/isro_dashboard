import React from 'react';
import useFetch from '../../hooks/useFetch';
import useSearch from '../../hooks/useSearch';

const CustomerSatellites = () => {
  const { data, loading, error } = useFetch(`customer_satellites`);
  const { filteredData, searchQuery, handleSearch } = useSearch(data, 'id');
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Customer Satellites</h2>
      <input
        type="text"
        placeholder="Search Satellites"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {filteredData?.map((satellite) => (
          <li key={satellite.id}>
            {satellite.id} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerSatellites;
