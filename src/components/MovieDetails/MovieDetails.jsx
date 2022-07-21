import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <div>
        <img src={imgUrl} alt="" />
        <h1>{movie.title}</h1>
        <p>Popularity: {movie.popularity}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres}</p>
      </div>
      <hr />
      <h3>Aditional information</h3>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>
      <Outlet />
    </>
  );
};
