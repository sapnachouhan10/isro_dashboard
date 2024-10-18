import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import BackButton from "../../components/BackButton/Button";

interface SpaceCraft {
  id: string;
  name: string;
}

const SpaceCrafts: React.FC = () => {
  const { data, error, loading } = useFetch<SpaceCraft[]>("spacecrafts");

  return (
    <div className="page-wrapper">
      <div className="page-heading-bar">
        <BackButton />
        <h2 className="page-title text-white">ISRO Spacecrafts</h2>
      </div>
      <div className="card-container custom-scrollbar">
        {!loading && data && data.length > 0
          ? data.map((spacecraft) => (
              <div
                key={spacecraft.id}
                className="card-col-33"
                role="region"
                aria-label={`Spacecraft ${spacecraft.name}`}
              >
                <div className="card card-left">
                  <h3 className="card-sub-title">{spacecraft.name}</h3>
                </div>
              </div>
            ))
          : !loading && (
              <div role="alert" aria-live="polite">
                No spacecrafts available.
              </div>
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

export default SpaceCrafts;
