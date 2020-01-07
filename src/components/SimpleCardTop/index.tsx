import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardTop {
  className?: string;
}

export const SimpleCardTop: React.FunctionComponent<ISimpleCardTop> = ({ children, className }) => {
  return <div className={cn(className, 'flex flex-col')}>{children}</div>;
};
