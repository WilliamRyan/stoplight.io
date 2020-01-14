import cn from 'classnames';
import * as React from 'react';

import { Link } from '../Link';

export interface ISimpleCard {
  className?: string;
  href?: string;
  onClick?: () => void;
  hoverable?: boolean;
  iconFeature?: boolean;
  w?: string;
}

export const SimpleCard: React.FunctionComponent<ISimpleCard> = ({ className, href, hoverable, children }) => {
  const card = (
    <div
      className={cn('flex flex-col', className, {
        'rounded-lg shadow hover-scale': hoverable,
        'cursor-pointer': href,
      })}
    >
      {children}
    </div>
  );
  if (href) {
    return <Link to={href}>{card}</Link>;
  }
  return card;
};
