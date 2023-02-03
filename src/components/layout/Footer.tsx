import * as React from 'react';
import * as footerStyle from './Footer.module.scss';
import Anchor from '../Anchor';

export const Footer = () => {
  return (
    <footer className={footerStyle.container}>
      <section>
        Copyright 2023 Rob Bailey. All source code for this website is licensed under the terms of{' '}
        <Anchor href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</Anchor>, or the applicable license for used
        libraries. All writing and content on this website is the sole ownership of Rob Bailey, unless otherwise
        indicated, and may be used licensed under{' '}
        <Anchor href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</Anchor>. Contact me for usage that
        would not comply with that license. Any and all opinions are my own and not representative of my employers;
        future, past, and present.
      </section>
      <section>
        Check out the source for this website{' '}
        <Anchor href="https://github.com/actioninja/critical-action/tree/prod">here,</Anchor> and a writeup on the
        functionality <Anchor href="/blog/about-this-site">here.</Anchor>
      </section>
    </footer>
  );
};
