import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
const Centres = () => {
    const { data, error, loading } = useFetch(`centres`)
    return (

        <div className="centres-container">
            <h2>ISRO Centres</h2>
            <div className="centres-cards">
                {!loading && data && data?.map(centre => (
                    <div className="centre-card">
                        <h3 className="centre-name">{centre.name}</h3>
                        <p className="centre-place">Place: {centre.Place}</p>
                        <p className="centre-state">State: {centre.State}</p>
                    </div>
                ))}
            </div>
            {loading && !error && <Loading />}

        </div>

    )
}

export default Centres