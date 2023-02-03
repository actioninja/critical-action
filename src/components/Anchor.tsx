import * as React from 'react';
import anchorStyle from './Anchor.module.scss';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

type AnchorProps = {
  href?: string;
  children: React.ReactNode;
};

const Anchor = ({ href, children }: AnchorProps) => {
  const internalLink = href.startsWith('/');

  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          {internalLink ? (
            <Link href={href} className={anchorStyle.anchor}>
              {children}
            </Link>
          ) : (
            <a href={href} className={anchorStyle.anchor}>
              {children}
            </a>
          )}
        </TooltipTrigger>
        <TooltipContent className={anchorStyle.tooltip}>{href}</TooltipContent>
      </Tooltip>
    </>
  );
};

export default Anchor;
