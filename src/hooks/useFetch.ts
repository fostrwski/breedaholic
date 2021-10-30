import { useCallback, useEffect, useState } from "react";

const useFetch = (service: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAPI = useCallback(async () => {
    try {
      const res = await fetch(service);
      const json = await res.json();
      setData(json);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  }, [service]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return { data, error, loading };
};

export default useFetch;
