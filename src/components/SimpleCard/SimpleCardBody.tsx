import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardBody {
  description?: string;
  className?: string;
}

export const SimpleCardBody: React.FunctionComponent<ISimpleCardBody> = ({ description, className }) => {
  return (
    <React.Fragment>
      {description && <div className={cn(className, 'flex-1')} dangerouslySetInnerHTML={{ __html: description }} />}
    </React.Fragment>
  );
};
