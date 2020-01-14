import cn from 'classnames';
import { sign } from 'crypto';
import * as React from 'react';
import { withRouteData } from 'react-static';

export interface ILeftContentForm {
  className?: string;
  isReversed?: boolean;
}

export const LeftContentForm: React.FunctionComponent<ILeftContentForm> = ({ className, children }) => {
  return <div className={cn(className, 'flex flex-row sm:flex-row-reverse')}>{children}</div>;
};
