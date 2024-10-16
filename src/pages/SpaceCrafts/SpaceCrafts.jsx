import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

const SpaceCrafts = () => {
    const { data, error, loading } = useFetch(`spacecrafts`)
    return (
        <div className='spacecrafts'>
            <div className="spacecraft-list">
                {!loading && data && data?.map(spacecraft => (
                    <div className="spacecraft-card">
                        <h3>{spacecraft.name}</h3>
                    </div>
                ))}
            </div>
            {loading && !error && <Loading />}
        </div>
    );
}

export default SpaceCrafts