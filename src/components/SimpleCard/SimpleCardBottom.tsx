import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardBottom {
  className?: string;
}

export const SimpleCardBottom: React.FunctionComponent<ISimpleCardBottom> = ({ children, className }) => {
  return <div className={cn(className, 'h-10')}>{children}</div>;
};
