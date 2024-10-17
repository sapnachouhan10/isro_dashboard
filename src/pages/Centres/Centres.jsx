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
          <thead>
            <tr>
              <th>Title</th>
              <th>Place</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              data &&
              data?.map((centre) => (
                <tr>
                  <td className="centre-name">{centre.name}</td>
                  <td className="centre-place">Place: {centre.Place}</td>
                  <td className="centre-state">State: {centre.State}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {loading && !error && <Loading />}
    </div>
  );
};

export default Centres;
