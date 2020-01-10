import cn from 'classnames';
import * as React from 'react';
import { Icon } from '../Icon';

export interface ISimpleCardTag {
  className?: string;
  tag?: string;
  color?: string;
  text?: string;
}

export const SimpleCardTag: React.FunctionComponent<ISimpleCardTag> = ({ className, tag, color, text }) => {
  return (
    <>
      {text && (
        <div className={cn(className, 'font-semibold text-blue flex items-center flex-1')}>
          {text}
          <Icon icon={['fad', 'arrow-right']} className="ml-3" />
        </div>
      )}

      {tag && (
        <div className={cn(className, `text-sm text-${color} font-semibold flex`)}>
          <div
            className={`flex items-center px-4 py-1 text-sm font-semibold uppercase border rounded-full border-${color}-lighter bg-${color}-lightest text-${color}`}
          >
            {tag}
          </div>
        </div>
      )}
    </>
  );
};
