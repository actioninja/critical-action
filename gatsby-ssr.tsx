import * as React from 'react';
import ThemeScriptTag from './src/theme/persistScript';
import GlobalThemeWrapper from './src/theme/GlobalThemeWrapper';

export function onRenderBody({ setPreBodyComponents }: any) {
  setPreBodyComponents([<ThemeScriptTag key="dark-mode-persistence-script" />]);
}

export const wrapRootElement = ({ element, props }: any) => {
  return <GlobalThemeWrapper {...props}>{element}</GlobalThemeWrapper>;
};
