import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as navbarStyles from './Navbar.module.css';
import { Link } from 'gatsby';
import { IsDarkModeContext } from '../theme/GlobalThemeWrapper';

const Spacer = () => <span className={navbarStyles.spacer}>|</span>;

const DarkModeToggle = () => {
  const { toggleDarkMode, ...rest } = React.useContext(IsDarkModeContext);

  return (
    <span className={navbarStyles.darkmodeToggle} onClick={toggleDarkMode}>
      Toggle Dark
    </span>
  );
};

const Navbar = () => {
  return (
    <nav className={navbarStyles.container}>
      <Link className={navbarStyles.link} to="/">
        Critical Action
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} to="/blog">
        Blog
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} to="/projects">
        Projects
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} to="/cool_stuff">
        Cool Stuff
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
