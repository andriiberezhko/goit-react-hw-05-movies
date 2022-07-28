import { NavLink } from 'react-router-dom';

export const LinkList = () => {
  return (
    <>
      <ul>
        <li key={1}>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li key={2}>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};
