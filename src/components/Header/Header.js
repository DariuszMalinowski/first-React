import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? styles.linkActive : undefined
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive ? styles.linkActive : undefined
        }
      >
        Favorite
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.linkActive : undefined
        }
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;

