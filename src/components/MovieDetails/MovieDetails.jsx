import { useEffect, useState } from 'react';
import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [backPath, setBackPath] = useState({});
  useEffect(() => {
    setBackPath(location.state?.from ?? '/');
  }, []);
  // console.log(backPath);

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <NavLink to={backPath}>Go back</NavLink>
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
      <LinkList />
      <Outlet />
    </>
  );
};
