import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import BackButton from '../../components/BackButton/Button';

interface Centre {
  name: string;
  Place: string;
  State: string;
}

const Centres: React.FC = () => {
  const { data, error, loading } = useFetch<Centre[]>('centres');

  return (
    <div className="page-wrapper">
      <div className="page-heading-bar">
        <BackButton />
        <h2 className="page-title text-white">ISRO Centres</h2>
      </div>

      <div className="table-container custom-scrollbar">
        <table>
          <caption className="visually-hidden">List of ISRO Centres</caption>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Place</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              data &&
              data.map((centre, index) => (
                <tr key={index}>
                  <td className="centre-name" aria-label={`Centre name ${centre.name}`}>
                    {centre.name}
                  </td>
                  <td className="centre-place" aria-label={`Place ${centre.Place}`}>
                    {centre.Place}
                  </td>
                  <td className="centre-state" aria-label={`State ${centre.State}`}>
                    {centre.State}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {loading && !error && <Loading aria-live="polite" />}
      {error && <div role="alert">Error: {error}</div>}
    </div>
  );
};

export default Centres;
