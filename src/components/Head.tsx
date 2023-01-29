import * as React from 'react';
import { HeadFC } from 'gatsby';

export type HeadArgs = {
  titleSuffix?: string;
  children?: React.ReactNode;
};

export const MasterHead = ({ titleSuffix, children }: HeadArgs) => (
  <>
    <title>
      {titleSuffix}
      {titleSuffix == undefined ? '' : ' - '}
      Critical Action
    </title>
    <meta charSet="utf-8" />
    <meta name="robots" content="follow" />
    <meta name="author" content="Rob Bailey (actioninja)" />
    <meta name="generator" content="Gatsby" />
    {children}
  </>
);
