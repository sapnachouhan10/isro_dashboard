import React from 'react'
import useFetch from '../../hooks/useFetch'

const Dashboard = () => {
  const {data, error,loading} = useFetch(`spacecrafts`)
  console.log(data,error,loading)
  return (
    <div>
        Dashboard
    </div>
  )
}

export default Dashboard