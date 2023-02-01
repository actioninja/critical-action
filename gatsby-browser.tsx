import '@fontsource/inconsolata';
import '@fontsource/fira-sans';

import * as React from 'react';
import GlobalThemeWrapper from './src/theme/GlobalThemeWrapper';

import './src/style.scss';

export const wrapPageElement = ({ element, props }: any) => {
  return <GlobalThemeWrapper {...props}>{element}</GlobalThemeWrapper>;
};
