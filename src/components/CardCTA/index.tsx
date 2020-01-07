import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';
import { Icon } from '../Icon';

export interface ICardCTA {
  cta: string;
  path?: string;
  className?: string;
  tag?: string;
  color?: string;
}

export const CardCTA: React.FunctionComponent<ICardCTA> = ({ cta, className, path = '', tag, color }) => {
  return (
    <Link
      to={path}
      disabled={!path}
      className={cn(className, 'flex items-center', {
        'pt-6 mt-6 border-t': tag,
      })}
    >
      {cta && (
        <div className="flex-1 pb-1 font-bold uppercase text-blue">
          {cta}
          <Icon icon={['fad', 'arrow-right']} className="pl-2" size="lg" />
        </div>
      )}
      {tag && (
        <div className="flex">
          <div
            className={`flex text-sm rounded-full border border-${color}-lighter bg-${color}-lightest text-${color}  font-semibold px-4 py-1`}
          >
            <div>{tag}</div>
          </div>
        </div>
      )}
    </Link>
  );
};
