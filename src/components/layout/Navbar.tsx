import * as React from 'react';
import navbarStyles from './Navbar.module.scss';
import { IsDarkModeContext } from '../../theme/GlobalThemeWrapper';
import Link from 'next/link';

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
      <Link className={navbarStyles.link} href="/">
        Critical Action
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} href="/blog">
        Blog
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} href="/projects">
        Projects
      </Link>
      <Spacer />
      <Link className={navbarStyles.link} href="/cool_stuff">
        Cool Stuff
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
