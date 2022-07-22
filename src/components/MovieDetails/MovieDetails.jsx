import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // const location = useLocation();
  // console.log(location);

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <button onClick={goBack}>Go back</button>
      {/* <NavLink to={location.state.from}>Go back</NavLink> */}
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
