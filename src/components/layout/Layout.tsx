import * as React from 'react';
import Navbar from './Navbar';
import * as navbarStyle from './Layout.module.scss';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={navbarStyle.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
