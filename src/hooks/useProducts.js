import { useState, useEffect } from 'react';

function useProducts(parameters) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products${parameters}`, { mode: 'cors' });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const dataToArray = Object.values(result);
        setData(dataToArray);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [parameters]);

  return { data, error, loading };
}

export default useProducts;
