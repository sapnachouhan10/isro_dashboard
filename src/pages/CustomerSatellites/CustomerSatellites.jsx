import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useSearch from '../../hooks/useSearch';

const CustomerSatellites = () => {
  const { data, loading, error } = useFetch(`customer_satellites`);
  const { filteredData, searchQuery, handleSearch } = useSearch(data, 'id');
  
  const [selectedSatellite, setSelectedSatellite] = useState(null);

  const handleViewMore = (satellite) => {
    setSelectedSatellite(satellite);
  };

  const handleCloseModal = () => {
    setSelectedSatellite(null);
  };

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
          <div className="satellite-card" key={satellite.id}>
            <h3>{satellite.id}</h3>
            <button className="view-more-button" onClick={() => handleViewMore(satellite)}>
              View More
            </button>
          </div>
        ))}
      </ul>

      {selectedSatellite && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSatellite.id}</h2>
            <p><strong>Country:</strong> {selectedSatellite.country}</p>
            <p><strong>Launch Date:</strong> {selectedSatellite.launch_date}</p>
            <p><strong>Mass:</strong> {selectedSatellite.mass} kg</p>
            <p><strong>Launcher:</strong> {selectedSatellite.launcher}</p>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSatellites;
