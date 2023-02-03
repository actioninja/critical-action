import { AppProps } from 'next/app';
import { Inconsolata, Fira_Sans } from '@next/font/google';
import GlobalThemeWrapper from '../theme/GlobalThemeWrapper';
import ThemeScriptTag from '../theme/persistScript';
import { MDXProvider } from '@mdx-js/react';
import CodeContainer from '../components/mdx/CodeContainer';
import Anchor from '../components/Anchor';
import '../style.scss';
import initDarkMode from '../theme/persistScript';

export const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export const firaSans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const components = {
  code: CodeContainer,
  a: Anchor,
};

export default function ActionApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fira-sans-font: ${firaSans.style.fontFamily};
          --inconsolata-font: ${inconsolata.style.fontFamily};
        }
      `}</style>
      <style>{pageProps.themeScript}</style>
      <main>
        <MDXProvider components={components}>
          <GlobalThemeWrapper>
            <Component {...pageProps} />;
          </GlobalThemeWrapper>
        </MDXProvider>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const terser = require('terser');

  const themeScript = `(${initDarkMode})()`;

  const themeScriptMinified = terser.minify(themeScript).code as string;

  return {
    props: {
      themeScript: themeScriptMinified,
    },
  };
}
