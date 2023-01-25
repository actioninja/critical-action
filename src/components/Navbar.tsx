import * as React from "react";
import { Link } from "gatsby";

const spacerStyle = {
  padding: "0 5px",
};
const Spacer = () => {
  return <span style={spacerStyle}>|</span>;
};

const navbarStyle = {
  padding: "10px",
  display: "flex",
  alignItems: "flex-end",
  borderBottom: "2px solid black",
  fontFamily: "Inconsolata",
  fontSize: 30,
};

const navSectionStyle = {
  marginLeft: "10px",
};

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <nav>
        <Link to="/">Critical Action</Link>
        <Spacer />
        <Link to="/blog">Blog</Link>
        <Spacer />
        <Link to="/projects">Projects</Link>
        <Spacer />
        <Link to="/cool_stuff">Cool Stuff</Link>
      </nav>
    </div>
  );
};

export default Navbar;
