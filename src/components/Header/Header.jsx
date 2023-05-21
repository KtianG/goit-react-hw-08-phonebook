import { NavBar } from '../NavBar/NavBar';
import { UserMenu } from '../UserMenu/UserMenu';
import { NavBarAuth } from '../NavBarAuth/NavBarAuth';
import { useAuth } from 'hooks';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <NavBar />
      {isLoggedIn ? <UserMenu /> : <NavBarAuth />}
    </header>
  );
};
