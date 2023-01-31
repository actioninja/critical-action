import * as React from 'react';
import * as quoteStyle from './BlockQuote.module.css';

const BlockQuote = ({ children }: any) => {
  return <blockquote className={quoteStyle.blockQuote}>{children}</blockquote>;
};

export default BlockQuote;
