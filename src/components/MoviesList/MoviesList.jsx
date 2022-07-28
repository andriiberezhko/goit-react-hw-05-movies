import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  let url = location.pathname !== '/movies' ? '/movies/' : '';
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`${url}${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
