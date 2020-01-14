import cn from 'classnames';
import { sign } from 'crypto';
import * as React from 'react';
import { withRouteData } from 'react-static';

export interface IContentBlock {
  className?: string;
}

export const ContentBlock: React.FunctionComponent<IContentBlock> = ({ className, children }) => {
  return <div className={cn(className, 'flex flex-col')}>{children} </div>;
};
