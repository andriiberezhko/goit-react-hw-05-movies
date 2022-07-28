import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../service/api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Searchbar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const onSubmitSearch = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') return;
    fetchMoviesByQuery(query).then(setMovies);
  }, [query]);
  return (
    <>
      <Searchbar onSubmit={onSubmitSearch} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
