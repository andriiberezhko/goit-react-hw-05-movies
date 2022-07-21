import { fetchTrend } from '../service/api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { useState } from 'react';

export const Home = () => {
  const [trend, setTrend] = useState([]);
  //   let trend = [];
  fetchTrend().then(data => {
    // console.log(data);
    // trend = data;
    setTrend(data);
  });
  console.log(trend);

  return <MoviesList movies={trend} />;
};
