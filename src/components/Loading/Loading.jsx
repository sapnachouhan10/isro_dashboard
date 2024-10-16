import React from 'react';

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="orbit">
        <div className="planet"></div>
        <div className="satellite"></div>
      </div>
      <div className="loader-text">Fetching Space Data...</div>
    </div>
  );
};

export default Loading;
