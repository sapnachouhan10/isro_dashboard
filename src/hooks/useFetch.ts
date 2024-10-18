import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { BASEURL } from '../constants/endpoints';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (url: string) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(`${BASEURL}/${url}`);
      if (!response.ok) {
        throw new Error('Error: Error while fetching the data');
      }
      const result = await response.json();
      
      if (result && result[url]) {
        setData(result[url] as T);
      }
      setLoading(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error: failed to fetch data';
      setError(errorMessage);
      setLoading(false);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
