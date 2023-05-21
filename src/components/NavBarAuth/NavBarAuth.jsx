import { NavLink } from 'react-router-dom';
import css from './NavBarAuth.module.css';

export const NavBarAuth = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
