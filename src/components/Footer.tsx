import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as footerStyle from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={footerStyle.container}>
      <section>
        Copyright 2023 Rob Bailey. All source code for this website is licensed under the terms of{' '}
        <a href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</a>, or the applicable license for used libraries. All
        writing and content on this website is the sole ownership of Rob Bailey, unless otherwise indicated, and may be
        used licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0</a>. Contact me
        for usage that would not comply with that license. Any and all opinions are my own and not representative of my
        employers; future, past, and present.
      </section>
      <section>
        Check out the source for this website{' '}
        <a href="https://github.com/actioninja/critical-action/tree/prod">here,</a> and a writeup on the functionality{' '}
        <a>here. (soon)</a>
      </section>
    </footer>
  );
};
