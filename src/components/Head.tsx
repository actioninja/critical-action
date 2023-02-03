import * as React from 'react';

export type HeadArgs = {
  titlePrefix?: string;
  children?: React.ReactNode;
};

export const MasterHead = ({ titlePrefix, children }: HeadArgs) => (
  <>
    <title>
      {titlePrefix}
      {titlePrefix == undefined ? '' : ' - '}
      Critical Action
    </title>
    <meta charSet="utf-8" />
    <meta name="robots" content="follow" />
    <meta name="author" content="Rob Bailey (actioninja)" />
    <meta name="generator" content="Gatsby" />
    {children}
  </>
);
