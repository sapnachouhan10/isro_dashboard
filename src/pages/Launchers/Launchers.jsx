import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const Launchers = () => {
  const { data, error, loading } = useFetch(`launchers`);

  return (
    <div className="page-wrapper">
      <h2 className="page-title text-white">ISRO Launchers</h2>
      <div className="card-container custom-scrollbar">
        {!loading && data && data.length > 0 ? (
          data.map((launchers) => (
            <div
              key={launchers.id}
              className="card-col-33"
              role="region"
              aria-label={`Launcher ${launchers.id}`}
            >
              <div className="card card-left">
                <h3 className="card-sub-title">{launchers.id}</h3>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <div role="alert" aria-live="polite">
              No launchers available.
            </div>
          )
        )}
        {loading && !error && (
          <div role="status" aria-live="polite">
            <Loading />
          </div>
        )}
        {error && (
          <div role="alert" className="error-message">
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Launchers;
