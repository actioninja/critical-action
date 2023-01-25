import * as React from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, GlobalStyles, lightTheme } from "./themes";

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const IsDarkModeContext = React.createContext({
  isDarkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});

const GlobalThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <IsDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children} <GlobalStyles />
      </ThemeProvider>
    </IsDarkModeContext.Provider>
  );
};

export default GlobalThemeWrapper;
