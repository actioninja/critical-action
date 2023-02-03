import { AppProps } from 'next/app';
import { Inconsolata, Fira_Sans } from '@next/font/google';
import GlobalThemeWrapper from '../theme/GlobalThemeWrapper';
import ThemeScriptTag from '../theme/persistScript';
import { MDXProvider } from '@mdx-js/react';
import CodeContainer from '../components/mdx/CodeContainer';
import Anchor from '../components/Anchor';
import '../style.scss';
import Head from 'next/head';
import * as React from 'react';

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
      <ThemeScriptTag />
      <Head>
        <title>Critical Action</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow" />
        <meta name="author" content="Rob Bailey (actioninja)" />
        <meta name="generator" content="Next.js" />
      </Head>
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
