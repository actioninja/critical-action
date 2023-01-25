import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const SpacerNoContent = styled.span`
  padding: 0 5px;
`;

const Spacer = (props: any) => <SpacerNoContent>|</SpacerNoContent>;

const NavbarContainer = styled.nav`
  padding: 10px;
  display: flex;
  position: relative;
  align-items: flex-end;
  border-bottom: 2px solid black;
  font-family: Inconsolata, monospace;
  font-size: 30px;
`;

const NavbarLink = styled(Link)`
  color: ${(props) => props.theme.colors.highlight};
  &:visited {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Critical Action</NavbarLink>
      <Spacer />
      <NavbarLink to="/blog">Blog</NavbarLink>
      <Spacer />
      <NavbarLink to="/projects">Projects</NavbarLink>
      <Spacer />
      <NavbarLink to="/cool_stuff">Cool Stuff</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
