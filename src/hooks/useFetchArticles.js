import { useState, useEffect } from 'react';
import { fetchArticles } from '../services/api';

const useFetchArticles = (period) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles(period)
      .then(response => {
        setArticles(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [period]);

  return { articles, loading, error };
};

export default useFetchArticles;
