import cn from 'classnames';
import * as React from 'react';

export interface IContentBlock {
  className?: string;
}

export const ContentBlock: React.FunctionComponent<IContentBlock> = ({ className, children }) => {
  return <div className={cn(className, 'flex flex-col')}>{children} </div>;
};
