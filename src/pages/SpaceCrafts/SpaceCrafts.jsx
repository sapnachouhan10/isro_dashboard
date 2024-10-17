import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const SpaceCrafts = () => {
  const { data, error, loading } = useFetch(`spacecrafts`);
  return (
    <div>
      <h2 className="page-title text-white">ISRO Spacecrafts</h2>
      <div className="card-container custom-scrollbar">
        {!loading &&
          data &&
          data?.map((spacecraft) => (
            <div className="card-col-33">
              <div className="card card-left">
                <h3 className="card-sub-title">{spacecraft.name}</h3>
              </div>
            </div>
          ))}

        {loading && !error && <Loading />}
      </div>
    </div>
  );
};

export default SpaceCrafts;
