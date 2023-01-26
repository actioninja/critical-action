import * as React from 'react';

function initDarkMode() {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem('darkmode-persist');
  const root = document.body;
  let mode = '';

  const hasUsedToggle = typeof persistedPreference === 'string';
  console.log('Definitely running!');

  if (hasUsedToggle) {
    mode = JSON.parse(persistedPreference);
  } else {
    mode = prefersDarkFromMQ ? 'dark-theme' : 'light-theme';
    localStorage.setItem('darkmode-persist', JSON.stringify(mode));
  }

  root.classList.add(mode);
}

const ThemeScriptTag = () => {
  const themeScript = `(${initDarkMode})()`;

  //TODO: Terser?
  const themeScriptMinified = themeScript;

  return <script dangerouslySetInnerHTML={{ __html: themeScriptMinified }} />;
};

export default ThemeScriptTag;
