import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  </header>
);

export default Header;
