import * as React from 'react';
import * as splitHeaderStyle from './SplitHeader.module.scss';

export type SplitHeaderProps = {
  rightSide: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  rightClassName?: string;
};

const SplitHeader = ({ rightSide, children, className, titleClassName, rightClassName }: SplitHeaderProps) => {
  return (
    <div className={`${splitHeaderStyle.container} ${className}`}>
      <h2 className={titleClassName}>{children}</h2>
      <span className={rightClassName}>{rightSide}</span>
    </div>
  );
};

export default SplitHeader;
