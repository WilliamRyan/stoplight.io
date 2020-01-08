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
  id: number;
}

export const SimpleCard: React.FunctionComponent<ISimpleCard> = ({
  className,
  href,
  onClick,
  hoverable,
  children,
  iconFeature,
  w = '96',
}) => {
  const card = (
    <div
      className={cn(`w-${w}`, 'flex flex-col mt-14 sm:pt-14', className, {
        'bg-white rounded-lg p-8 pb-6 sm:mb-8 shadow-md hover-scale': hoverable,
        'px-5': !hoverable,
        'items-center': (href && !hoverable) || iconFeature,
        'bg-white rounded-lg p-8 pb-6 sm:mb-8 shadow-md': !hoverable && !href && !iconFeature,
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
