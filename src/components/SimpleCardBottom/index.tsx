import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardBottom {
  className?: string;
}

export const SimpleCardBottom: React.FunctionComponent<ISimpleCardBottom> = ({ children, className }) => {
  return <div className={cn(className, 'flex flex-col mt-5 pb-1 text-grey-dark text-normal')}>{children}</div>;
};
