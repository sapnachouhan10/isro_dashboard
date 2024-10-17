import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";

const CustomerSatellites = () => {
  const { data, loading, error } = useFetch(`customer_satellites`);
  const { filteredData, searchQuery, handleSearch } = useSearch(data, "id");

  const [selectedSatellite, setSelectedSatellite] = useState(null);

  const handleViewMore = (satellite) => {
    setSelectedSatellite(satellite);
  };

  const handleCloseModal = () => {
    setSelectedSatellite(null);
  };

  if (loading) {
    return <div aria-live="polite">Loading...</div>;
  }

  if (error) {
    return <div role="alert">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="page-title text-white">Customer Satellites</h2>
      <label htmlFor="satellite-search" className="visually-hidden">
        Search Satellites
      </label>
      <input
        id="satellite-search"
        type="text"
        placeholder="Search Satellites"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="custom-input"
        aria-label="Search Satellites"
      />
      <div
        className="card-container more-height custom-scrollbar"
        role="list"
        aria-label="List of customer satellites"
      >
        {filteredData?.map((satellite) => (
          <div className="card-col-33" role="listitem" key={satellite.id}>
            <div className="card satelite-card">
              <h3 className="card-sub-title">{satellite.id}</h3>
              <button
                className="view-more-button"
                onClick={() => handleViewMore(satellite)}
                aria-label={`View more details about satellite ${satellite.id}`}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedSatellite && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="document"
            tabIndex={-1}
          >
            <h2 id="modal-title">{selectedSatellite.id}</h2>
            <p>
              <strong>Country:</strong> {selectedSatellite.country}
            </p>
            <p>
              <strong>Launch Date:</strong> {selectedSatellite.launch_date}
            </p>
            <p>
              <strong>Mass:</strong> {selectedSatellite.mass} kg
            </p>
            <p>
              <strong>Launcher:</strong> {selectedSatellite.launcher}
            </p>
            <button
              className="close-button"
              onClick={handleCloseModal}
              aria-label="Close satellite details"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSatellites;
