import React, { useState , useEffect} from 'react'
import { BASEURL } from '../constants/endpoints'

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async (url) => {
        try{
            setError(null)
            setLoading(true)
            const response = await fetch(`${BASEURL}/${url}`)
            if (!response.ok) {
               throw new Error(`Error: Error while fetching the data ${response.status}`);
             }
            const data = await response.json()
            if(data && data[url]){
               setData(data[url])
            }
            setError(null)
            setLoading(false)
        }catch(err){
            setError(err)
            setLoading(false)
        }
   
    }


    useEffect(() => {
        if(url){
            fetchData(url)
        }
    },[url])

    

  return {data,error, loading}
}

export default useFetch