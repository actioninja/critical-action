import * as React from 'react';
import Navbar from './Navbar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as navbarStyle from './Layout.module.css';

const bodyStyle = {
  padding: '10px',
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={navbarStyle.container}>
      <Navbar />
      <main style={bodyStyle}>{children}</main>
    </div>
  );
};

export default Layout;
