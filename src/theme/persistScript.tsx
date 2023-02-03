import * as React from 'react';
import Script from 'next/script';

/* untersed version of the dark mode init script
function initDarkMode() {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem('darkmode-persist');
  const root = document.body;
  let mode = '';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    mode = JSON.parse(persistedPreference);
  } else {
    mode = prefersDarkFromMQ ? 'dark-theme' : 'light-theme';
    localStorage.setItem('darkmode-persist', JSON.stringify(mode));
  }

  root.classList.add(mode);
}
 */

const tersed = `const mql=window.matchMedia("(prefers-color-scheme: dark)"),prefersDarkFromMQ=mql.matches,persistedPreference=localStorage.getItem("darkmode-persist"),root=document.body;let mode="";const hasUsedToggle="string"==typeof persistedPreference;hasUsedToggle?mode=JSON.parse(persistedPreference):(mode=prefersDarkFromMQ?"dark-theme":"light-theme",localStorage.setItem("darkmode-persist",JSON.stringify(mode))),root.classList.add(mode);`;

const ThemeScriptTag = () => {
  const themeScript = `(${tersed})()`;

  return <Script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};

export default ThemeScriptTag;
