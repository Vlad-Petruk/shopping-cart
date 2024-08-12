import { useState, useEffect } from 'react';

function useFetch(parameters) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products${parameters}`, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const dataToArray = Object.values(data);
        setData(dataToArray);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [parameters]);

  return { data, error, loading };
}

export default useFetch;
