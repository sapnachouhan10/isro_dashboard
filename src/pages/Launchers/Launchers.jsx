import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

const Launchers = () => {
    const { data, error, loading } = useFetch(`launchers`)
    return (
        <div >
            <div >
                {!loading && data && data?.map(launchers => (
                    <div >
                        <h3>{launchers.id}</h3>
                    </div>
                ))}
            </div>
            {loading && !error && <Loading />}
        </div>
    );
}

export default Launchers