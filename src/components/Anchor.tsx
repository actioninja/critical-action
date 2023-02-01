import * as React from 'react';
import * as anchorStyle from './Anchor.module.scss';
import { Link } from 'gatsby';
import { autoUpdate, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from '@floating-ui/react';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

type AnchorProps = {
  href?: string;
  to?: string;
  children: React.ReactNode;
};

const Anchor = ({ href, to, children }: AnchorProps) => {
  if (href != null) {
    return (
      <>
        <Tooltip>
          <TooltipTrigger>
            <a href={href} className={anchorStyle.anchor}>
              {children}
            </a>
          </TooltipTrigger>
          <TooltipContent className={anchorStyle.tooltip}>{href}</TooltipContent>
        </Tooltip>
      </>
    );
  }
  if (to != null) {
    return (
      <>
        <Tooltip>
          <TooltipTrigger>
            <Link to={to} className={anchorStyle.anchor}>
              {children}
            </Link>
          </TooltipTrigger>
          <TooltipContent className={anchorStyle.tooltip}>{to}</TooltipContent>
        </Tooltip>
      </>
    );
  }

  return <>'Error! You must provide a href or to prop'</>;
};

export default Anchor;
