import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import BackButton from '../../components/BackButton/Button';

interface Launcher {
  id: string;
}

const Launchers: React.FC = () => {
  const { data, error, loading } = useFetch<Launcher[]>('launchers');
  

  return (
    <div className="page-wrapper">
       <div className="page-heading-bar">
      <BackButton/>
      <h2 className="page-title text-white">ISRO Launchers</h2>
      </div>
      <div className="card-container custom-scrollbar">
        {!loading && data && data.length > 0 ? (
          data.map((launcher) => (
            <div
              key={launcher.id}
              className="card-col-33"
              role="region"
              aria-label={`Launcher ${launcher.id}`}
            >
              <div className="card card-left">
                <h3 className="card-sub-title">{launcher.id}</h3>
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
