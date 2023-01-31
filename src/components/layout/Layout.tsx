import * as React from 'react';
import Navbar from './Navbar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as navbarStyle from './Layout.module.css';
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
