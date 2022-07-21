import { useState, useEffect } from 'react';
import { fetchTrend } from '../service/api';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetchTrend().then(setTrend);
  }, []);
  return <MoviesList movies={trend} />;
};
