import cn from 'classnames';
import * as React from 'react';
import { Icon, IconProp } from '../Icon';

export interface ISimpleCardLink {
  text?: string;
  className?: string;
}

export const SimpleCardLink = ({ text = 'Learn More', className }: ISimpleCardLink) => {
  return (
    <div className={cn(className, 'font-semibold')}>
      {text}
      <Icon icon={['fad', 'arrow-right']} className="ml-3" />
    </div>
  );
};
