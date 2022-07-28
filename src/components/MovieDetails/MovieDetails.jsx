import { useState } from 'react';
import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieDetails = ({
  movie: { title, poster_path, popularity, overview, genres },
}) => {
  console.log({ title });
  const location = useLocation();
  const [backPath] = useState(location.state?.from ?? '/');

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <NavLink to={backPath}>Go back</NavLink>
      <div>
        <img src={imgUrl} alt="" />
        <h1>{title}</h1>
        <p>Popularity: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <hr />
      <h3>Aditional information</h3>
      <LinkList />
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
