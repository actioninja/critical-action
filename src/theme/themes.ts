import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    foreground: "#2d261f",
    background: "#fff1eb",
    highlight: "#4dab72",
    clickedLink: "#226959",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    foreground: "",
    background: "",
    highlight: "",
    clickedLink: "",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Fira Sans, Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
    color: ${(props) => props.theme.colors.foreground};
    background-color: ${(props) => props.theme.colors.background};
  }
  
  a {
    color: ${(props) => props.theme.colors.highlight};
    
    &:visited {
      color: ${(props) => props.theme.colors.clickedLink};
    }
  }
`;
