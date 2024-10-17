import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const Launchers = () => {
  const { data, error, loading } = useFetch(`launchers`);
  return (
    <div>
      <h2 className="page-title text-white">ISRO Launchers</h2>
      <div className="card-container custom-scrollbar">
        {!loading &&
          data &&
          data?.map((launchers) => (
            <div className="card-col-33">
              <div className="card card-left">
                <h3 className="card-sub-title">{launchers.id}</h3>
              </div>
            </div>
          ))}
        {loading && !error && <Loading />}
      </div>
    </div>
  );
};

export default Launchers;
