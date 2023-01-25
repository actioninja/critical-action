import * as React from "react";
import Navbar from "./Navbar";

const containerStyle = {
  maxWidth: "800px",
  margin: "auto",
  fontFamily: "Fira Sans",
};

const bodyStyle = {
  padding: "5px",
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={containerStyle}>
      <Navbar />
      <main style={bodyStyle}>{children}</main>
    </div>
  );
};

export default Layout;
