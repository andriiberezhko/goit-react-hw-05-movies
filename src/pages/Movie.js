import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'service/api';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);
  return <MovieDetails movie={movie} />;
};

export default Movie;
