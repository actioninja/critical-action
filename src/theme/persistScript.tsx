import * as React from 'react';
import Terser from 'terser';
import Script from 'next/script';

export default function initDarkMode() {
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
