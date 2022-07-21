import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById, fetchMovieCast } from 'service/api';

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
    fetchMovieCast(id).then(setCast);
  }, [id]);
  return <MovieDetails movie={movie} />;
};
