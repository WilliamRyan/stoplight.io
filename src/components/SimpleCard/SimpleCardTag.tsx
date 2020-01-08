import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';
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
        <div className={cn(className, 'font-semibold')}>
          {text}
          <Icon icon={['fad', 'arrow-right']} className="ml-3" />
        </div>
      )}

      {tag && (
        <div className={cn(className, `text-sm text-${color} font-semibold`)}>
          <div
            className={`flex rounded-full border border-${color}-lighter bg-${color}-lightest text-${color} px-4 py-1`}
          >
            {tag}
          </div>
        </div>
      )}
    </>
  );
};
