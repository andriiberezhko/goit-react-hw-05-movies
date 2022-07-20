import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${s.link}` + (isActive ? ` ${s.activeLink}` : '')
        }
      >
        Home
      </NavLink>
      <span>|</span>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `${s.link}` + (isActive ? ` ${s.activeLink}` : '')
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};
