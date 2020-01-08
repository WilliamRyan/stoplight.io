import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardBody {
  summary?: string;
  className?: string;
}

export const SimpleCardBody: React.FunctionComponent<ISimpleCardBody> = ({ summary, className }) => {
  return <div className={cn(className, 'flex-1 mt-4 leading-loose text-grey-darker')}>{summary}</div>;
};
