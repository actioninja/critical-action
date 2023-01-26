import * as React from 'react';

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const IsDarkModeContext = React.createContext({
  isDarkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});

export const IsDarkModeProvider = IsDarkModeContext.Provider;

const GlobalThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const initialState = null;
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? 'dark-theme' : 'light-theme';
    const oldTheme = !isDarkMode ? 'dark-theme' : 'light-theme';

    document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('darkmode-persist', JSON.stringify(newTheme));
    }
  };

  return <IsDarkModeProvider value={{ isDarkMode, toggleDarkMode }}>{children}</IsDarkModeProvider>;
};

export default GlobalThemeWrapper;
