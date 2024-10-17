import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const Centres = () => {
  const { data, error, loading } = useFetch(`centres`);

  return (
    <div className="page-wrapper">
      <h2 className="page-title text-white">ISRO Centres</h2>

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
              data?.map((centre, index) => (
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
